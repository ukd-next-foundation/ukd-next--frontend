import { Time, DateType, UniqueId } from "../shared-kernel";

export interface Lecture {
  id: UniqueId;
  date: DateType;
  timeStart: Time;
  timeEnd: Time;
  lectureName: string;
  teacherName: string;
  classroom: number;
}


// Maybe inRange function