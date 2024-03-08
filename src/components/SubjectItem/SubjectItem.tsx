import cls from './SubjectItem.module.scss'
import { getSubjectDate } from '../../utils/moment.ts'

const lectureTypes = new Map([
  ['LECTURE', 'Л'],
  ['PRACTICE', 'С'],
])

interface ISubjectItem {
  date: string
  mark: string
  type: string
}

function SubjectItem({ date, mark, type }: ISubjectItem) {
  return (
    <li className={`${cls.mark_item} ${mark === 'Н' && cls.skipped}`}>
      <div className={cls.mark_category}>
        <p>{lectureTypes.get(type)}</p>
      </div>
      <div className={cls.mark_info}>
        <p className={cls.mark_date}>{getSubjectDate(date)}</p>
        <p className={cls.mark_value}>{mark}</p>
      </div>
    </li>
  )
}

export default SubjectItem
