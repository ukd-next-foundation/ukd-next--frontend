import cls from './GradeBookHeader.module.scss'
import PercentageCircle from '../PercentageCircle/PercentageCircle.tsx'
import { motion } from 'framer-motion'
import { useFramerScroll } from './hooks/useFramerScroll.ts'
import Skeleton from '../Skeleton/Skeleton.tsx'

const labels = ['Відвідано', 'Пропущено', 'Відпрацьовано']

interface IGradeBookHeader {
  averageMark: number
  attendance: {
    presentPercent: number
    revisedPercent: number
    skippedPercent: number
  }
}
function GradeBookHeader({ attendance, averageMark }: IGradeBookHeader) {
  const { circle, flex } = useFramerScroll()

  return (
    <div className={cls.subject_performance} style={{ flexDirection: flex }}>
      <div ref={circle}>
        <PercentageCircle {...attendance} averageMark={averageMark} />
      </div>
      <ul
        className={cls.attendance_stats}
        style={{
          justifyContent: flex === 'column' ? 'space-between' : 'center',
          flexDirection: flex === 'row' ? 'column' : 'row',
        }}
      >
        {labels.map((el, index) => (
          <motion.li
            key={132 + index}
            layout={'position'}
            className={cls.attendance_item}
          >
            <div className={cls.attendance_info}>
              <Skeleton show={!attendance} width={18} height={18} radius={'50%'}>
                <div className={cls.marker_circle} />
              </Skeleton>
              <p className="attendance_label">{el}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default GradeBookHeader
