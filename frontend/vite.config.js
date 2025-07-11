import mkcert from 'vite-plugin-mkcert'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), mkcert(), tailwindcss()],
  server: {
    https: true,
    host: true,
    port: 5173,
  },
})