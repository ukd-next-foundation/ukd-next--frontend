export interface Lecture {
  id: string;
  date: string | Date;
  name: string;
  teacher: string;
  timeStart: string;
  timeEnd: string;
  classroom: number;
}
