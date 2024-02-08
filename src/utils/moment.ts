import moment from "moment/min/moment-with-locales";

moment.locale("uk");

const FORMAT = "YYYY-MM-DD";
const SCHEDULE_FORMAT = "MMMM, D, YYYY";
export const getDate = (date?: string) => {
  return moment(date).format(FORMAT);
};
export const getScheduleDate = (date?: string) => {
  return moment(date).format(SCHEDULE_FORMAT);
};

export const today = () => getDate();

export const getWeekByIndex = (dayStartIndex: number) => {
  const startOfWeek = moment().add("week", dayStartIndex).startOf("week");

  return Array(5)
    .fill(null)
    .reduce((accum, _, index) => {
      const day = startOfWeek.clone().add(index, "d").format("YYYY-MM-DD");
      return [...accum, day];
    }, []);
};

export const getThreeWeeks = () => {
  const prevWeek = getWeekByIndex(-1);
  const currentWeek = getWeekByIndex(0);
  const nextWeek = getWeekByIndex(1);

  return [...prevWeek, ...currentWeek, ...nextWeek];
};

// export const onlyWeekdays = (days: string[]) =>
//   days.filter((date) => moment(date).day() !== 6 && moment(date).day() !== 0);

export const getThreeWeeksAndDayNames = () => {
  return getThreeWeeks().map((date: string) => ({
    date,
    dayName: moment(date).format("dd"),
  }));
};

export const currentTime = () => moment().format("HH:MM:ss");
