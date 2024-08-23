import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{ico,png,svg,woff,woff2}'],
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'UKD Next',
        short_name: 'UKD Next',
        description: 'This mobile application UKD Next',
        theme_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/home/profile',
        scope: '.',
        icons: [
          {
            src: '/icons/ukd_logo.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      '/api': 'https://dev.ukd-next.site/',
    },
  },
})
