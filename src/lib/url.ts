// Prefixes a site path with the base path, so links work both at a custom
// domain (base "/") and at a GitHub Pages project address ("/expertochange/").
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const href = (path: string) => `${base}${path}`;

// The current path without the base path, e.g. "/fa/books/".
export const sitePath = (pathname: string) => (base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname) || '/';
