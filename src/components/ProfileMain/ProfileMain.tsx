import cls from './ProfileMain.module.scss'
import ProfileItem from '../ProfileItem/ProfileItem.tsx'
import Skeleton from '../skeletons/Skeleton/Skeleton.tsx'
import FeatureFlags from '../FeatureFlags/FeatureFlags.tsx'

interface IProfileMain {
  email: string
  group: {
    name: string
    curator: {
      fullname: string
      email: string
      phone: string
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
        </div>
      </section>
      <section className="personal_info">
        <Skeleton show={isLoading} height={20} width={200}>
          <h4>Контактні данні куратора</h4>
        </Skeleton>
        <div className={cls.info_group}>
          <Skeleton show={isLoading} width={220} height={20}>
            <ProfileItem value={group?.curator?.email} icon={'/mail.svg'} copy={email} />
          </Skeleton>
          <Skeleton show={isLoading} width={190} height={20}>
            <ProfileItem value={group?.curator?.fullname} icon={'/vashyshak.svg'} />
          </Skeleton>
          <Skeleton show={isLoading} width={150} height={20}>
            <ProfileItem
              value={group?.curator?.phone}
              icon={'/call.svg'}
              copy={'095 125 125'}
            />
          </Skeleton>
        </div>
      </section>
      <section className="personal_info">
        <Skeleton show={isLoading} height={20} width={200}>
          <h4>Інше</h4>
        </Skeleton>
        <div className={cls.info_group}>
          <Skeleton show={isLoading} height={20} width={'100%'}>
            <ProfileItem
              value={'Реквізити на оплату'}
              icon={'/checkbook.svg'}
              link={'/home/profile/payment'}
            />
          </Skeleton>
          <Skeleton show={isLoading} height={20} width={'100%'}>
            <ProfileItem value={'Змінити роль'} icon={'/roles_icon.svg'} link={'#'} />
          </Skeleton>
          <FeatureFlags flagParam={'profileFAQEnabled'}>
            <Skeleton show={isLoading} height={20} width={'100%'}>
              <ProfileItem value={'Корисна інформація'} icon={'/info3.svg'} link={'#'} />
            </Skeleton>
          </FeatureFlags>
        </div>
      </section>
    </main>
  )
}

export default ProfileMain
