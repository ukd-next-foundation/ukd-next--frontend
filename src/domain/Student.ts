import { UniqueId } from "../shared-kernel";

export interface Student {
	id: UniqueId;
	curatorId: UniqueId;
	groupId: UniqueId,
	accessLevel: unknown
}

export const isStudent = (accessLevel: unknown) => {
	return accessLevel === 'student'
}