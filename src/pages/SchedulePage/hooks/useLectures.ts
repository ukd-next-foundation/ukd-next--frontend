import { useQuery } from '@tanstack/react-query'
import { fetchDataWithAxios } from '../../../services/api.ts'
import { Lecture } from '../../../domain/Lecture.ts'

export function useLectures(currentDate: string) {
  const { data = [], isLoading } = useQuery<Lecture[]>({
    queryKey: ['schedules', currentDate],
    queryFn: () => fetchDataWithAxios(`/schedules?from=${currentDate}&to=${currentDate}`),
  })

  return {
    data,
    isLoading,
  }
}
