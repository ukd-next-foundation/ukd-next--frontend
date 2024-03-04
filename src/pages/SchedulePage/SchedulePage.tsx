import cls from './SchedulePage.module.scss'
import ScheduleHeader from '../../components/ScheduleHeader/ScheduleHeader.tsx'
import ScheduleWeeks from '../../components/ScheduleWeeks/ScheduleWeeks.tsx'
import ScheduleMain from '../../components/ScheduleMain/ScheduleMain.tsx'
import { getTodayOrMonday } from '../../utils/moment.ts'
import { useState } from 'react'
import { useLectures } from './hooks/useLectures.ts'
import { mockData } from './mock'
import ScheduleSkeleton from '../../components/ScheduleSkeleton/ScheduleSkeleton.tsx'

function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(() => getTodayOrMonday())
  const { data = mockData, isLoading } = useLectures(currentDate)

  return (
    <div className={cls.schedule}>
      <ScheduleHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <ScheduleWeeks currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <ScheduleSkeleton isLoading={isLoading}>
        <ScheduleMain
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          lectures={data}
        />
      </ScheduleSkeleton>
    </div>
  )
}

export default SchedulePage
