import { defineConfig } from 'cypress'
export default defineConfig({
  e2e: {
    baseUrl: 'https://dev.ukd-next.site/',
    viewportWidth: 375,
    viewportHeight: 667,
  },

  env: {
    REFRESH_TOKEN:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYyOSwiZW1haWwiOiJ0ZXN0QHVrZC5lZHUudWEiLCJzZXNzaW9uSWQiOjEsImlhdCI6MTcxMTY0NTkxOCwiZXhwIjoxODE2ODI5OTE4fQ.YiakXg6Cj18PXCj-ELB4kalh9MxPaRPbAybmF7PdpbidPhGLXgn5omCgR41saOU_9E6u5VTXT19PaZxybj2pRQ',
  },
})
