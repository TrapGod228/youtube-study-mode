import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? '/youtube-study-mode/' 
    : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 10000,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
