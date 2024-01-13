import { Subject } from "./subject"

interface SubjectList {
	[index: string]: Subject[],
}

export const splitSubjectsByCategories = (data: Subject[]) => {
	return data.reduce((acc: SubjectList, item: Subject) => {
		const { subjectCategory } = item;
		return { ...acc, [subjectCategory]: [...acc[subjectCategory], item]}
	},{general: [], proffessional: []} as SubjectList)
}