import { motion, useTransform, type MotionValue } from 'framer-motion';
import type { ReactNode } from 'react';

interface LeafProps {
  /** 0 is flat on the right, -180 is flat on the left. */
  rotation: MotionValue<number>;
  front: ReactNode;
  back: ReactNode;
  zIndex: number;
}

/**
 * One leaf of the binder: a sheet hinged at the spine with a page on each face.
 *
 * ## Why this is one quad and not a strip mesh
 *
 * The obvious way to bend paper in CSS is to slice the sheet into hinged
 * vertical strips and walk them as a chain from the spine outwards. That was
 * built, it worked, and it was removed, because **flat quads cannot tile a
 * curve under perspective without showing their seams.** Each strip sits at a
 * slightly different depth, the perspective divide scales each one
 * differently, and adjacent edges stop lining up. Every horizontal rule on the
 * page grows a sawtooth.
 *
 * Each fix only moved the artifact:
 *
 * - More strips made the steps smaller and more numerous, never absent.
 * - Damping the depth flattened the very curve the slicing existed to create.
 * - Compensating each strip's height for its own depth closed the seams
 *   mid-page and tore the top and bottom edges open instead, because the
 *   transform origin is the left edge and the scale moved each strip's corners
 *   by a different amount.
 *
 * It also put twenty-six copies of the page in the DOM during every turn.
 *
 * So the geometry is one rigid quad and the bend is carried entirely by light.
 * That is not a retreat: the eye reads a brightness gradient as curvature far
 * more readily than it reads a silhouette, which is why the strip version
 * needed per-strip shading before it read as paper at all. A single sheet with
 * a travelling specular ridge has no seams to show because it has none.
 */
export const Leaf = ({ rotation, front, back, zIndex }: LeafProps) => {
  /** 0 flat on either side, 1 standing upright at the spine. */
  const upright = useTransform(rotation, [0, -90, -180], [0, 1, 0]);

  /*
   * The bow, as light.
   *
   * Stops that travel across the sheet as it turns: the spine edge in shadow
   * where the paper folds in, a bright ridge where the curve catches the lamp,
   * and the free edge falling away again. The ridge starts near the spine and
   * sweeps outwards, which is what a real sheet does as the bend migrates
   * towards the edge you lifted.
   */
  const frontLight = useTransform(rotation, (r) => {
    const p = Math.min(1, Math.abs(r) / 180);
    const ridge = 18 + p * 62;
    const lift = 0.3 * Math.sin(Math.PI * p);
    const dark = 0.5 * Math.min(1, Math.abs(r) / 105);
    return (
      'linear-gradient(to right,' +
      ` rgba(0,0,0,${(dark + 0.16).toFixed(3)}) 0%,` +
      ` rgba(0,0,0,${(dark * 0.5).toFixed(3)}) ${Math.max(0, ridge - 16).toFixed(1)}%,` +
      ` rgba(255,255,255,${lift.toFixed(3)}) ${ridge.toFixed(1)}%,` +
      ` rgba(0,0,0,${(dark * 0.8).toFixed(3)}) ${Math.min(99, ridge + 26).toFixed(1)}%,` +
      ` rgba(0,0,0,${(dark + 0.1).toFixed(3)}) 100%)`
    );
  });

  const backLight = useTransform(rotation, (r) => {
    const p = Math.min(1, Math.abs(r) / 180);
    const ridge = 18 + (1 - p) * 62;
    const lift = 0.24 * Math.sin(Math.PI * p);
    const dark = 0.46 * Math.min(1, (180 - Math.abs(r)) / 105);
    return (
      'linear-gradient(to left,' +
      ` rgba(0,0,0,${(dark + 0.14).toFixed(3)}) 0%,` +
      ` rgba(0,0,0,${(dark * 0.5).toFixed(3)}) ${Math.max(0, ridge - 16).toFixed(1)}%,` +
      ` rgba(255,255,255,${lift.toFixed(3)}) ${ridge.toFixed(1)}%,` +
      ` rgba(0,0,0,${(dark * 0.8).toFixed(3)}) ${Math.min(99, ridge + 26).toFixed(1)}%,` +
      ` rgba(0,0,0,${(dark + 0.08).toFixed(3)}) 100%)`
    );
  });

  /*
   * A sheet lifted from one edge sags a little, most while it is upright and
   * carrying its own weight. Two degrees registers and is small enough never
   * to break the page's rectangle.
   */
  const sag = useTransform(upright, [0, 1], [0, 1.8]);

  /*
   * Each face floats a hair off the page plane, along its own normal.
   *
   * Without this the turning sheet passes *behind* the page it is landing on.
   * The board is `preserve-3d`, so the browser sorts siblings by 3D position
   * and a `z-index` on the leaf does not settle it: at -180deg the sheet is
   * exactly coplanar with the left page, and coplanar surfaces resolve
   * arbitrarily. The visible symptom is that the page never appears to land.
   * You see the old left page right up until the state updates, and then it
   * simply swaps.
   *
   * The offset has to be applied *after* each face's own rotation so it runs
   * along that face's normal rather than the board's: `translateZ` on the
   * front, and `rotateY(180deg) translateZ` on the back, so whichever face is
   * pointing at the reader is always the one in front. Framer composes its
   * shorthand props in a fixed order (translate before rotate), which is the
   * wrong order here, so these are written as explicit transform strings.
   */
  const frontTransform = useTransform(sag, (d) => `translateZ(1.2px) skewY(${d}deg)`);
  const backTransform = useTransform(
    sag,
    (d) => `rotateY(180deg) translateZ(1.2px) skewY(${d}deg)`
  );

  // The shadow the raised sheet throws across the pages underneath.
  const castOpacity = useTransform(upright, [0, 1], [0, 0.5]);
  const castSkew = useTransform(rotation, [0, -180], [-20, 20]);

  return (
    <motion.div
      className="preserve-3d absolute inset-y-0 left-1/2 right-0"
      style={{ rotateY: rotation, transformOrigin: 'left center', zIndex }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 origin-left"
        style={{
          opacity: castOpacity,
          skewY: castSkew,
          translateZ: -2,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1) 45%, transparent 75%)'
        }}
      />

      <motion.div
        className="backface-hidden absolute inset-0 overflow-hidden rounded-r-[3px]"
        style={{ transform: frontTransform }}
      >
        {front}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: frontLight }}
        />
      </motion.div>

      {/*
        Centre origin on both faces, deliberately. `origin-right` here mirrored
        the verso across its own right edge and parked it a full page-width to
        the left of the sheet, so the face that is supposed to land on the left
        page was never over it at all. A 180deg flip is only in place when it
        pivots about the centre.
      */}
      <motion.div
        className="backface-hidden absolute inset-0 overflow-hidden rounded-l-[3px]"
        style={{ transform: backTransform }}
      >
        {back}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: backLight }}
        />
      </motion.div>
    </motion.div>
  );
};
