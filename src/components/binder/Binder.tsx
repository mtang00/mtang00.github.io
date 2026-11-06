import { useCallback, useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { Leaf } from './Leaf';
import { leaves } from '../../data/pages';
import { SinglePage } from './SinglePage';

/** How far a drag must travel across the page before it commits to a turn. */
const COMMIT_RATIO = 0.22;
/** Wheel and trackpad events arrive in bursts; one turn per burst. */
const WHEEL_COOLDOWN_MS = 620;
/** Pointer travel under this is a click on the page, not a drag of it. */
const CLICK_SLOP = 6;

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
  const lastWheel = useRef(0);
  const drag = useRef<{ x: number; dir: 1 | -1; width: number } | null>(null);

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
    [atEnd, atStart, flip, reduce, rotation, turned]
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

  const board = <div className="h-full w-full" style={{ background: 'var(--cover)' }} />;

  // After every hook, never before: an early return above them would change
  // the hook order on the first resize across the breakpoint.
  if (!wide) return <SinglePage />;

  return (
    <div className="room-light relative min-h-screen w-full overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
      />

      <div
        ref={stage}
        className="relative mx-auto flex min-h-screen max-w-[1700px] select-none items-center justify-center px-3 pb-20 pt-6 sm:px-5"
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
        <div
          ref={boardRef}
          className="preserve-3d relative"
          style={{
            transform: 'rotateX(7deg)',
            width: 'min(1560px, 96vw, calc((100vh - 6.5rem) * 1.5))',
            aspectRatio: '3 / 2'
          }}
        >
          {/* The cover board, a hard black margin around the paper. */}
          <div
            className="absolute -inset-[11px] rounded-[7px]"
            style={{
              background: 'var(--cover)',
              boxShadow:
                '0 64px 130px -34px rgba(0,0,0,0.9), 0 0 0 1px var(--cover-edge), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
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
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-[70] flex -translate-x-1/2 flex-col justify-center gap-[24%]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-3 w-3 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 35% 30%, var(--post), oklch(0.33 0.01 265))',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.7)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 flex items-center justify-center gap-5 pb-6"
        style={{ zIndex: 60 }}
      >
        <button
          onClick={() => turn(-1)}
          disabled={atStart}
          aria-label="Previous page"
          className="pointer-events-auto rounded-full border border-white/15 p-2.5 text-white/70 transition hover:border-white/40 hover:text-white disabled:opacity-25"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <span className="plate-label" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {String(Math.min(turned + 1, leaves.length)).padStart(2, '0')}
            {' / '}
            {String(leaves.length).padStart(2, '0')}
          </span>
          <span className="block h-px w-24 overflow-hidden bg-white/15 sm:w-40">
            <motion.span
              className="block h-full"
              style={{ background: 'var(--accent)', transformOrigin: 'left' }}
              animate={{ scaleX: progress }}
              initial={false}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </div>

        <button
          onClick={() => turn(1)}
          disabled={atEnd}
          aria-label="Next page"
          className="pointer-events-auto rounded-full border border-white/15 p-2.5 text-white/70 transition hover:border-white/40 hover:text-white disabled:opacity-25"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {hint && !reduce && (
        <motion.p
          className="plate-label pointer-events-none fixed inset-x-0 bottom-[4.5rem] text-center"
          style={{ color: 'rgba(255,255,255,0.4)', zIndex: 60 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Drag the page, or use the arrow keys
        </motion.p>
      )}
    </div>
  );
};
