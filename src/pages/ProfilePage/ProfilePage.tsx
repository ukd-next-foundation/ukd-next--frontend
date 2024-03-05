import { useQuery } from '@tanstack/react-query'
import cls from './ProfilePage.module.scss'
import { fetchDataWithAxios } from '../../services/api'

import ProfileItem from '../../components/ProfileItem/ProfileItem.tsx'

//TODO: Remove Profile Section
//TODO: Split on ProfileHeader / ProfileBody

const ProfilePage = () => {
  const { data } = useQuery({
    queryFn: () => fetchDataWithAxios('/users/profile'),
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
        <section className="personal_info">
          <div className="info_group">
            <ProfileItem value={data?.email} icon={'/mail.svg'} copy={data?.email} />
            <ProfileItem value={data?.group?.name} icon={'/group.svg'} />
            <ProfileItem value={'095 125 125'} icon={'/call.svg'} />
          </div>
        </section>
        <section className="personal_info">
          <h4>Контактні данні куратора</h4>
          <div className="info_group">
            <ProfileItem value={data?.email} icon={'/mail.svg'} copy={data?.email} />
            <ProfileItem value={data?.group?.elder?.fullname} icon={'/vashyshak.svg'} />
            <ProfileItem value={'095 125 125'} icon={'/call.svg'} copy={'095 125 125'} />
          </div>
        </section>
        <section className="personal_info">
          <h4>Корисна інформація</h4>
          <div className="info_group">
            <ProfileItem
              value={'Реквізити на оплату'}
              icon={'/checkbook.svg'}
              link={'/home/payment'}
            />
            <ProfileItem value={'Корисна інформація'} icon={'/info3.svg'} link={'#'} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProfilePage
