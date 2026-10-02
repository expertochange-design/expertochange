// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://expertochange.com',
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true },
  },
});
