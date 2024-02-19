import cls from './ProfileItem.module.scss'
import ClipBoard from '../ClipBoard/ClipBoard.tsx'
import { Link } from 'react-router-dom'

export interface IProfileItem {
  icon: string
  value: string
  copy?: string
  link?: string
}
function ProfileItem({ icon, value, copy, link }: IProfileItem) {
  return (
    <Link to={link ? link : '#'}>
      <div className={cls.info_item}>
        <img src={`/icons${icon}`} alt="E_mail Icon" />
        {copy ? (
          <ClipBoard value={value}>
            <p>{value}</p>
          </ClipBoard>
        ) : (
          <p>{value}</p>
        )}
        {link && <img className={cls.arrow} src="/icons/black_arrow.svg" alt="Arrow" />}
      </div>
    </Link>
  )
}

export default ProfileItem
