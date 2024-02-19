import cls from './ScheduleSubject.module.scss'
import { Lecture } from '../../domain/Lecture.ts'

interface IScheduleSubject {
  dayFrame: string
  prevId: number
  activeId: number
  index: number
  isTodayFrame: boolean
  lecture: Lecture
}
function ScheduleSubject(props: IScheduleSubject) {
  const { prevId, activeId, isTodayFrame, index, lecture } = props

  const classes = [
    cls.subject,
    cls[props.dayFrame],
    index <= prevId && isTodayFrame ? cls.past : '',
    index === activeId && isTodayFrame ? cls.subject_active : '',
  ]

  return (
    <li className={classes.join(' ')}>
      <div className={cls.subject_info}>
        <h3 className="subject_title">{lecture.lesson.name}</h3>
      </div>
      <div className={cls.subject_details}>
        <small className={cls.subject_lecturer}>Вик. {lecture.teacher.fullname}</small>
      </div>
      <div className={cls.details_info}>
        <small className={cls.subject_time}>
          {lecture.startAt.slice(0, -3)} - {lecture.endAt.slice(0, -3)}
        </small>
        <small className={cls.subject_location}>
          ауд. <b>{lecture.classroom.name}</b>
        </small>
      </div>
    </li>
  )
}

export default ScheduleSubject
