import ProfileItem, { IProfileItem } from '../ProfileItem/ProfileItem.tsx'

interface IProfileSection {
  title?: string
  items: IProfileItem[]
}
function ProfileSection(props: IProfileSection) {
  return (
    <section className="personal_info">
      <h4>{props.title}</h4>
      <div className="info_group">
        {props.items.map((item) => {
          return <ProfileItem key={item.value} {...item} />
        })}
      </div>
    </section>
  )
}

export default ProfileSection
