import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // External access allowed
    port: process.env.PORT || 5173, // Render ke liye dynamic port
    allowedHosts: ['bolt-diy-grdm.onrender.com'], // Render hostname allow
  },
  build: {
    lib: {
      entry: resolve('electron/main/index.ts'), // Electron main process
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
});