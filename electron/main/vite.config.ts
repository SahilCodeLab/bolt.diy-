import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve('electron/main/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vite',
        'electron',
        'electron-log',
        'fs',
        'util',
        'node:fs',
        'node:path',
        'node:url',
        'node:util',
        'node:stream',
        'node:events',
        'electron-store',
        '@remix-run/node',
        'electron-updater',
      ],
      output: {
        dir: 'build/electron',
        entryFileNames: 'main/[name].mjs',
        format: 'esm',
      },
    },
    minify: false,
    emptyOutDir: false,
  },

  // ✅ Add this server section for Render
  server: {
    host: true,
    port: process.env.PORT || 5173,
    allowedHosts: ['bolt-diy-grdm.onrender.com'], // tumhara live URL
  },
});