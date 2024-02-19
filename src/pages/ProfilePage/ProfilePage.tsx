import { useQuery } from '@tanstack/react-query'
import cls from './ProfilePage.module.scss'
import { fetchDataWithAxios } from '../../services/api'
import ProfileSection from '../../components/ProfileSection/ProfileSection.tsx'
import { curator, other, user } from './mock'

const ProfilePage = () => {
  const { data } = useQuery({
    queryFn: () => fetchDataWithAxios('/users/me'),
    queryKey: ['user'],
  })

  return (
    <div className={cls.profile_container}>
      <header className={cls.profile_header}>
        <nav className={cls.profile_navigation}>
          <h1 className={cls.profile_title}>Профіль</h1>
          <div className={cls.settings_container}>
            <img src="/icons/settings.svg" alt="settings" />
          </div>
        </nav>
        <div className={cls.student_info_container}>
          <div className={cls.student_photo_container}>
            <img
              className="student_photo"
              src={data?.pictureURL || 'https://picsum.photos/100/100'}
              alt="student photo"
            />
          </div>
          <h2 className="student_name">{data?.fullname || ''}</h2>
          <p className="learning_mode_text">Форма навчання: Деннa</p>
        </div>
      </header>
      <main className={cls.student_details}>
        <ProfileSection items={user} />
        <ProfileSection title={'Контактні дані куратора '} items={curator} />
        <ProfileSection title={'Інше'} items={other} />
      </main>
    </div>
  )
}

export default ProfilePage
