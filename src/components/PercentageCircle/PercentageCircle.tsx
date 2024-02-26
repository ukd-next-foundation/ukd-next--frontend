import cls from './PercentageCircle.module.scss'
import { motion } from 'framer-motion'
//TODO: Check circle on other android phone

const PercentageCircle = () => {
  return (
    <div className={cls.circle_container}>
      <div className={cls.grade_info}>
        <motion.div layout={'position'} className={cls.circles}>
          <svg width="185px" viewBox="0 0 36 36" className={cls.circular_chart}>
            <path
              className={cls.that_circle}
              stroke="#A42638"
              strokeDasharray="50 100"
              d="M18 2.0845
							  a 15.9155 15.9155 0 0 1 0 31.831
							  a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          <svg
            width="160px"
            height="160px"
            viewBox="0 0 36 36"
            className={cls.circular_chart}
          >
            <path
              className={cls.that_circle}
              stroke="#F3AE5C"
              strokeDasharray="80 100"
              d="M18 2.0845
							  a 15.9155 15.9155 0 0 1 0 31.831
							  a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          <svg
            width="135px"
            height="135px"
            viewBox="0 0 36 36"
            className={cls.circular_chart}
          >
            <path
              className={cls.that_circle}
              stroke="#439D48"
              strokeDasharray="80 100"
              d="M18 2.0845
							  a 15.9155 15.9155 0 0 1 0 31.831
							  a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </motion.div>
        <motion.div layout={'position'} className={cls.grade}>
          <p className="grade_value">4,4</p>
        </motion.div>
      </div>
    </div>
  )
}

export default PercentageCircle
