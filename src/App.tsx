import { Outlet } from 'react-router'
import { ScrollRestoration } from 'react-router-dom'

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

export default App
