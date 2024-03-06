import { Outlet } from 'react-router'
import { Navigate, ScrollRestoration } from 'react-router-dom'

let token

if (typeof window !== 'undefined') {
  token = localStorage.getItem('access-token')
}

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
      {token! ? <Navigate to={'/home/profile'} /> : <Navigate to={'/auth'} />}
    </>
  )
}

export default App
