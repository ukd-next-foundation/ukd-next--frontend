import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar/Navbar.tsx'
import { useQuery } from '@tanstack/react-query'
import { fetchDataWithAxios } from '../../services/api.ts'

function Home() {
  return (
    <div className={'wrapper'}>
      <main className="content">{<Outlet />}</main>
      <Navbar />
    </div>
  )
}

export default Home
