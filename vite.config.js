import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// When deploying to GitHub Pages, set the repo name as the base path.
// Example: repo is github.com/alice/polywordle → set base to '/polywordle/'
// For Vercel/Netlify or a custom domain → leave as '/'
const base = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
