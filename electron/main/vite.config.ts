import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, 'app'), // Remix app folder
  server: {
    host: true,                  // external access
    port: process.env.PORT || 5173,
    allowedHosts: ['.onrender.com'], // Render ke liye
  },
  build: {
    outDir: resolve(__dirname, 'build/client'), // production build
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app'),
    },
  },
});