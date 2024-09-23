import ReactDOM from 'react-dom/client'
import './index.scss'
import ReactGA from 'react-ga4'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import './fonts/fonts.scss'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { queryClient } from './react-query'
import Toasts from './components/Toasts/Toasts.tsx'

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
