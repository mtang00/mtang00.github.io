import { Binder } from './components/binder/Binder';

/**
 * The whole site is one object: a presentation binder lying open on a desk.
 *
 * There is no scrolling page behind it and no section nav, because a binder
 * does not have either. Everything that was a section is now a leaf, and the
 * only way through is the way through a real portfolio: turn the page.
 */
function App() {
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
