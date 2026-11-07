import { useEffect } from 'react';
import { Binder } from './components/binder/Binder';
import { preloadPlates } from './components/binder/preload';

/**
 * The whole site is one object: a presentation binder lying open on a desk.
 *
 * There is no scrolling page behind it and no section nav, because a binder
 * does not have either. Everything that was a section is now a leaf, and the
 * only way through is the way through a real portfolio: turn the page.
 */
function App() {
  /*
   * Every plate into memory up front, so a turn uncovers a picture that is
   * already there rather than one that starts loading when the page mounts.
   * Here rather than inside the binder because both the spread and the
   * narrow single-page view show the same plates.
   */
  useEffect(preloadPlates, []);

  return (
    <>
      <a
        href="#binder"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to the portfolio
      </a>
      <main id="binder">
        <Binder />
      </main>
    </>
  );
}

export default App;
