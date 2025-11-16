import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Correction du nom du package

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true // Ouvre automatiquement le navigateur
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})