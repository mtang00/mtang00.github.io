import { motion, useTransform, type MotionValue } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * How many hinged strips the sheet is cut into.
 *
 * A single `rotateY` is a rigid panel, and the eye reads it as cardboard
 * immediately: real paper bows, and the free edge leads the spine through the
 * whole arc. Eight strips is enough to read as a continuous curve at page size
 * and cheap enough to stay at 60fps, since only one leaf is ever in flight.
 */
const STRIPS = 18;

/** Peak extra rotation at the free edge, in degrees. */
const CURVE = 18;

/*
 * How much of the computed depth to actually apply.
 *
 * Each strip is a flat quad, so two neighbours at different depths are scaled
 * differently by the perspective divide and their shared edge no longer lines
 * up. At full depth that reads as a staircase down the page rather than a
 * curve. Damping the Z keeps the horizontal foreshortening, which is what the
 * eye actually reads as a turning page, while shrinking the mismatch that
 * eighteen strips then take the rest of the way down to invisible.
 */
const DEPTH = 0.55;

interface LeafProps {
  /** 0 is flat on the right, -180 is flat on the left. */
  rotation: MotionValue<number>;
  front: ReactNode;
  back: ReactNode;
  zIndex: number;
}

/**
 * The absolute angle of strip `i` for a given sheet rotation.
 *
 * The bend is zero at both ends and peaks when the sheet is upright, so a
 * landed page is perfectly flat and matches the static page underneath it
 * exactly. Without that the page visibly un-bends after it lands.
 */
const angleOf = (i: number, total: number) => {
  const p = Math.min(1, Math.abs(total) / 180);
  const lag = Math.pow(i / (STRIPS - 1), 1.25);
  /*
   * The free edge *lags* the spine. This had the sign the other way at first,
   * which looks reasonable written down and is badly wrong on screen: if the
   * outer strips lead, then as the spine passes vertical the entire sheet is
   * edge-on at the same instant and the page vanishes into a one-pixel line
   * halfway through every turn. A real sheet trails its free edge, so the
   * page always presents some face to the room and never disappears.
   */
  return total + CURVE * lag * Math.sin(Math.PI * p);
};

/**
 * Where strip `i` hinges, walking the chain from the spine outwards.
 *
 * Each strip starts where the previous one ended, so the sheet stays joined
 * while it curves. Laying them out independently leaves visible breaks at
 * every seam the moment the angles diverge.
 */
const chain = (i: number, total: number, stripW: number) => {
  let x = 0;
  let z = 0;
  for (let j = 0; j < i; j += 1) {
    const a = (angleOf(j, total) * Math.PI) / 180;
    x += stripW * Math.cos(a);
    /*
     * Negated, because the sheet lifts *towards* the reader.
     * The angles run negative, so taking sin directly sends the strips away
     * from the camera. In a `preserve-3d` parent the browser sorts by depth
     * and ignores z-index, so the whole turning page quietly rendered behind
     * the flat page it was supposed to be covering: the geometry measured
     * perfectly and only the spine-most strip was ever visible.
     */
    z -= stripW * Math.sin(a) * DEPTH;
  }
  return { x, z };
};

interface StripProps {
  index: number;
  rotation: MotionValue<number>;
  front: ReactNode;
  back: ReactNode;
  /** The sheet's width in px, so the chain can be walked in real units. */
  sheetPx: number;
}

const Strip = ({ index, rotation, front, back, sheetPx }: StripProps) => {
  const pct = 100 / STRIPS;
  const stripPx = sheetPx / STRIPS;

  /*
   * Pixels, not container units.
   *
   * The first version measured the chain in `cqw` and put `container-type`
   * on the sheet to resolve them. Containment makes that element a stacking
   * context, so every strip that swung past the spine stopped painting and
   * the sheet appeared to vanish into a sliver. Measuring the sheet and
   * working in px needs no container and cannot flatten the 3D chain.
   */
  const transform = useTransform(rotation, (r) => {
    const { x, z } = chain(index, r, stripPx);
    const dx = x - index * stripPx;
    /*
     * No vertical compensation here, deliberately.
     *
     * Scaling each strip by the inverse of its own perspective factor looks
     * like the right fix for the faint sawtooth along horizontal rules, and
     * it is measurably worse: `transform-origin` is `left center`, so the
     * scale moves the top and bottom edges apart by a different amount per
     * strip and trades a hairline seam mid-page for a visible staircase
     * along both long edges. Eighteen strips and damped depth get the seam
     * small enough that it is gone at the speed the page actually moves.
     */
    return `translate3d(${dx}px, 0, ${z}px) rotateY(${angleOf(index, r)}deg)`;
  });

  // Each strip is lit by its own angle, which is what makes the bow visible:
  // a curve you cannot see the shading of is just a shape.
  const frontShade = useTransform(rotation, (r) => {
    const a = angleOf(index, r);
    return Math.min(0.62, Math.max(0, (-a / 110) * 0.62));
  });
  const backShade = useTransform(rotation, (r) => {
    const a = angleOf(index, r);
    return Math.min(0.55, Math.max(0, ((180 + a) / 110) * 0.55));
  });
  const gloss = useTransform(rotation, (r) => {
    const a = Math.abs(angleOf(index, r));
    return Math.max(0, 1 - Math.abs(a - 90) / 58) * 0.3;
  });

  return (
    <motion.div
      className="preserve-3d absolute top-0 h-full"
      style={{
        left: `${index * pct}%`,
        // A hair wider than its share, so neighbouring strips overlap and no
        // sub-pixel hairline opens up along a seam.
        width: `calc(${pct}% + 0.75px)`,
        transformOrigin: 'left center',
        transform
      }}
    >
      <div className="backface-hidden absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 h-full"
          style={{ width: `${STRIPS * 100}%`, left: `-${index * 100}%` }}
        >
          {front}
        </div>
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: frontShade }} />
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: gloss,
            background: 'linear-gradient(94deg, transparent, rgba(255,255,255,0.9), transparent)'
          }}
        />
      </div>

      <div
        className="backface-hidden absolute inset-0 overflow-hidden"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <div
          className="absolute top-0 h-full"
          style={{
            width: `${STRIPS * 100}%`,
            // Mirrored: the verso reads right to left relative to the recto.
            left: `-${(STRIPS - 1 - index) * 100}%`
          }}
        >
          {back}
        </div>
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: backShade }} />
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: gloss,
            background: 'linear-gradient(86deg, transparent, rgba(255,255,255,0.75), transparent)'
          }}
        />
      </div>
    </motion.div>
  );
};

export const Leaf = ({ rotation, front, back, zIndex }: LeafProps) => {
  // Cast shadow on the pages below, strongest while the sheet stands upright.
  const castOpacity = useTransform(rotation, [0, -90, -180], [0, 0.45, 0]);
  const castSkew = useTransform(rotation, [0, -180], [-20, 20]);

  const root = useRef<HTMLDivElement>(null);
  const [sheetPx, setSheetPx] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const measure = () => setSheetPx(el.getBoundingClientRect().width);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={root}
      className="preserve-3d absolute inset-y-0 left-1/2 right-0"
      style={{ zIndex }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 origin-left"
        style={{
          opacity: castOpacity,
          skewY: castSkew,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1) 45%, transparent 75%)'
        }}
      />
      {sheetPx > 0 &&
        Array.from({ length: STRIPS }, (_, i) => (
          <Strip
            key={i}
            index={i}
            rotation={rotation}
            front={front}
            back={back}
            sheetPx={sheetPx}
          />
        ))}
    </div>
  );
};
