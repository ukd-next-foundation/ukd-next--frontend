import cls from './ScheduleSubjects.module.scss'
import ScheduleSubject from './ScheduleSubject.tsx'
import { Lecture } from '../../domain/Lecture.ts'

interface IScheduleSubjects {
  pairs: Lecture[]
  activeId: number
  dayFrame: string
  prevId: number
  isTodayFrame: boolean
}
function ScheduleSubjects(props: IScheduleSubjects) {
  const { pairs, activeId, dayFrame, prevId, isTodayFrame } = props
  return (
    <section className={cls.subjects}>
      <ul className={cls.subjects_list}>
        {pairs.map((lecture, index) => (
          <ScheduleSubject
            dayFrame={dayFrame}
            prevId={prevId}
            activeId={activeId}
            index={index}
            isTodayFrame={isTodayFrame}
            key={lecture.id}
            lecture={lecture}
          />
        ))}
      </ul>
    </section>
  )
}

export default ScheduleSubjects
