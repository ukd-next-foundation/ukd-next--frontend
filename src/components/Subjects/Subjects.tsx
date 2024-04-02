import cls from './Subjects.module.scss'
import Skeleton from '../skeletons/Skeleton/Skeleton.tsx'
import { Link } from 'react-router-dom'

interface ISubject {
  name: string
  id: string
}

interface ISubjects {
  title: string
  data: ISubject[]
}
function Subjects({ title, data }: ISubjects) {
  return (
    <div className={cls.subjects}>
      <h4>{title}</h4>
      {data.length ? (
        <ul className="subject_list">
          {data?.map((el: ISubject) => (
            <Link key={el.id} to={`/home/subjects/${el.id}`}>
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
      ) : (
        <>
          <Skeleton show={!data.length} height={22} width={'100%'} />
          <Skeleton show={!data.length} height={22} width={'100%'} />
          <Skeleton show={!data.length} height={22} width={'60%'} />
        </>
      )}
    </div>
  )
}

export default Subjects
