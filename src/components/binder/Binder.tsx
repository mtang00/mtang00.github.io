import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from 'framer-motion';
import { Leaf } from './Leaf';
import { leaves, spreadTitles } from '../../data/pages';
import { SinglePage } from './SinglePage';

/** How far a drag must travel across the page before it commits to a turn. */
const COMMIT_RATIO = 0.22;
/** Wheel and trackpad events arrive in bursts; one turn per burst. */
const WHEEL_COOLDOWN_MS = 620;
/** Pointer travel under this is a click on the page, not a drag of it. */
const CLICK_SLOP = 6;
/** How many sheet edges the fore-edge counts before it stops growing. */
const EDGE_MAX = 7;
/** How wide one sheet reads in the stack. Two of these is one hairline pair. */
const EDGE_PX = 1.1;

interface Flip {
  leaf: number;
  dir: 1 | -1;
}

/** Below this the spread stops being readable and becomes one page at a time. */
const SPREAD_MIN_PX = 820;

export const Binder = () => {
  const [wide, setWide] = useState(
    typeof window === 'undefined' ? true : window.innerWidth >= SPREAD_MIN_PX
  );

  /*
   * The screw posts are drawn outside the 3D stage, from the board's measured
   * box, and this is what tracks it.
   *
   * They used to live inside the board with a z-index and then a translateZ,
   * and neither works: the board is `preserve-3d`, so siblings sort by depth,
   * and a sheet near edge-on sweeps some six hundred pixels toward the camera.
   * No small depth offset survives that, so the sheet crossed through the post
   * heads and left them looking half filled for most of every turn. A real
   * screw post passes through the paper and is never behind it, so the honest
   * fix is to take the posts out of the 3D space rather than to out-bid it.
   */
  useEffect(() => {
    const el = boardRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setSpine({ x: r.left + r.width / 2, top: r.top, height: r.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [wide]);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${SPREAD_MIN_PX}px)`);
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  /** Leaves already turned. 0 is the closed cover, leaves.length is the back. */
  const [turned, setTurned] = useState(0);
  /** The one leaf currently in flight, if any. Only this leaf is a <Leaf>. */
  const [flip, setFlip] = useState<Flip | null>(null);
  const [hint, setHint] = useState(true);

  const rotation = useMotionValue(0);
  const reduce = useReducedMotion();

  const stage = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [spine, setSpine] = useState<{ x: number; top: number; height: number } | null>(null);
  const lastWheel = useRef(0);
  const drag = useRef<{ x: number; dir: 1 | -1; width: number } | null>(null);

  /* --- The scene ---------------------------------------------------------- */

  /**
   * The binder arriving. 0 is in the air and unlit, 1 is resting on the desk.
   *
   * Set straight to 1 under reduced motion so the first paint is the finished
   * scene rather than an entrance that never runs, which would leave the board
   * parked at its starting transform.
   */
  const intro = useMotionValue(reduce ? 1 : 0);
  /** A few pixels of give when a sheet lands. Paper has weight. */
  const settle = useMotionValue(0);

  /*
   * Viewpoint parallax, not a moving light.
   *
   * The pointer stands in for the reader's head: lean right and you see a
   * little more of the binder's left side, while the lamp pool, being further
   * away than the object, shifts the other way and by less. A lamp that
   * followed the cursor would be a light on a stick. This is the whole reason
   * the pool was split out of the room's background into its own layer.
   *
   * Both rotations stay under three degrees. The screw posts are positioned
   * from a measured box that a transform does not update, and the board's
   * centre is the one point a rotation about its own centre leaves fixed, so
   * the posts hold at the spine as long as the angles stay small.
   */
  const px = useSpring(0, { stiffness: 46, damping: 18, mass: 0.7 });
  const py = useSpring(0, { stiffness: 46, damping: 18, mass: 0.7 });

  const boardTransform = useTransform(
    [intro, settle, px, py],
    ([i, s, x, y]: number[]) =>
      `translate3d(0, ${((1 - i) * 54 + s).toFixed(2)}px, 0)` +
      ` scale(${(0.93 + i * 0.07).toFixed(4)})` +
      ` rotateX(${(7 + (1 - i) * 11 - y * 2.2).toFixed(2)}deg)` +
      ` rotateY(${(x * 2.6).toFixed(2)}deg)`
  );
  const boardOpacity = useTransform(intro, [0, 0.3, 1], [0, 0.85, 1]);
  const lampTransform = useTransform(
    [px, py],
    ([x, y]: number[]) => `translate3d(${(-x * 30).toFixed(1)}px, ${(-y * 22).toFixed(1)}px, 0)`
  );
  const lampOpacity = useTransform(intro, [0, 1], [0.35, 1]);

  useEffect(() => {
    if (reduce) return;
    const run = animate(intro, 1, { duration: 1.15, delay: 0.12, ease: [0.16, 1, 0.3, 1] });
    return () => run.stop();
  }, [intro, reduce]);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth - 0.5) * 2);
      py.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    // Back to square on the way out, so a binder nobody is looking at sits
    // straight rather than frozen at whatever angle the cursor left it.
    const centre = () => {
      px.set(0);
      py.set(0);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', centre);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', centre);
    };
  }, [px, py, reduce]);

  /* --- Turning ------------------------------------------------------------ */

  const atStart = turned === 0;
  const atEnd = turned >= leaves.length;
  const busy = flip !== null && drag.current === null;

  /**
   * Turn one leaf.
   *
   * `from` is passed rather than assumed so a drag can hand over mid-flight:
   * the pointer has already carried the sheet partway, and the animation
   * finishes from there instead of snapping back to flat and replaying.
   */
  const turn = useCallback(
    (dir: 1 | -1, from?: number) => {
      if (flip !== null && from === undefined) return;
      if (dir === 1 && atEnd) return;
      if (dir === -1 && atStart) return;

      const leaf = dir === 1 ? turned : turned - 1;
      const to = dir === 1 ? -180 : 0;

      setHint(false);
      setFlip({ leaf, dir });
      if (from === undefined) rotation.set(dir === 1 ? 0 : -180);

      const land = () => {
        setTurned((t) => t + dir);
        setFlip(null);
        /*
         * The thunk.
         *
         * A sheet dropping onto the stack presses the whole block down a hair
         * and it comes back. Three pixels, and it is the difference between a
         * page that arrives and one that is simply there.
         *
         * It rides on the board rather than on the sheet, deliberately: by
         * the time this fires the sheet has already handed over to the flat
         * page, and anything attached to the sheet would be a jump at the one
         * frame the eye is already watching.
         */
        if (!reduce) {
          animate(settle, [0, 3.2, 0], {
            duration: 0.46,
            times: [0, 0.26, 1],
            ease: [0.16, 1, 0.3, 1]
          });
        }
      };

      if (reduce) {
        rotation.set(to);
        land();
        return;
      }

      // Shorter travel, shorter flight. A sheet nudged most of the way should
      // not take as long as one thrown from flat.
      const left = Math.abs(to - rotation.get()) / 180;
      animate(rotation, to, {
        duration: 0.3 + left * 0.5,
        ease: [0.16, 1, 0.3, 1],
        onComplete: land
      });
    },
    [atEnd, atStart, flip, reduce, rotation, settle, turned]
  );

  /** Snap the sheet home when a drag did not travel far enough to commit. */
  const cancel = useCallback(
    (dir: 1 | -1) => {
      animate(rotation, dir === 1 ? 0 : -180, {
        duration: 0.34,
        ease: [0.16, 1, 0.3, 1],
        onComplete: () => setFlip(null)
      });
    },
    [rotation]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        turn(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        turn(-1);
      } else if (e.key === 'Home' && !busy) {
        e.preventDefault();
        setTurned(0);
      } else if (e.key === 'End' && !busy) {
        e.preventDefault();
        setTurned(leaves.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [busy, turn]);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel.current < WHEEL_COOLDOWN_MS) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 8) return;
      lastWheel.current = now;
      turn(delta > 0 ? 1 : -1);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [turn]);

  /* --- Dragging the sheet ------------------------------------------------ */

  const onPointerDown = (e: React.PointerEvent) => {
    if (flip !== null || reduce) return;
    // Links on a page are destinations, not page edges.
    if ((e.target as HTMLElement).closest('a,button')) return;
    // Measured against the page, not the stage. The stage is the whole window
    // and the binder is centred in it, so using the stage made a full-page
    // drag read as only two thirds of a turn.
    const page = boardRef.current?.getBoundingClientRect();
    const box = page ?? stage.current?.getBoundingClientRect();
    if (!box) return;
    const dir: 1 | -1 = e.clientX >= box.left + box.width / 2 ? 1 : -1;
    if (dir === 1 && atEnd) return;
    if (dir === -1 && atStart) return;

    drag.current = { x: e.clientX, dir, width: box.width / 2 };
    rotation.set(dir === 1 ? 0 : -180);
    setFlip({ leaf: dir === 1 ? turned : turned - 1, dir });
    setHint(false);
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    const ratio =
      d.dir === 1
        ? Math.min(1, Math.max(0, -dx / d.width))
        : Math.min(1, Math.max(0, dx / d.width));
    rotation.set(d.dir === 1 ? -180 * ratio : -180 + 180 * ratio);
  };

  const endDrag = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    drag.current = null;
    const dx = e.clientX - d.x;

    /*
     * A press that never moved is a click, and a click on a page turns it:
     * right for the next, left for the previous. Measured in raw pixels
     * rather than as a fraction of the page, because what separates a tap
     * from a drag is the hand, not the size of the binder.
     */
    if (Math.abs(dx) < CLICK_SLOP) {
      turn(d.dir, rotation.get());
      return;
    }

    const travelled = d.dir === 1 ? -dx / d.width : dx / d.width;
    if (travelled > COMMIT_RATIO) turn(d.dir, rotation.get());
    else cancel(d.dir);
  };

  /*
   * Which pages sit flat under the leaf in flight.
   *
   * While a leaf lifts off the right, the page revealed beneath it is the
   * *next* one, not the one that just left. Mirrored going back. Getting this
   * wrong is invisible at rest and obvious the moment anything moves, because
   * the page under the sheet is briefly a duplicate of the sheet itself.
   */
  const leftIndex = flip?.dir === -1 ? turned - 2 : turned - 1;
  const rightIndex = flip?.dir === 1 ? turned + 1 : turned;
  const progress = leaves.length ? turned / leaves.length : 0;

  /*
   * How much paper is stacked on each side, in pixels of fore-edge.
   *
   * Capped at the board's own margin: the stack lives in the 11px the cover
   * board stands out past the paper, and a wider one would hang off the object
   * rather than sit inside it.
   */
  const edgeLeft = Math.min(turned, EDGE_MAX) * EDGE_PX;
  const edgeRight = Math.min(leaves.length - turned, EDGE_MAX) * EDGE_PX;

  // Where a leaf has no page: the inside of a cover, which is board.
  const board = <div className="leather h-full w-full" />;

  // After every hook, never before: an early return above them would change
  // the hook order on the first resize across the breakpoint.
  if (!wide) return <SinglePage />;

  return (
    <div className="room-light room-grain room-vignette relative min-h-screen w-full overflow-hidden">
      <motion.div className="lamp" style={{ transform: lampTransform, opacity: lampOpacity }} />
      <div className="motes" />

      <div
        ref={stage}
        className="relative mx-auto flex min-h-screen max-w-[1700px] select-none items-center justify-center px-3 pb-24 pt-6 sm:px-5"
        style={{ perspective: '5200px', touchAction: 'pan-y', cursor: flip ? 'grabbing' : 'pointer' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {/*
          Sized by whichever runs out first: the page, the viewport, or the
          height left over once the controls have their band. `aspect-ratio`
          alone derives height from width and happily grows the board under
          the chrome, which is what it did on the first pass.
        */}
        <motion.div
          ref={boardRef}
          className="preserve-3d relative"
          style={{
            transform: boardTransform,
            opacity: boardOpacity,
            width: 'min(1500px, 93vw, calc((100vh - 10.5rem) * 1.5))',
            aspectRatio: '3 / 2'
          }}
        >
          {/*
            The lit pages throwing light back into the room.
            Two bright sheets under a lamp are the brightest surface in the
            scene by a wide margin, and with nothing around them they looked
            cut out of the dark rather than lying in it.
          */}
          <div
            className="page-glow pointer-events-none absolute -inset-[16%]"
            style={{ transform: 'translateZ(-60px)' }}
          />

          {/* The desk bouncing a little light back up under the binder. */}
          <div
            className="desk-bounce pointer-events-none absolute -inset-x-[10%] -bottom-[11%] h-[26%]"
            style={{ transform: 'translateZ(-40px)' }}
          />

          {/* Where the binder meets the desk. Behind the board, hence -z. */}
          <div
            className="contact-shadow pointer-events-none absolute -inset-x-[6%] -bottom-[7%] h-[22%]"
            style={{ transform: 'translateZ(-30px)' }}
          />

          {/* The cover board, a hard black margin around the paper. */}
          <div
            className="leather absolute -inset-[11px] overflow-hidden rounded-[7px]"
            style={{
              boxShadow:
                '0 64px 130px -34px rgba(0,0,0,0.9), 0 0 0 1px var(--cover-edge), inset 0 1px 0 rgba(255,255,255,0.06)'
            }}
          />

          {/*
            The fore-edges: the cut edges of the sheets still stacked on each
            side, sitting in the board's margin. They are the one cue that
            says how far through the binder you are without reading a counter,
            and they are why the object looks like it holds paper: the stack
            visibly thins on the right and thickens on the left as you read.

            Width, not `scaleX`, and this is the one place a layout property is
            the right thing to animate: the hairlines are the sheets, so a
            scaled stack compresses them into a solid strip and stops counting
            anything. These are childless absolute boxes in the board's margin,
            so the layout they run costs nothing.

            Anchored with `right: 100%` and `left: 100%`, which put each one's
            inner edge exactly on the page's outer edge and let the width grow
            away from the paper.
          */}
          <motion.div
            className="fore-edge pointer-events-none absolute"
            style={{
              top: '1.2%',
              bottom: '1.2%',
              right: '100%',
              borderRadius: '2px 0 0 2px',
              boxShadow: 'inset 2px 0 3px -1px rgba(0,0,0,0.55)'
            }}
            animate={{ width: edgeLeft, opacity: edgeLeft > 0 ? 0.88 : 0 }}
            initial={false}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="fore-edge pointer-events-none absolute"
            style={{
              top: '1.2%',
              bottom: '1.2%',
              left: '100%',
              borderRadius: '0 2px 2px 0',
              boxShadow: 'inset -2px 0 3px -1px rgba(0,0,0,0.55)'
            }}
            animate={{ width: edgeRight, opacity: edgeRight > 0 ? 0.88 : 0 }}
            initial={false}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Left page, lying flat. */}
          <div className="absolute inset-y-0 left-0 right-1/2 overflow-hidden rounded-l-[3px]">
            {leaves[leftIndex]?.back ?? board}
            <div className="gutter-left pointer-events-none absolute inset-0" />
          </div>

          {/* Right page, lying flat. */}
          <div className="absolute inset-y-0 left-1/2 right-0 overflow-hidden rounded-r-[3px]">
            {leaves[rightIndex]?.front ?? board}
            <div className="gutter-right pointer-events-none absolute inset-0" />
          </div>

          {flip !== null && leaves[flip.leaf] && (
            <Leaf
              rotation={rotation}
              front={leaves[flip.leaf].front}
              back={leaves[flip.leaf].back}
              zIndex={40}
            />
          )}

          {/* Screw posts, above the paper because the binding is on top of it. */}
        </motion.div>
      </div>

      {spine && (
        <div
          className="pointer-events-none fixed flex flex-col justify-center gap-[24%]"
          style={{
            left: spine.x - 6,
            top: spine.top,
            height: spine.height,
            width: 12,
            zIndex: 55
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-3 w-3 rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, var(--post), oklch(0.33 0.01 265))',
                boxShadow: '0 1px 3px rgba(0,0,0,0.75), 0 0 0 1px rgba(0,0,0,0.35)'
              }}
              initial={reduce ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>
      )}

      {/* The chrome arrives last, once the binder is already down on the desk. */}
      <motion.div
        className="pointer-events-none fixed inset-x-0 bottom-0 flex flex-col items-center gap-2 pb-6"
        style={{ zIndex: 60 }}
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/*
          What you are looking at, above where you are in the stack. One line
          at a fixed height, so a longer project title cannot shift the
          controls underneath it as the spread changes.

          Until the first turn this slot carries the hint instead. The hint
          used to have its own line just under the board, where it sat on the
          cover's bottom edge, and on the cover the title it was competing
          with reads "Front cover" next to a cover nobody can miss.

          Crossfaded in place rather than with `mode="wait"`: both lines are
          absolutely positioned and overlap exactly, so they can share the
          slot, and the queued version deadlocked. The outgoing line finished
          its exit and was never removed, which held the incoming one back
          forever and left the slot blank from the second spread on.
        */}
        <div className="relative h-4 w-[23rem] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.p
              key={hint ? 'hint' : turned}
              className="plate-label absolute inset-0 truncate text-center"
              style={{ color: hint ? 'rgba(255,255,255,0.54)' : 'rgba(255,255,255,0.68)' }}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: reduce ? 0 : -7,
                // Its own timing. An exiting child keeps the props it was
                // rendered with, so the hint would otherwise take its 1.4s
                // entrance delay with it on the way out.
                transition: { duration: 0.3, delay: 0 }
              }}
              transition={{
                duration: 0.3,
                delay: hint ? 1.4 : 0,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {hint ? 'Drag the page, or use the arrow keys' : (spreadTitles[turned] ?? '')}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-5">
          <button
            onClick={() => turn(-1)}
            disabled={atStart}
            aria-label="Previous page"
            className="chrome-btn group pointer-events-auto rounded-full p-2.5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <span className="plate-label tabular-nums" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {String(Math.min(turned + 1, leaves.length)).padStart(2, '0')}
              {' / '}
              {String(leaves.length).padStart(2, '0')}
            </span>
            <span className="relative block h-px w-24 sm:w-40">
              <span className="absolute inset-0 bg-white/15" />
              <motion.span
                className="absolute inset-0 origin-left"
                style={{ background: 'var(--accent)' }}
                animate={{ scaleX: progress }}
                initial={false}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* The head of the bar carries the only glow in the chrome. */}
              <motion.span
                className="absolute block h-1.5 w-1.5 rounded-full"
                style={{
                  top: 'calc(50% - 3px)',
                  background: 'var(--accent)',
                  boxShadow: '0 0 10px 2px oklch(0.55 0.21 258 / 0.75)',
                  marginLeft: -3
                }}
                animate={{ left: `${progress * 100}%`, opacity: progress > 0 ? 1 : 0 }}
                initial={false}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </div>

          <button
            onClick={() => turn(1)}
            disabled={atEnd}
            aria-label="Next page"
            className="chrome-btn group pointer-events-auto rounded-full p-2.5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </motion.div>

    </div>
  );
};
