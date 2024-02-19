import cls from './NewsPage.module.scss'

function NewsPage() {
  return (
    <div className={cls.news_container}>
      <header>
        <h1>Новини УКД </h1>
      </header>
      <main>
        <ul className={cls.news_list}>
          <li className={cls.news_item}>
            <div className={cls.author_info}>
              <img src="https://picsum.photos/200/300" alt="" />
              <div>
                <p>Луцький Мирослав Іванович</p>
                <small>дві години тому</small>
              </div>
            </div>
            <div className={cls.news_content}>
              <h4>Студвесни не буде</h4>
              <p className={cls.news_description}>
                Так само курс на соціально-орієнтоввний національний проект сприяє підготовці та
                реалізації подальших напрямків розвиненої системи массової участі.
              </p>
            </div>
          </li>
          <li className={cls.news_item}>
            <div className={cls.author_info}>
              <img src="https://picsum.photos/200/300" alt="" />
              <div>
                <p>Луцький Мирослав Іванович</p>
                <small>дві години тому</small>
              </div>
            </div>
            <div className={cls.news_content}>
              <h4>Студвесни не буде</h4>
              <p className={cls.news_description}>
                Так само курс на соціально-орієнтоввний національний проект сприяє підготовці та
                реалізації подальших напрямків розвиненої системи массової участі.
              </p>
            </div>
          </li>
          <li className={cls.news_item}>
            <div className={cls.author_info}>
              <img src="https://picsum.photos/200/300" alt="" />
              <div>
                <p>Луцький Мирослав Іванович</p>
                <small>дві години тому</small>
              </div>
            </div>
            <div className={cls.news_content}>
              <h4>Студвесни не буде</h4>
              <p className={cls.news_description}>
                Так само курс на соціально-орієнтоввний національний проект сприяє підготовці та
                реалізації подальших напрямків розвиненої системи массової участі.
              </p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default NewsPage
