import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        display: 'standalone',
        start_url: '/home/profile',
        scope: '.',
      },
    }),
  ],
  server: {
    proxy: {
      '/api': 'https://dev.ukd-next.site/',
    },
  },
})
