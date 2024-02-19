import cls from './ScheduleMain.module.scss'
import Points from '../Points/Points.tsx'
import ScheduleSubjects from '../ScheduleSubjects/ScheduleSubjects.tsx'
import { useLecturesInterval } from './hooks/useScheduleInterval.ts'
import { getDayFrameFromToday } from '../../utils/moment.ts'
import { Dispatch, SetStateAction } from 'react'

interface IScheduleMain {
  lectures: any
  currentDate: string
  setCurrentDate: Dispatch<SetStateAction<string>>
}
function ScheduleMain({ lectures, currentDate, setCurrentDate }: IScheduleMain) {
  const { prevLecture, currentLecture } = useLecturesInterval(lectures, setCurrentDate)
  const dayFrame = getDayFrameFromToday(currentDate)
  const isTodayFrame = dayFrame === 'current'

  return (
    <section className={cls.schedule_main}>
      <Points
        isTodayFrame={isTodayFrame}
        pairs={lectures}
        activeId={currentLecture}
        prevId={prevLecture}
        dayFrame={dayFrame}
      />
      <ScheduleSubjects
        isTodayFrame={isTodayFrame}
        pairs={lectures}
        activeId={currentLecture}
        prevId={prevLecture}
        dayFrame={dayFrame}
      />
    </section>
  )
}

export default ScheduleMain
