import cls from './GradebookPage.module.scss'
import GradeBookHeader from '../../components/GradeBookHeader/GradeBookHeader.tsx'
import SubjectItem from '../../components/SubjectItem/SubjectItem.tsx'
import GradeBookInfo from '../../components/GradeBookInfo/GradeBookInfo.tsx'
import { useQuery } from '@tanstack/react-query'
import { fetchDataWithAxios } from '../../services/api.ts'
import { useParams } from 'react-router'
import SubjectItemsSkeleton from '../../components/skeletons/SubjectItemsSkeleton/SubjectItemsSkeleton.tsx'
import { Link } from 'react-router-dom'

interface IMark {
  id: number
  date: string
  type: string
  mark: string
}

function GradebookPage() {
  const { subjectId } = useParams()

  const { data } = useQuery({
    queryFn: () => fetchDataWithAxios(`/journals/by-lesson/${subjectId}`),
    queryKey: ['lesson', subjectId],
  })

  console.log(data)
  return (
    <div className={cls.subject_details}>
      <header className={cls.subject_header}>
        <Link to={'/home/subjects'}>
          <img src="/icons/arrow_back.svg" alt="" />
        </Link>
        <h1 className={cls.subject_title}>Математика</h1>
      </header>
      <main className={cls.subject_main}>
        <GradeBookHeader attendance={data?.attendance} averageMark={data?.averageMark} />
        <div className={cls.subject_marks}>
          <div className={cls.marks_header}>
            <p>Журнал оцінок</p>
            <GradeBookInfo />
          </div>
          <ul className={cls.marks_list}>
            <SubjectItemsSkeleton show={!data}>
              {data?.marks?.map((markItem: IMark) => (
                <SubjectItem
                  type={markItem.type}
                  mark={markItem.mark}
                  date={markItem.date}
                  key={markItem.id + 91}
                />
              ))}
            </SubjectItemsSkeleton>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default GradebookPage
