import cls from './GradeBookHeader.module.scss'
import PercentageCircle from '../PercentageCircle/PercentageCircle.tsx'
import Skeleton from '../skeletons/Skeleton/Skeleton.tsx'

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
  return (
    <div className={cls.subject_performance}>
      <div>
        <PercentageCircle {...attendance} averageMark={averageMark} />
      </div>
      <ul className={cls.attendance_stats}>
        {labels.map((el, index) => (
          <li key={132 + index} className={cls.attendance_item}>
            <div className={cls.attendance_info}>
              <Skeleton show={!attendance} width={18} height={18} radius={'50%'}>
                <div className={cls.marker_circle} />
              </Skeleton>
              <p className="attendance_label">{el}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GradeBookHeader
