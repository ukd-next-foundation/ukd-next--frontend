import cls from './ScheduleHeaderInfo.module.scss'
import { getScheduleDate, today } from '../../utils/moment.ts'
import { motion } from 'framer-motion'
import { dateVariants, todayVariants } from './framer'

interface IScheduleHeaderInfo {
  currentDate: string
}
function ScheduleHeaderInfo({ currentDate }: IScheduleHeaderInfo) {
  const scheduleDate = getScheduleDate(currentDate)
  const scheduleToday = getScheduleDate(today())
  const isToday = scheduleDate === scheduleToday ? 'today' : 'other'

  return (
    <div className="calendar-info">
      <motion.small
        variants={dateVariants}
        transition={{ duration: 0.2 }}
        animate={isToday}
        className={cls.date}
      >
        {scheduleDate}
      </motion.small>
      <h1 className={cls.today}>
        <motion.span
          variants={todayVariants}
          transition={{ duration: 0.2 }}
          animate={isToday}
        >
          Сьогодні
        </motion.span>
      </h1>
    </div>
  )
}

export default ScheduleHeaderInfo
