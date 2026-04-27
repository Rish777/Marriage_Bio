import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Marriage_Bio/',
  build: {
    outDir: 'build', // Specifies the output directory
    chunkSizeWarningLimit: 1000, // Sets the warning threshold to 1000 kB
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: Separate vendor libraries into their own chunk
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
