import cls from "./SchedulePage.module.scss";
function SchedulePage() {
  //TODO: Change subjects to lectures
  return (
    <div className={cls.schedule}>
      <div className={cls.calendar}>
        <header className={cls.calendar_header}>
          <small className="date">Листопад 28, 2023</small>
          <h1 className={cls.today}>Сьогодні</h1>
        </header>
        <ul className={cls.days_of_week}>
          <li className={`${cls.day} ${cls.day_active}`}>
            <small>Пн</small>
            <p>27</p>
          </li>
          <li className={cls.day}>
            <small>Вт</small>
            <p>28</p>
          </li>
          <li className={cls.day}>
            <small>Ср</small>
            <p>29</p>
          </li>
          <li className={cls.day}>
            <small>Чт</small>
            <p>30</p>
          </li>
          <li className={cls.day}>
            <small>Пт</small>
            <p>31</p>
          </li>
          <li className={cls.day}>
            <small>Сб</small>
            <p>01</p>
          </li>
          <li className={cls.day}>
            <small>Нд</small>
            <p>02</p>
          </li>
        </ul>
      </div>
      <main className={cls.schedule_main}>
        <section className={cls.steps_container}>
          <div className={cls.steps}>
            <div className={cls.step}></div>
            <div className={cls.stick}></div>
            <div className={`${cls.step} ${cls.step_active}`}></div>
            <div className={cls.stick}></div>
            <div className={cls.step}></div>
            <div className={cls.stick}></div>
          </div>
        </section>
        <section className={cls.subjects}>
          <ul className={cls.subjects_list}>
            <li className={cls.subject}>
              <div className={cls.subject_info}>
                <h3 className="subject_title">Мат. Аналіз</h3>
                <small className={cls.subject_time}>10:00</small>
              </div>
              <div className={cls.subject_details}>
                <small className={cls.subject_lecturer}>
                  Вик. Мосюрчак В.М{" "}
                </small>
                <small className={cls.subject_location}>
                  ауд. <b>307</b>
                </small>
              </div>
            </li>
            <li className={cls.subject}>
              <div className={cls.subject_info}>
                <h3 className="subject_title">Мат. Аналіз</h3>
                <small className={cls.subject_time}>10:00</small>
              </div>
              <div className={cls.subject_details}>
                <small className={cls.subject_lecturer}>
                  Вик. Мосюрчак В.М{" "}
                </small>
                <small className={cls.subject_location}>
                  ауд. <b>307</b>
                </small>
              </div>
            </li>
            <li className={cls.subject}>
              <div className={cls.subject_info}>
                <h3 className="subject_title">Мат. Аналіз</h3>
                <small className={cls.subject_time}>10:00</small>
              </div>
              <div className={cls.subject_details}>
                <small className={cls.subject_lecturer}>
                  Вик. Мосюрчак В.М{" "}
                </small>
                <small className={cls.subject_location}>
                  ауд. <b>307</b>
                </small>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default SchedulePage;
