import cls from './ProfilePage.module.scss'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.tsx'
import ProfileMain from '../../components/ProfileMain/ProfileMain.tsx'
import { useProfileData } from '../../hooks/useProfileData.ts'

const ProfilePage = () => {
  const data = useProfileData()
  return (
    <div className={cls.profile_container}>
      <ProfileHeader
        isLoading={!data?.id}
        fullname={data?.fullname}
        pictureURL={data?.pictureURL}
      />
      <ProfileMain isLoading={!data?.id} email={data?.email} group={data?.group} />
    </div>
  )
}

export default ProfilePage
