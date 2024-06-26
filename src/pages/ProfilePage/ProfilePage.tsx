import { useQuery } from '@tanstack/react-query'
import cls from './ProfilePage.module.scss'
import { fetchDataWithAxios } from '../../services/api'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.tsx'
import ProfileMain from '../../components/ProfileMain/ProfileMain.tsx'

const ProfilePage = () => {
  const { data } = useQuery({
    queryFn: () => fetchDataWithAxios('/users/profile'),
    queryKey: ['user'],
  })

  console.log(data)

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
