import cls from './ProgressCircle.module.scss'

interface IProgressCircle {
  value: number
  color: string
}
function ProgressCircle({ color, value }: IProgressCircle) {
  return (
    <>
      {value > 0 && (
        <svg viewBox="0 0 36 36" className={cls.circular_chart}>
          <path
            className={cls.that_circle}
            stroke={color}
            strokeDasharray={`${value} 100`}
            d="M18 2.0845
							  a 15.9155 15.9155 0 0 1 0 31.831
							  a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      )}
    </>
  )
}

export default ProgressCircle
