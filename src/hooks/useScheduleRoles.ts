import { useQueryClient } from '@tanstack/react-query'

interface IUserScheduleRoleData {
  roles: string[]
  group: { id: string }
  id: string
}

export function useScheduleRoles() {
  const { roles, id, group } =
    useQueryClient().getQueryData<IUserScheduleRoleData>(['user']) ?? {}
  return roles?.includes('TEACHER') ? { teacherId: id } : { groupId: group?.id }
}
