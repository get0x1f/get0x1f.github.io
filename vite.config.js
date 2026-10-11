import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// base: './' — сборка работает из любой папки (GitHub Pages, Netlify, свой хостинг)
// Две страницы: index.html (bio) и catalog.html (каталог продуктов)
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        catalog: resolve(__dirname, 'catalog.html'),
      },
    },
  },
});
