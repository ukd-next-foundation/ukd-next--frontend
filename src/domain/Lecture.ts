import { Time, DateType, UniqueId } from '../shared-kernel'

export interface Lecture {
  id: UniqueId
  date: DateType
  startAt: Time
  endAt: Time
  type: string
  createdAt: DateType
  updatedAt: DateType
  lectureName: string
  teacherName: string
  classroom: {
    id: UniqueId
    name: string
  }
  teacher: {
    id: UniqueId
    email: string
    fullname: string
  }
  groups: {
    id: UniqueId
    name: string
  }
  lesson: {
    id: UniqueId
    name: string
  }
}

// Maybe inRange function
