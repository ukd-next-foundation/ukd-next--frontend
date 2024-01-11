import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import './fonts/fonts.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <RouterProvider router={router} />,
)
