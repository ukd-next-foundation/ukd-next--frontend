import cls from "./ScheduleMain.module.scss";
import Points from "../Points/Points.tsx";
import ScheduleSubjects from "../ScheduleSubjects/ScheduleSubjects.tsx";
import { useScheduleInterval } from "./hooks/useScheduleInterval.ts";

function ScheduleMain() {
  const { time } = useScheduleInterval();

  console.log(time);

  const pairs = [1, 2, 3, 4];
  const activeId = 2;

  return (
    <section className={cls.schedule_main}>
      <Points pairs={pairs} activeId={activeId} />
      <ScheduleSubjects pairs={pairs} activeId={activeId} />
    </section>
  );
}

export default ScheduleMain;
