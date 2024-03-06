import cls from './ProfileHeader.module.scss'

interface IProfileHeader {
  pictureURL: string
  fullname: string
}
function ProfileHeader({ pictureURL, fullname }: IProfileHeader) {
  return (
    <header className={cls.profile_header}>
      <nav className={cls.profile_navigation}>
        <h1 className={cls.profile_title}>Профіль</h1>
        <div className={cls.settings_container}>
          <img src="/icons/settings.svg" alt="settings" />e
        </div>
      </nav>
      <div className={cls.student_info_container}>
        <div className={cls.student_photo_container}>
          <img
            className="student_photo"
            src={pictureURL || 'https://picsum.photos/100/100'}
            alt="student photo"
          />
        </div>
        <h2 className="student_name">{fullname || ''}</h2>
        <p className="learning_mode_text">Форма навчання: Деннa</p>
      </div>
    </header>
  )
}

export default ProfileHeader
