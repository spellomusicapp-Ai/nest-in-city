/**
 * Resolves a `public/`-relative asset path against Vite's configured
 * `base`. Plain string literals like `/assets/images/foo.jpg` work fine
 * in local dev (served at the domain root) but break once the site is
 * deployed under a subpath (e.g. GitHub Pages at /nest-in-city/), since
 * Vite only rewrites *imported* assets, not hardcoded strings. Every
 * component that renders a `src` from a path string should route it
 * through this helper instead of using the string directly.
 */
export function asset(path) {
  const base = import.meta.env.BASE_URL; // '/' in dev, '/nest-in-city/' in prod
  return `${base}${path.replace(/^\/+/, '')}`;
}
