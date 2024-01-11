import { GradeBook } from "./GradeBook.ts";

export interface SubjectItemDetails {
  id: string;
  subjectName: string;
  averageGrade: number;
  totalClasses: number;
  missedClasses: number;
  compensatedClasses: number;
  gradeBook: GradeBook;
}

/*
 *   1. Відсотки точно будуть?

 *   2. Якщо відсотки будуть, то вони мені прийдуть, чи я сам їх вираховую
 *   на основі кількості відвіданих/пропущених/відроблених завдань
 *
 *   3. Журнал оцінок приходить повністю, чи поетапно і догружається по скролу, зазвичай
 *   кількість оцінок не перевищує 50, чи перехід на сторінку предмету
 *   і потім запит на журнал
 *
 */
