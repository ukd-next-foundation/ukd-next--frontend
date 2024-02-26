import cls from './ScheduleSkeleton.module.scss'
import Skeleton from '../Skeleton/Skeleton.tsx'
import SkeletonSchedulePoints from '../SkeletonSchedulePoint/SkeletonSchedulePoints.tsx'

function ScheduleSkeleton({ isLoading }) {
  return (
    <div className={cls.schedule_skeleton}>
      <SkeletonSchedulePoints show={true} />
      <div className={cls.cards}>
        {[1, 2, 3].map((el) => (
          <div key={el * 5} className={cls.skeleton_card}>
            <Skeleton width={'85%'} height={20} />
            <Skeleton width={150} height={15} />
            <div className={cls.card_footer}>
              <Skeleton width={80} height={10} />
              <Skeleton width={80} height={10} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleSkeleton
