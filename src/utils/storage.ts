export const setUserIdToLocalStorageByRoles = (roles: string[], id: string) => {
  localStorage.setItem(roles.includes('TEACHER') ? 'teacherId' : 'groupId', id)
}
