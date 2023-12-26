import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  base: "Sending_front",
  // base: "/Frontend-RIP",
  plugins: [react()],
})
