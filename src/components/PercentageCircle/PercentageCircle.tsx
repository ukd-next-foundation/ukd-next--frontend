import cls from './PercentageCircle.module.scss'
import { motion } from 'framer-motion'
import ProgressCircle from '../UI/ProgressCircle/ProgressCircle.tsx'
import GradebookProgressSkeleton from '../GradebookProgressSkeleton/GradebookProgressSkeleton.tsx'
import Skeleton from '../Skeleton/Skeleton.tsx'
interface IPercentageCircle {
  presentPercent: number
  revisedPercent: number
  skippedPercent: number
  averageMark: number
}
const PercentageCircle = (props: IPercentageCircle) => {
  return (
    <div className={cls.circle_container}>
      <div className={cls.grade_info}>
        <motion.div layout={'position'} className={cls.circles}>
          <GradebookProgressSkeleton show={!props.presentPercent}>
            <ProgressCircle color={'#A42638'} value={props.presentPercent} />
            <ProgressCircle color={'#F3AE5C'} value={props.skippedPercent} />
            <ProgressCircle color={'#439D48'} value={props.revisedPercent} />
          </GradebookProgressSkeleton>
        </motion.div>
        <motion.div layout={'position'} className={cls.grade}>
          <Skeleton
            height={50}
            show={!props.presentPercent}
            width={50}
            bgColor={'rgba(0,0,0,0)'}
            nested={<p className={cls.grade_loader}>5</p>}
          >
            <p>{props.averageMark?.toFixed(1).replace('.', ',')}</p>
          </Skeleton>
        </motion.div>
      </div>
    </div>
  )
}

export default PercentageCircle
