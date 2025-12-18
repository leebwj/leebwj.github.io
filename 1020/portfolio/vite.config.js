import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative paths so assets load correctly on GitHub Pages
  base: './',
  build: {
    rollupOptions: {
      output: {
        // Hash filenames so new deployments bust caches automatically
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },
});
