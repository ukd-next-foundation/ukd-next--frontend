import cls from './SubjectItemsSkeleton.module.scss'
import Skeleton from '../Skeleton/Skeleton.tsx'
import { ReactNode } from 'react'

interface ISubjectItemsSkeleton {
  children: ReactNode
  show: boolean
}
function SubjectItemsSkeleton({ children, show }: ISubjectItemsSkeleton) {
  return (
    <>
      {show ? (
        <div className={cls.subject_items_skeletons}>
          {[1, 2, 3, 4].map((item) => (
            <div
              key={'subject_items_skeleton' + item}
              className={cls.subject_items_skeleton}
            >
              <Skeleton width={25} height={25} radius={'6px'} />
              <Skeleton width={'100%'} height={10} />
            </div>
          ))}
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default SubjectItemsSkeleton
