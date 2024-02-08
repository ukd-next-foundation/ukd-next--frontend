import cls from "./ScheduleWeeks.module.scss";
import { getThreeWeeksAndDayNames } from "../../utils/moment.ts";
import { useScheduleSlider } from "./hooks/useScheduleSlider.ts";
import { Dispatch, SetStateAction } from "react";

interface IScheduleWeeks {
  currentDate: string;
  setCurrentDate: Dispatch<SetStateAction<string>>;
}
function ScheduleWeeks({ currentDate, setCurrentDate }: IScheduleWeeks) {
  const weeks: { date: string; dayName: string }[] = getThreeWeeksAndDayNames();
  const { slider, next, prev } = useScheduleSlider(currentDate, weeks);

  return (
    <div className={cls.weeks_container}>
      <button onClick={prev}>
        <img src="/black_arrow.svg" alt="" />
      </button>
      <ul className={cls.days_of_week} ref={slider}>
        {weeks.map(({ date, dayName }) => {
          const day = date.split("-")[2];
          const isDayActive = date === currentDate;

          return (
            <li
              onClick={() => setCurrentDate(date)}
              className={`${cls.day} ${isDayActive ? cls.day_active : ""}`}
            >
              <small>{dayName}</small>
              <p>{day}</p>
            </li>
          );
        })}
      </ul>
      <button onClick={next}>
        <img src="/black_arrow.svg" alt="" />
      </button>
    </div>
  );
}

export default ScheduleWeeks;
