import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import {
  currentTime,
  getDate,
  isNowBetween,
  isTimeBefore,
} from '../../../utils/moment.ts'
import { Lecture } from '../../../domain/Lecture.ts'

export function useLecturesInterval(
  lectures: Lecture[],
  setCurrentDate: Dispatch<SetStateAction<string>>
) {
  const [time, setTime] = useState<string>(() => currentTime())
  const today = useRef(getDate())

  useEffect(() => {
    const interval = window.setInterval(() => {
      const actualDate = getDate()

      if (today.current !== actualDate) {
        setCurrentDate(actualDate)
        today.current = actualDate
      }

      setTime(currentTime())
    }, 5000)

    return () => {
      window.clearTimeout(interval)
    }
  }, [setCurrentDate])

  const currentLecture = lectures.findIndex((lecture) =>
    isNowBetween(lecture.startAt, lecture.endAt, time)
  )

  const prevLecture = lectures.findLastIndex((lecture: Lecture) => {
    return isTimeBefore(lecture.endAt, time)
  })

  return {
    prevLecture,
    currentLecture,
  }
}
