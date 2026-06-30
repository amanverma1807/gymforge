// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://gymforge.online',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://gymforge.online/404/' && page !== 'https://gymforge.online/500/',
    }),
  ],

  vite: {
    plugins: [tailwind()],
  },

  adapter: cloudflare(),
});