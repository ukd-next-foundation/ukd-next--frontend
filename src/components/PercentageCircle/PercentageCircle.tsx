import cls from './PercentageCircle.module.scss'

interface IPercentageCircle {}

const PercentageCircle = () => {
  return (
    <>
      <svg
        width="300px"
        height="400px"
        viewBox="0 0 36 36"
        className={cls.circular_chart}
      >
        <path
          className={cls.that_circle}
          stroke="#A42638"
          strokeDasharray="100 50"
          d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
        />

        <path
          className={cls.that_circle}
          stroke="#E26B7C"
          strokeDasharray="25 75"
          d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
        />

        <path
          className={cls.that_circle}
          stroke="#5B101B"
          strokeDasharray="10 100"
          d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </>
  )
}

export default PercentageCircle
