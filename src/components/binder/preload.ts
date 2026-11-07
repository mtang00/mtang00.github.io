import { plateImages } from '../../data/pages';

/**
 * Pull every plate into memory before anyone turns to it.
 *
 * Only the current spread is in the DOM at any moment, plus whichever leaf is
 * in flight, so a plate's `<img>` is created at the instant its spread becomes
 * current. Left to itself that means the turn uncovers an empty frame and the
 * picture appears a beat later, which reads as the page loading rather than as
 * the page being revealed.
 *
 * Fetching is only half of it. A file in the HTTP cache still has to be
 * decoded, and a large PNG decodes in tens of milliseconds, which is enough to
 * show. `decode()` does that work now and the decoded bitmap is kept alive by
 * `held` for the session, so the `<img>` that mounts during a turn has nothing
 * left to do but paint.
 *
 * Three files, about 1.2MB between them. That is affordable precisely because
 * it is the plates and not every image in the project data.
 */
const held: HTMLImageElement[] = [];
let started = false;

export const preloadPlates = () => {
  if (started || typeof window === 'undefined') return;
  started = true;

  for (const src of plateImages) {
    const img = new Image();
    img.src = src;
    // Held so neither the element nor its decoded bitmap is collected.
    held.push(img);
    /*
     * A failed decode is not an error worth surfacing. The plate still has
     * its own `<img>`, which will fetch the file the ordinary way; all that
     * is lost is the head start.
     */
    void img.decode?.().catch(() => {});
  }
};
