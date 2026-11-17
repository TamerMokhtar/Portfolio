import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base to './' so the build works on GitHub Pages (any repo name) or any static host.
export default defineConfig({
  plugins: [react()],
  base: './',
});
