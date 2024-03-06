import cls from './ProfileMain.module.scss'
import ProfileItem from '../ProfileItem/ProfileItem.tsx'

interface IProfileMain {
  email: string
  group: {
    name: string
    elder: {
      fullname: string
    }
  }
}
function ProfileMain({ email, group }: IProfileMain) {
  return (
    <main className={cls.student_details}>
      <section className="personal_info">
        <div className="info_group">
          <ProfileItem value={email} icon={'/mail.svg'} copy={email} />
          <ProfileItem value={group?.name} icon={'/group.svg'} />
          <ProfileItem value={'095 125 125'} icon={'/call.svg'} />
        </div>
      </section>
      <section className="personal_info">
        <h4>Контактні данні куратора</h4>
        <div className="info_group">
          <ProfileItem value={email} icon={'/mail.svg'} copy={email} />
          <ProfileItem value={group?.elder?.fullname} icon={'/vashyshak.svg'} />
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
  )
}

export default ProfileMain
