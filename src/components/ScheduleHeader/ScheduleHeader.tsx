import cls from "./ScheduleHeader.module.scss";
import { getScheduleDate, today } from "../../utils/moment.ts";
import { Dispatch, SetStateAction } from "react";

interface IScheduleHeader {
  currentDate: string;
  setCurrentDate: Dispatch<SetStateAction<string>>;
}
function ScheduleHeader({ currentDate, setCurrentDate }: IScheduleHeader) {
  const scheduleDate = getScheduleDate(currentDate);

  return (
    <header className={cls.calendar_header}>
      <div className={cls.header_content}>
        <div className="calendar-info">
          <small className={cls.date}>{scheduleDate}</small>
          <h1 className={cls.today}>
            {currentDate === today() ? "Сьогодні" : "Не сьогодні"}
          </h1>
        </div>
        <div className={cls.calendar_buttons}>
          <button className={cls.notification_button}>
            <img src="/notification.svg" alt="" />
          </button>
          <button
            className={cls.today_button}
            onClick={() => setCurrentDate(today())}
          >
            <img src="/return.svg" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default ScheduleHeader;
