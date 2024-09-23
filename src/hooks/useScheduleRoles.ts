import { useQueryClient } from '@tanstack/react-query'

export function useScheduleRoles() {
  const { roles, id, group } = useQueryClient().getQueryData(['user']) ?? {}
  return roles?.includes('TEACHER') ? { teacherId: id } : { groupId: group?.id }
}
