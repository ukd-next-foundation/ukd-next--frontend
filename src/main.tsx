import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga4'
import * as Sentry from '@sentry/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { queryClient } from './react-query'
import Toasts from './components/Toasts/Toasts.tsx'
import './fonts/fonts.scss'
import './index.scss'

Sentry.init({ dsn: import.meta.env.VITE_SENTRY_DSN, integrations: [] })

ReactGA.initialize(import.meta.env.VITE_GOOGLE_TRACKING_ID)

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
    <Toasts />
    <ReactQueryDevtools />
  </QueryClientProvider>
)
