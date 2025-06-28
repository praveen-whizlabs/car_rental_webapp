import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 👈 This is essential for S3!
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
