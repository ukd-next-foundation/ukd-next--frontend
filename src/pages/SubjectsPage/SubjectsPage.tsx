import cls from './SubjectsPage.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchDataWithAxios } from '../../services/api.ts'
import Subjects from '../../components/Subjects/Subjects.tsx'

const SubjectsPage = () => {
  const { data = [] } = useQuery({
    queryFn: () => fetchDataWithAxios('/journals/all-avalible-lesssons'),
    queryKey: ['subjects'],
  })

  return (
    <div className={cls.journals_container}>
      <h1>Журнали</h1>
      <div className={cls.subject_categories}>
        <Subjects data={data} title={'Загальноосвітні предмети'} />
        <Subjects data={data} title={'Профільні предмети'} />
      </div>
    </div>
  )
}

export default SubjectsPage
