import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Bind IPv4 explicitly: the default resolves to ::1 only on this machine,
    // which leaves http://127.0.0.1:5173 unreachable.
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      output: {
        // Split vendor code so the initial bundle stays small. Rolldown (Vite 8)
        // requires the function form, and react-icons must be matched before
        // react since its path contains "react" too.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-icons')) return 'icons'
          if (id.includes('framer-motion') || id.includes('/motion')) return 'motion'
          if (id.includes('react')) return 'react'
          return 'vendor'
        },
      },
    },
  },
})
