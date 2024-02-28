import { Outlet, useNavigate } from 'react-router'
import { ScrollRestoration } from 'react-router-dom'
import { useEffect } from 'react'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home/profile')
  }, [])

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

export default App
