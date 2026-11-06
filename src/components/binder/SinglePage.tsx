import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { faces } from '../../data/pages';

/**
 * The binder on a narrow screen: one face at a time.
 *
 * Still a page turn, not a carousel. The outgoing sheet rotates away about its
 * left edge exactly as it does on the desk, and the incoming one is already
 * underneath. What is dropped is the second page, because two 195px columns on
 * a phone is not a spread, it is a mistake.
 */
export const SinglePage = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const reduce = useReducedMotion();
  const touch = useRef<number | null>(null);

  const go = useCallback(
    (d: 1 | -1) => {
      setIndex((i) => {
        const next = i + d;
        if (next < 0 || next >= faces.length) return i;
        setDir(d);
        return next;
      });
    },
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const atStart = index === 0;
  const atEnd = index === faces.length - 1;

  return (
    <div className="room-light room-grain room-vignette relative flex min-h-screen w-full flex-col overflow-hidden">
      {/*
        The same room as the desk view, minus the parallax: there is no pointer
        on a phone to stand in for the reader's head, and tying the lamp to
        touch would move it only while a finger is down.
      */}
      <div className="lamp" />
      <div className="motes" />

      <div
        className="relative flex flex-1 items-center justify-center px-5 py-16"
        style={{ perspective: '1600px' }}
        onTouchStart={(e) => {
          touch.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touch.current === null) return;
          const dx = e.changedTouches[0].clientX - touch.current;
          touch.current = null;
          if (Math.abs(dx) > 44) go(dx < 0 ? 1 : -1);
        }}
      >
        <motion.div
          className="preserve-3d relative w-full"
          style={{ maxWidth: 'min(460px, 88vw)', aspectRatio: '3 / 4' }}
          initial={reduce ? false : { opacity: 0, y: 34, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="leather absolute -inset-[9px] overflow-hidden rounded-[6px]"
            style={{
              boxShadow: '0 40px 80px -24px rgba(0,0,0,0.85), 0 0 0 1px var(--cover-edge)'
            }}
          />
          {/* The next face, already sitting underneath the one leaving. */}
          <div className="absolute inset-0 overflow-hidden rounded-[3px]">
            {faces[index]}
          </div>

          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={index}
              className="absolute inset-0 origin-left overflow-hidden rounded-[3px] backface-hidden"
              initial={reduce ? { opacity: 0 } : { rotateY: dir === 1 ? 0 : -140, opacity: 1 }}
              animate={reduce ? { opacity: 1 } : { rotateY: 0, opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { rotateY: dir === 1 ? -140 : 0, opacity: 0.6 }}
              transition={{ duration: reduce ? 0.15 : 0.56, ease: [0.16, 1, 0.3, 1] }}
            >
              {faces[index]}
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-[70] flex flex-col justify-center gap-[26%] pl-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-2.5 w-2.5 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 35% 30%, var(--post), oklch(0.33 0.01 265))',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.7)'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex shrink-0 items-center justify-center gap-5 pb-7"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          onClick={() => go(-1)}
          disabled={atStart}
          aria-label="Previous page"
          className="chrome-btn rounded-full p-2.5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span className="plate-label tabular-nums" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {String(index + 1).padStart(2, '0')} / {String(faces.length).padStart(2, '0')}
        </span>
        <button
          onClick={() => go(1)}
          disabled={atEnd}
          aria-label="Next page"
          className="chrome-btn rounded-full p-2.5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};
