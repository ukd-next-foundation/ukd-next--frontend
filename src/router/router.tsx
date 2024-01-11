import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SchedulePage from '../pages/SchedulePage/SchedulePage'
import SubjectsPage from '../pages/SubjectsPage/SubjectsPage'
import NewsPage from '../pages/NewsPage/NewsPage'
import GradebookPage from '../pages/GradebookPage/GradebookPage'
import PaymentDetails from '../components/PaymentDetails/PaymentDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ProfilePage />,
      },

      {
        path: '/schedule',
        element: <SchedulePage />,
      },
      {
        path: '/subjects',
        element: <SubjectsPage />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
      {
        path: '/subject',
        element: <GradebookPage />,
      },
      {
        path: 'payment',
        element: <PaymentDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])
