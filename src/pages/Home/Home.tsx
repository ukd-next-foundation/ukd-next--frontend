import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar/Navbar.tsx'
import { useEffect } from 'react'
import { useProfileData } from '../../hooks/useProfileData.ts'

function Home() {
  const data = useProfileData()

  useEffect(() => {
    const [role] = data?.roles || []
    localStorage.setItem(role, role === 'TEACHER' ? data?.teacherId : data?.group?.id)
  }, [data])

  return (
    <div className={'wrapper'}>
      <main className="content">{<Outlet />}</main>
      <Navbar />
    </div>
  )
}

export default Home
