import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://dev.ukd-next.site/',
    viewportWidth: 375,
    viewportHeight: 667,
  },
})
