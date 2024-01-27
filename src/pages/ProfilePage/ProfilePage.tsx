import { useQuery } from '@tanstack/react-query'
import cls from './ProfilePage.module.scss'
import { fetchDataWithAxios } from '../../services/api'

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
            <img src="/settings.svg" alt="" />
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
          <h4>Особисті дані</h4>
          <div className="info_group">
            <div className={cls.info_item}>
              <img src="/mail.svg" alt="E_mail Icon" />
              <p>stanislav.zubko@ukd.edu.ua</p>
            </div>
            <div className={cls.info_item}>
              <img src="/group.svg" alt="Group Icon" />
              <p>ІПЗд_20_1</p>
            </div>
            <div className={cls.info_item}>
              <img src="/call.svg" alt="Phone Icon" />
              <p>095 047 56 40</p>
            </div>
          </div>
        </section>
        <section className="curator_info">
          <h4>Контактні дані куратора</h4>
          <div className="info_group">
            <div className={cls.info_item}>
              <img src="/mail.svg" alt="E_mail Curator Icon" />
              <p>stanislav.zubko@ukd.edu.ua</p>
            </div>
            <div className={cls.info_item}>
              <img src="/vashyshak.svg" alt="Curator icon" />
              <p>Зубко Станіслав Романович</p>
            </div>
            <div className={cls.info_item}>
              <img src="/call.svg" alt="Phone Icon" />
              <p>095 047 56 40</p>
            </div>
          </div>
        </section>
        <section className={cls.other_info}>
          <h4>Інше</h4>
          <div className="info_group">
            <div className={cls.info_item}>
              <img src="/checkbook.svg" alt="Payment check Icon" />
              <p className={cls.check_title}>Реквізити на оплату</p>
              <img src="/arrow.svg" alt="Arrow" />
            </div>
            <div className={cls.info_item}>
              <img src="/alert.svg" alt="Application details icon" />
              <p>Про Додаток</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProfilePage
