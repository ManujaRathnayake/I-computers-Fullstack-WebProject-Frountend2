import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // මෙන්න මේ server කෑල්ල ඇතුළට එකතු කළා
  server: {
    watch: {
      usePolling: true,
    },
  },
})