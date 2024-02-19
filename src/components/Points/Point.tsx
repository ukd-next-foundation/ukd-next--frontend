import cls from './Point.module.scss'

interface IPoint {
  index: number
  prevId: number
  dayFrame: string
  activeId: number
  isToday: boolean
}
function Point({ index, prevId, dayFrame, activeId, isToday }: IPoint) {
  const classes = [
    cls.step_container,
    cls[dayFrame],
    index <= prevId && isToday ? cls.past : '',
    index === activeId && isToday ? cls.step_active : '',
  ]

  return (
    <li className={classes.join(' ')}>
      <div className={`${cls.step}`}></div>
      <div
        className={`${cls.stick} ${
          prevId === index && isToday ? cls.progress_stick : ''
        }`}
      ></div>
    </li>
  )
}

export default Point
