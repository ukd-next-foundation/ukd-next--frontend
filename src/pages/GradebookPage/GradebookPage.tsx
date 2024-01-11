import cls from './GradebookPage.module.scss'
import PercentageCircle from '../../components/PercentageCircle/PercentageCircle'

function GradebookPage() {
  return (
    <div className={cls.subject_details}>
      <header className="subject_header">
        <h1 className="subject_title">Математика</h1>
      </header>
      <main className={cls.subject_main}>
        <div className="subject_performance">
          <div className="grade_summary">
            <div className={cls.grade_info}>
              <PercentageCircle />
              <div className={cls.grade}>
                <p className="grade_value">4.4</p>
                <small className="grade_label">Середній бал</small>
              </div>
            </div>
          </div>
          <ul className={cls.attendance_stats}>
            <li className={cls.attendance_item}>
              <div className={cls.attendance_info}>
                <div className={cls.marker_circle} />
                <p className="attendance_label">Відвідано</p>
              </div>
              <p className={cls.attendance_percent}>75%</p>
            </li>
            <li className={cls.attendance_item}>
              <div className={cls.attendance_info}>
                <div className={cls.marker_circle} />
                <p className="attendance_label">Відвідано</p>
              </div>
              <p className={cls.attendance_percent}>75%</p>
            </li>
            <li className={cls.attendance_item}>
              <div className={cls.attendance_info}>
                <div className={cls.marker_circle} />
                <p className="attendance_label">Відвідано</p>
              </div>
              <p className={cls.attendance_percent}>75%</p>
            </li>
          </ul>
          <div className={cls.attendance_summary}>
            <div className={cls.summary_item}>
              <small className="summary_label">Відвідано</small>
              <p className="summary_value">132</p>
            </div>
            <div className={cls.summary_item}>
              <small className="summary_label">Відвідано</small>
              <p className="summary_value">132</p>
            </div>
            <div className={cls.summary_item}>
              <small className="summary_label">Відвідано</small>
              <p className="summary_value">132</p>
            </div>
          </div>
        </div>
        <div className={cls.subject_marks}>
          <div className={cls.marks_header}>
            <p>Журнал оцінок</p>
            <img src="/info.svg" alt="" />
          </div>
          <ul className={cls.marks_list}>
            <li className={cls.mark_item}>
              <div className={cls.mark_category}>
                <p>A</p>
              </div>
              <div className={cls.mark_info}>
                <p className={cls.mark_date}>21.05.2024</p>
                <p className={cls.mark_value}>3</p>
              </div>
            </li>
            <li className={cls.mark_item}>
              <div className={cls.mark_category}>
                <p>A</p>
              </div>
              <div className={cls.mark_info}>
                <p className={cls.mark_date}>21.05.2024</p>
                <p className={cls.mark_value}>3</p>
              </div>
            </li>
            <li className={cls.mark_item}>
              <div className={cls.mark_category}>
                <p>A</p>
              </div>
              <div className={cls.mark_info}>
                <p className={cls.mark_date}>21.05.2024</p>
                <p className={cls.mark_value}>3</p>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default GradebookPage
