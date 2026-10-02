# expertochange

Personal website in English and Farsi, built with [Astro](https://astro.build). Three sections: job portfolio, books read, and memories and experience.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Portfolio case studies | `src/content/portfolio/en/` and `src/content/portfolio/fa/` |
| Book notes | `src/content/books/en/` and `src/content/books/fa/` |
| Memories and stories | `src/content/memories/en/` and `src/content/memories/fa/` |
| Interface text (menus, labels) in both languages | `src/i18n/ui.ts` |
| About page | `src/pages/[lang]/about.astro` |
| Images | `public/images/` |

## Adding a piece

1. Copy an `example-*.md` file in the English folder and rename it, for example `my-first-job.md`.
2. Fill in the fields at the top and write the body.
3. Create the Farsi version with the **same file name** in the `fa/` folder. Matching names link the two versions, so the language switch jumps between them.
4. Set `draft: true` at the top to hide a piece until it is ready.

English pages live at `/en/...` and Farsi pages at `/fa/...`. Farsi pages are right-to-left and use the Vazirmatn font, with Persian digits and Solar Hijri dates.

## Hosting

The site is published with GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`. The repository must be public (or on a paid GitHub plan), and **Settings > Pages > Source** must be set to **GitHub Actions**.

Until a custom domain is set, the site lives at `https://expertochange-design.github.io/expertochange/`. To use expertochange.com, add it under **Settings > Pages > Custom domain** and point the domain's DNS at GitHub Pages. The workflow picks up the new address on the next push, so links need no changes.

Use the `href()` helper in `src/lib/url.ts` for internal links, so they work at both addresses.
