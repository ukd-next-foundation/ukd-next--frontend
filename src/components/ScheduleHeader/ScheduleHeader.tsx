import cls from './ScheduleHeader.module.scss'
import { getTodayOrMonday } from '../../utils/moment.ts'
import { Dispatch, SetStateAction } from 'react'
import ScheduleHeaderInfo from '../ScheduleHeaderInfo/ScheduleHeaderInfo.tsx'
import FeatureFlags from '../FeatureFlags/FeatureFlags.tsx'

interface IScheduleHeader {
  currentDate: string
  setCurrentDate: Dispatch<SetStateAction<string>>
}
function ScheduleHeader({ currentDate, setCurrentDate }: IScheduleHeader) {
  return (
    <header className={cls.calendar_header}>
      <div className={cls.header_content}>
        <ScheduleHeaderInfo currentDate={currentDate} />
        <div className={cls.calendar_buttons}>
          <FeatureFlags flagParam={'notificationServiceEnabled'}>
            <button className={cls.notification_button}>
              <img src="/icons/notification.svg" alt="" />
            </button>
          </FeatureFlags>
          <button
            className={cls.today_button}
            onClick={() => setCurrentDate(getTodayOrMonday())}
          >
            <img src="/icons/return.svg" alt="" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default ScheduleHeader
