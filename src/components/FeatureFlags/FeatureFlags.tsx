import { useQuery } from '@tanstack/react-query'
import { fetchDataWithAxios } from '../../services/api.ts'
import { ReactNode } from 'react'

export interface IFeatureFlags {
  children: ReactNode
  flagParam: string
}

function FeatureFlags({ children, flagParam }: IFeatureFlags) {
  const { data } = useQuery({
    queryFn: () => fetchDataWithAxios(`/feature-flags`),
    queryKey: ['featureFlags'],
    staleTime: Infinity,
  })

  return (flagParam === '' || data?.value[flagParam]) && children
}
export default FeatureFlags
