import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SchedulePage from '../pages/SchedulePage/SchedulePage'
import SubjectsPage from '../pages/SubjectsPage/SubjectsPage'
import NewsPage from '../pages/NewsPage/NewsPage'
import GradebookPage from '../pages/GradebookPage/GradebookPage'
import AuthPage from '../pages/AuthPage/AuthPage'
import PaymentDetails from "../pages/PaymentDetails/PaymentDetails.tsx";
import Home from "../pages/Home/Home.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth',
        element: <AuthPage />,
      },
      {
        path: 'home',
        element: <Home/>,
        children: [
          {
            path: 'profile',
            element: <ProfilePage/>,
          },

          {
            path: 'schedule',
            element: <SchedulePage />,
          },
          {
            path: 'subjects',
            element: <SubjectsPage />,
          },
          {
            path: 'news',
            element: <NewsPage />,
          },
          {
            path: 'subject',
            element: <GradebookPage />,
          },
          {
            path: 'payment',
            element: <PaymentDetails />,
          }
          ]}
    ],
  },
  {
    path: '*',
    element: <Navigate to="/auth" replace />,
  },
])
