import cls from './PercentageCircle.module.scss'
import { motion } from 'framer-motion'
import ProgressCircle from '../UI/ProgressCircle/ProgressCircle.tsx'
//TODO: Check circle on other android phone

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
          <ProgressCircle color={'#A42638'} value={props.presentPercent} />
          <ProgressCircle color={'#F3AE5C'} value={props.skippedPercent} />
          <ProgressCircle color={'#439D48'} value={props.revisedPercent} />
        </motion.div>
        <motion.div layout={'position'} className={cls.grade}>
          <p className="grade_value">{props.averageMark?.toFixed(1).replace('.', ',')}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default PercentageCircle
