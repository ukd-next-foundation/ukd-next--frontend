import cls from './GradebookPage.module.scss'
import GradeBookHeader from '../../components/GradeBookHeader/GradeBookHeader.tsx'
import SubjectItem from '../../components/SubjectItem/SubjectItem.tsx'
import { motion } from 'framer-motion'
import GradeBookInfo from '../../components/GradeBookInfo/GradeBookInfo.tsx'

function GradebookPage() {
  return (
    <div className={cls.subject_details}>
      <header className="subject_header">
        <h1 className="subject_title">Математика</h1>
      </header>
      <main className={cls.subject_main}>
        <GradeBookHeader />
        <motion.div layout className={cls.subject_marks}>
          <div className={cls.marks_header}>
            <p>Журнал оцінок</p>
            <GradeBookInfo />
          </div>
          <ul className={cls.marks_list}>
            {[1, 2, 3].map((grade) => (
              <SubjectItem key={grade * 91} />
            ))}
          </ul>
        </motion.div>
      </main>
    </div>
  )
}

export default GradebookPage
