// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nesbittsplumbing.com',
  trailingSlash: 'ignore',
  // Remodeling is no longer offered: send old links and search results to plumbing services.
  redirects: {
    '/kitchen-bathroom-remodels': '/plumbing-services',
    '/bathroom-remodeling': '/plumbing-services',
    '/kitchen-remodeling': '/plumbing-services',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
