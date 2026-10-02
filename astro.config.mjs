// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow, so the same code
// works at the github.io address and, later, at the custom domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://expertochange.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true },
  },
});
