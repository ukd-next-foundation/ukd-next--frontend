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
          { src: '/favicon.ico', type: 'image/x-icon', sizes: '16x16 32x32' },
          { src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
          { src: '/icon-512.png', type: 'image/png', sizes: '512x512' },
          {
            src: '/icon-192-maskable.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'maskable',
          },
          {
            src: '/icon-512-maskable.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable',
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
