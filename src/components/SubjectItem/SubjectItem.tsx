import cls from './SubjectItem.module.scss'
import { getSubjectDate } from '../../utils/moment.ts'

function SubjectItem() {
  return (
    <li className={`${cls.mark_item}`}>
      <div className={cls.mark_category}>
        <p>А</p>
      </div>
      <div className={cls.mark_info}>
        <p className={cls.mark_date}>{getSubjectDate('2024-02-22')}</p>
        <p className={cls.mark_value}>3</p>
      </div>
    </li>
  )
}

export default SubjectItem
