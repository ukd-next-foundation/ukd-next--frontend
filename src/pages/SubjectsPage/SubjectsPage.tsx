import cls from './SubjectsPage.module.scss'

const SubjectsPage = () => {
  return (
    <div className={cls.journals_container}>
      <h1>Журнали</h1>
      <div className={cls.subject_categories}>
        <div className={cls.general_subjects}>
          <h4>Загально Освітні предмети</h4>
          <ul className="subject_list">
            <li className={cls.subject_item}>
              <img src="/icons/collections_bookmark.svg" alt="Book" />
              <div className={cls.subject_info}>
                <p>Математика</p>
                <img src="/icons/next_arrow.svg" alt="Go subject arrow" />
              </div>
            </li>
            <li className={cls.subject_item}>
              <img src="/icons/collections_bookmark.svg" alt="Book" />
              <div className={cls.subject_info}>
                <p>Математика</p>
                <img src="/icons/next_arrow.svg" alt="Go subject arrow" />
              </div>
            </li>
            <li className={cls.subject_item}>
              <img src="/icons/collections_bookmark.svg" alt="Book" />
              <div className={cls.subject_info}>
                <p>Математика</p>
                <img src="/icons/next_arrow.svg" alt="Go subject arrow" />
              </div>
            </li>
          </ul>
        </div>
        <div className={cls.specialized_subjects}>
          <h4>Профільні предмети</h4>
          <ul className="subject_list">
            <li className={cls.subject_item}>
              <img src="/icons/collections_bookmark.svg" alt="Book" />
              <div className={cls.subject_info}>
                <p>Математика</p>
                <img src="/icons/next_arrow.svg" alt="Go subject arrow" />
              </div>
            </li>
            <li className={cls.subject_item}>
              <img src="/icons/collections_bookmark.svg" alt="Book" />
              <div className={cls.subject_info}>
                <p>Математика</p>
                <img src="/icons/next_arrow.svg" alt="Go subject arrow" />
              </div>
            </li>
            <li className={cls.subject_item}>
              <img src="/icons/collections_bookmark.svg" alt="Book" />
              <div className={cls.subject_info}>
                <p>Математика</p>
                <img src="/icons/next_arrow.svg" alt="Go subject arrow" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SubjectsPage
