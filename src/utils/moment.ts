import moment from 'moment/min/moment-with-locales'
moment.locale('uk')

const FORMAT = 'YYYY-MM-DD'
const SCHEDULE_FORMAT = 'MMMM, D, YYYY'
const SUBJECT_FORMAT = 'DD MMM. YYYY'
export const getDate = (date?: string) => {
  return moment(date).format(FORMAT)
}
export const getScheduleDate = (date?: string) => {
  return moment(date).format(SCHEDULE_FORMAT)
}

export const today = () => getDate()

export const getWeekByIndex = (dayStartIndex: number) => {
  const startOfWeek = moment().add('week', dayStartIndex).startOf('week')

  return Array(5)
    .fill(null)
    .reduce((accum, _, index) => {
      const day = startOfWeek.clone().add(index, 'd').format('YYYY-MM-DD')
      return [...accum, day]
    }, [])
}

export const getThreeWeeks = () => {
  const prevWeek = getWeekByIndex(-1)
  const currentWeek = getWeekByIndex(0)
  const nextWeek = getWeekByIndex(1)

  return [...prevWeek, ...currentWeek, ...nextWeek]
}

export const getThreeWeeksAndDayNames = () => {
  return getThreeWeeks().map((date: string) => ({
    date,
    dayName: moment(date).format('dd'),
  }))
}

export const currentTime = () => moment().format('HH:mm:ss')

//TODO: Add currentTime to next functions
export const isNowBetween = (
  startTime: string,
  endTime: string,
  currentTime?: string
) => {
  return moment(moment(currentTime, 'hh:mm')).isBetween(
    moment(startTime, 'HH:mm'),
    moment(endTime, 'HH:mm')
  )
}

export const isTimeBefore = (timeBefore: string, currentTime?: string) => {
  return moment(moment(timeBefore, 'HH:mm:ss')).isBefore(moment(currentTime, 'HH:mm:ss'))
}

export const getDayFrameFromToday = (date: string) => {
  const dayIndex = moment(0, 'HH').diff(date, 'days')
  return dayIndex === 0 ? 'current' : dayIndex < 0 ? 'future' : 'past'
}

export const getSubjectDate = (date: string) => moment(date).format(SUBJECT_FORMAT)

export const getTodayOrMonday = () => {
  const dayOfWeek = moment().day()
  const isWeekend = dayOfWeek === 6 || dayOfWeek === 0

  return isWeekend ? moment().startOf('isoWeek').add(1, 'week').format(FORMAT) : getDate()
}
