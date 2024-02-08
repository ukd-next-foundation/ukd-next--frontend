import cls from "./ScheduleSubjects.module.scss";

interface IScheduleSubjects {
  pairs: number[];
  activeId: number;
}
function ScheduleSubjects({ pairs, activeId }: IScheduleSubjects) {
  return (
    <section className={cls.subjects}>
      <ul className={cls.subjects_list}>
        {pairs.map((_, index) => (
          <li
            className={`${cls.subject} ${
              index + 1 === activeId && cls.subject_active
            }`}
          >
            <div className={cls.subject_info}>
              <h3 className="subject_title">
                Іноземна мова (за проф. спрямуванням)
              </h3>
            </div>
            <div className={cls.subject_details}>
              <small className={cls.subject_lecturer}>Вик. Мосюрчак В.М </small>
            </div>
            <div className={cls.details_info}>
              <small className={cls.subject_time}>10:00 - 11:20</small>
              <small className={cls.subject_location}>
                ауд. <b>307</b>
              </small>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ScheduleSubjects;
