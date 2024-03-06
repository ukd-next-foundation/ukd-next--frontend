import cls from './SubjectsPage.module.scss'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchDataWithAxios } from '../../services/api.ts'

const SubjectsPage = () => {
  const { data } = useQuery({
    queryFn: () => fetchDataWithAxios('/journals/all-avalible-lesssons'),
    queryKey: ['subjects'],
  })

  return (
    <div className={cls.journals_container}>
      <h1>Журнали</h1>
      <div className={cls.subject_categories}>
        <div className={cls.general_subjects}>
          <h4>Загально Освітні предмети</h4>
          <ul className="subject_list">
            {data?.map((el) => (
              <Link key={el + 132} to={`/home/subjects/${el.id}`}>
                <li className={cls.subject_item}>
                  <img src="/icons/collections_bookmark.svg" alt="Book" />
                  <div className={cls.subject_info}>
                    <p>{el.name}</p>
                    <img src="/icons/next_arrow.svg" alt="Go subject arrow" />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={cls.specialized_subjects}>
          <h4>Профільні предмети</h4>
          <ul className="subject_list">
            {[1, 2, 3].map((el) => (
              <Link key={el + 232} to={'/home/subjects/123'}>
                <li className={cls.subject_item}>
                  <img src="/icons/collections_bookmark.svg" alt="Book" />
                  <div className={cls.subject_info}>
                    <p>Математика</p>
                    <img src="/icons/next_arrow.svg" alt="Go subject arrow" />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SubjectsPage
