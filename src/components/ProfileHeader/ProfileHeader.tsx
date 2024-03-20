import cls from './ProfileHeader.module.scss'
import Skeleton from '../Skeleton/Skeleton.tsx'
import { toastStore } from '../../store/ToastStore.ts'

interface IProfileHeader {
  pictureURL: string
  fullname: string
  isLoading: boolean
}
function ProfileHeader({ pictureURL, fullname, isLoading }: IProfileHeader) {
  return (
    <header className={cls.profile_header}>
      <nav className={cls.profile_navigation}>
        <h1
          className={cls.profile_title}
          onClick={() => toastStore.toast({ type: 'error', message: 'Hello world' })}
        >
          Профіль
        </h1>
        <div className={cls.settings_container}>
          <img src="/icons/settings.svg" alt="settings" />
        </div>
      </nav>
      <div className={cls.student_info_container}>
        <div className={cls.student_photo_container}>
          <Skeleton
            show={isLoading}
            bgColor={'rgba(255,255,255,0.1)'}
            opacity2={0.2}
            width={100}
            height={100}
            radius={'50%'}
          >
            <img
              className="student_photo"
              src={pictureURL || 'https://picsum.photos/100/100'}
              alt="student photo"
            />
          </Skeleton>
        </div>
        <div className={cls.student_name}>
          <Skeleton
            show={isLoading}
            width={200}
            height={20}
            bgColor={'rgba(255,255,255,0.1)'}
            opacity2={0.2}
          >
            <h2>{fullname || ''}</h2>
          </Skeleton>
        </div>
        <Skeleton
          show={isLoading}
          height={15}
          width={150}
          bgColor={'rgba(255,255,255,0.1)'}
          opacity2={0.2}
        >
          <p className="learning_mode_text">Форма навчання: Деннa</p>
        </Skeleton>
      </div>
    </header>
  )
}

export default ProfileHeader
