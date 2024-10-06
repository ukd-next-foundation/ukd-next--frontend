import { useQuery } from '@tanstack/react-query'
import { fetchDataWithAxios } from '../services/api.ts'

export function useProfileData() {
  const { data } = useQuery<any>({
    queryFn: () => fetchDataWithAxios('/users/profile'),
    queryKey: ['user'],
  })

  return data
}
