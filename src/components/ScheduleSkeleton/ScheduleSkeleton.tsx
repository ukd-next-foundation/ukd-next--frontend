import cls from './ScheduleSkeleton.module.scss'
import Skeleton from '../Skeleton/Skeleton.tsx'
import SkeletonSchedulePoints from '../SkeletonSchedulePoint/SkeletonSchedulePoints.tsx'
import { ReactNode } from 'react'

interface IScheduleSkeleton {
  isLoading: boolean
  children: ReactNode
}
function ScheduleSkeleton({ isLoading, children }: IScheduleSkeleton) {
  return (
    <>
      {isLoading ? (
        <div className={cls.schedule_skeleton}>
          <SkeletonSchedulePoints show={true} />
          <div className={cls.cards}>
            {[1, 2, 3].map((el) => (
              <div key={el * 5} className={cls.skeleton_card}>
                <Skeleton width={180} height={20} />
                <Skeleton width={135} height={12} />
                <div className={cls.card_footer}>
                  <Skeleton width={75} height={12} />
                  <Skeleton width={62} height={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default ScheduleSkeleton
