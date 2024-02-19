import cls from './Points.module.scss'
import Point from './Point.tsx'
import { Lecture } from '../../domain/Lecture.ts'

interface IPoints {
  pairs: Lecture[]
  activeId: number
  prevId: number
  dayFrame: string
  isTodayFrame: boolean
}

function Points({ pairs, activeId, prevId, dayFrame, isTodayFrame }: IPoints) {
  return (
    <section className={cls.steps_container}>
      <ul className={cls.steps}>
        {pairs.map((pair, index) => (
          <Point
            index={index}
            key={pair.id}
            isToday={isTodayFrame}
            activeId={activeId}
            prevId={prevId}
            dayFrame={dayFrame}
          />
        ))}
      </ul>
    </section>
  )
}

export default Points
