import { useQuery } from '@tanstack/react-query'
import { fetchDataWithAxios } from '../../../services/api.ts'
import { Lecture } from '../../../domain/Lecture.ts'
import { useScheduleRoles } from '../../../hooks/useScheduleRoles.ts'

export function useLectures(currentDate: string) {
  const userIdParams = useScheduleRoles()

  const { data = [], isLoading } = useQuery<Lecture[]>({
    queryKey: ['schedules', currentDate],
    queryFn: () =>
      fetchDataWithAxios(`/schedules`, {
        to: currentDate,
        from: currentDate,
        ...userIdParams,
      }),
  })

  return {
    data,
    isLoading,
  }
}
