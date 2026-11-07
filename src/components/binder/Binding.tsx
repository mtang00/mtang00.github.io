/**
 * The binding: three punched holes per page and the rings through them.
 *
 * This is what makes the object read as a binder rather than a book. The
 * earlier version had three small discs at the spine, which say "screw post"
 * at best and "rivet" at worst. Punched paper plus a ring arcing through it
 * is the one silhouette nobody mistakes for anything else.
 *
 * Everything here is sized from the real article. On an A4 sheet a punch is
 * 8mm across with its centre 12mm in from the edge, which against a 297mm
 * page is 2.7% of the height and, on a page whose width is three quarters of
 * its height, 5.7% of the width. The ring then has to span hole to hole, so
 * its diameter follows from those two numbers rather than being chosen.
 */

/** Where the holes sit down the page, as a percentage of its height. */
export const HOLE_AT = [25, 50, 75] as const;
/** Hole diameter, as a percentage of the page height. */
export const HOLE_D = 2.7;
/** Spine to hole centre, as a percentage of the page width. */
export const HOLE_IN = 5.7;
/**
 * The hole's radius expressed against the page width instead of its height.
 *
 * `left` and `right` resolve percentages against the containing block's
 * width, so offsetting a hole by its own radius needs the radius in those
 * units. Every page here is three parts wide to four tall, on the spread and
 * on a phone alike, which is the only reason one constant covers both.
 *
 * Without this the holes sat a radius too far in, because `left: 5.7%` puts
 * the hole's *edge* on the 5.7% line and the ring is drawn to meet centres.
 */
const HOLE_R = HOLE_D / 2 / 0.75;

/**
 * The holes in one page.
 *
 * `spine` is the edge of *this element* the binding runs along, in the
 * element's own coordinates. That matters for the verso of a turning leaf:
 * it is mirrored by its own 180deg flip, so it carries its holes on the right
 * and they land on the left, exactly as its gutter shadow does.
 */
export const Punches = ({ spine }: { spine: 'left' | 'right' }) => (
  <div className="pointer-events-none absolute inset-0" aria-hidden>
    {HOLE_AT.map((p) => (
      <span
        key={p}
        className="punch"
        style={{
          top: `calc(${p}% - ${HOLE_D / 2}%)`,
          ...(spine === 'left'
            ? { left: `calc(${HOLE_IN}% - ${HOLE_R}%)` }
            : { right: `calc(${HOLE_IN}% - ${HOLE_R}%)` })
        }}
      />
    ))}
  </div>
);

/**
 * The same binding on a flat page, for the narrow layout.
 *
 * No measurement here, and none needed: nothing is tilted, so every offset
 * resolves exactly as a percentage of the sheet it sits on. The spread view
 * cannot do this because its board is under a perspective.
 *
 * Render it as a sibling of the 3D stage rather than inside it, for the same
 * reason <Rings> is: the outgoing sheet pivots about this very edge and
 * sweeps straight through anything sharing its space.
 */
export const FlatRings = () => {
  const wire = HOLE_D * 0.374;
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        className="spine-plate absolute rounded-full"
        style={{ left: '-0.95%', width: '1.9%', top: '19%', height: '62%' }}
      />
      {HOLE_AT.map((p) => (
        <span
          key={p}
          className="ring absolute rounded-full"
          style={{
            left: `-${HOLE_IN}%`,
            width: `${HOLE_IN * 2}%`,
            top: `calc(${p}% - ${wire / 2}%)`,
            height: `${wire}%`
          }}
        />
      ))}
    </div>
  );
};

interface RingsProps {
  /** The board's measured box. */
  x: number;
  top: number;
  height: number;
  width: number;
  /**
   * Hole centres in viewport pixels, measured off the page itself.
   *
   * Not computed from `top` and `height`. The board is tilted under a
   * perspective, so the top of the page is further from the camera than the
   * bottom and the projection is not linear down its length: a hole at 25%
   * of the page does not land at 25% of the projected box. Reading the
   * punches' own rectangles is the only way these line up, and a ring that
   * misses its hole by three pixels is worse than no ring.
   */
  ys: number[];
}

/**
 * The rings, drawn outside the 3D stage.
 *
 * Same reason the posts were: a sheet near edge-on sweeps hundreds of pixels
 * toward the camera, so nothing inside `preserve-3d` can stay reliably in
 * front of it, and a ring that fills and empties as a page goes past is the
 * first thing anyone notices. The binding really is above the paper, so
 * taking it out of the 3D space is the honest fix rather than a trick.
 *
 * Seen from almost straight above, a ring is not a circle. Its plane stands
 * perpendicular to the page, so what you see is the top of the loop: a short
 * metal bar crossing the gutter, bright along the crown and dark where it
 * turns down into the holes. That is what is drawn.
 */
export const Rings = ({ x, top, height, width, ys }: RingsProps) => {
  /*
   * Wire thickness against hole diameter is what sells the pair.
   *
   * A binder punch is 8mm and the wire through it is about 3mm, so the hole
   * shows as a dark collar around the wire wherever it passes through. At
   * half the hole's width the wire filled it and both cues went: no visible
   * hole, and a ring that read as a dumbbell.
   */
  const wire = Math.max(4, height * 0.0101);
  // Hole centre to hole centre across the spine, plus the wire's own cap.
  const span = width * (HOLE_IN / 100) + wire;
  const plate = Math.max(7, width * 0.0082);

  const first = ys[0] - top;
  const last = ys[ys.length - 1] - top;

  return (
    <div
      className="pointer-events-none fixed"
      style={{ left: x - span / 2, top, width: span, height, zIndex: 55 }}
      aria-hidden
    >
      {/*
        The mechanism the rings are riveted to.
        It runs from a little above the first ring to a little below the last,
        because that is the length of the real part, and it sits deep in the
        gutter where almost no light reaches. Drawn the full height of the
        board and lit like the rings themselves, it was a steel rod down the
        middle of the spread and the brightest thing in the picture.
      */}
      <div
        className="spine-plate absolute"
        style={{
          left: (span - plate) / 2,
          width: plate,
          top: first - height * 0.035,
          height: last - first + height * 0.07,
          borderRadius: plate / 2
        }}
      />
      {ys.map((cy, i) => (
        <span
          key={i}
          className="ring absolute left-0"
          style={{ top: cy - top - wire / 2, width: span, height: wire, borderRadius: wire }}
        />
      ))}
    </div>
  );
};
