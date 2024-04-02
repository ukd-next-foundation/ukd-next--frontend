import cls from './ProfileMain.module.scss'
import ProfileItem from '../ProfileItem/ProfileItem.tsx'
import Skeleton from '../skeletons/Skeleton/Skeleton.tsx'

interface IProfileMain {
  email: string
  group: {
    name: string
    elder: {
      fullname: string
    }
  }
  isLoading: boolean
}
function ProfileMain({ email, group, isLoading }: IProfileMain) {
  return (
    <main className={cls.student_details}>
      <section className="personal_info">
        <div className={cls.info_group}>
          <Skeleton show={isLoading} width={250} height={20}>
            <ProfileItem value={email} icon={'/mail.svg'} copy={email} />
          </Skeleton>
          <Skeleton show={isLoading} width={150} height={20}>
            <ProfileItem value={group?.name} icon={'/group.svg'} />
          </Skeleton>
          <Skeleton show={isLoading} height={20} width={180}>
            <ProfileItem value={'095 125 125'} icon={'/call.svg'} />
          </Skeleton>
        </div>
      </section>
      <section className="personal_info">
        <Skeleton show={isLoading} height={20} width={200}>
          <h4>Контактні данні куратора</h4>
        </Skeleton>
        <div className={cls.info_group}>
          <Skeleton show={isLoading} width={220} height={20}>
            <ProfileItem value={email} icon={'/mail.svg'} copy={email} />
          </Skeleton>
          <Skeleton show={isLoading} width={190} height={20}>
            <ProfileItem value={group?.elder?.fullname} icon={'/vashyshak.svg'} />
          </Skeleton>
          <Skeleton show={isLoading} width={150} height={20}>
            <ProfileItem value={'095 125 125'} icon={'/call.svg'} copy={'095 125 125'} />
          </Skeleton>
        </div>
      </section>
      <section className="personal_info">
        <Skeleton show={isLoading} height={20} width={200}>
          <h4>Корисна інформація</h4>
        </Skeleton>
        <div className={cls.info_group}>
          <Skeleton show={isLoading} height={20} width={'100%'}>
            <ProfileItem
              value={'Реквізити на оплату'}
              icon={'/checkbook.svg'}
              link={'/home/payment'}
            />
          </Skeleton>
          <Skeleton show={isLoading} height={20} width={'100%'}>
            <ProfileItem value={'Корисна інформація'} icon={'/info3.svg'} link={'#'} />
          </Skeleton>
        </div>
      </section>
    </main>
  )
}

export default ProfileMain
