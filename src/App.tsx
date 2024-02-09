import { Outlet } from 'react-router'
import Navbar from "./components/Navbar/Navbar.tsx";

const App = () => {
  return (
    <div className="wrapper">
      <main className="content">{<Outlet />}</main>
      <Navbar />
    </div>
  )
}

export default App
