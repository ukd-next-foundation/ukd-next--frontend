import cls from "./SchedulePage.module.scss";
import ScheduleHeader from "../../components/ScheduleHeader/ScheduleHeader.tsx";
import ScheduleWeeks from "../../components/ScheduleWeeks/ScheduleWeeks.tsx";
import ScheduleMain from "../../components/ScheduleMain/ScheduleMain.tsx";
import { getDate } from "../../utils/moment.ts";
import { useState } from "react";

function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(() => getDate());
  return (
    <div className={cls.schedule}>
      <ScheduleHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <ScheduleWeeks
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <div>
        <ScheduleMain />
      </div>
    </div>
  );
}

export default SchedulePage;
