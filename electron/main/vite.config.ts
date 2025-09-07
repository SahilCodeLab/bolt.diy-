import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Electron build config
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

  // Dev server + Render config
  server: {
    host: true, // allows external access
    port: process.env.PORT || 5173, // Render ka dynamic port
    allowedHosts: ['bolt-diy-grdm.onrender.com', '.onrender.com'], // allow your Render URL
  },

  // Preview (for `vite preview`) same as server
  preview: {
    host: true,
    port: process.env.PORT || 5173,
    allowedHosts: ['bolt-diy-grdm.onrender.com', '.onrender.com'],
  },
});