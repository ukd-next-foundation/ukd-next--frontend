import cls from './SchedulePage.module.scss'
import ScheduleHeader from '../../components/ScheduleHeader/ScheduleHeader.tsx'
import ScheduleWeeks from '../../components/ScheduleWeeks/ScheduleWeeks.tsx'
import ScheduleMain from '../../components/ScheduleMain/ScheduleMain.tsx'
import { getDate } from '../../utils/moment.ts'
import { useState } from 'react'
import { useLectures } from './hooks/useLectures.ts'
import { mockData } from './mock'

function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(() => getDate())
  const { data = mockData } = useLectures(currentDate)

  return (
    <div className={cls.schedule}>
      <ScheduleHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <ScheduleWeeks currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <ScheduleMain
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        lectures={data}
      />
    </div>
  )
}

export default SchedulePage
