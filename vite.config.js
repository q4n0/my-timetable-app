import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.ELECTRON ? './' : '/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173, // Ensure this matches the port in the electron script
  },
})
