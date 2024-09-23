import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar/Navbar.tsx'

function Home() {
  return (
    <div className={'wrapper'}>
      <main className="content">{<Outlet />}</main>
      <Navbar />
    </div>
  )
}

export default Home
