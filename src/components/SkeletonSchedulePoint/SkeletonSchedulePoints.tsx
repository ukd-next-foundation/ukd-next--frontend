import cls from './SkeletonSchedulePoints.module.scss'
import Skeleton from '../Skeleton/Skeleton.tsx'

function SkeletonSchedulePoints({ show }: { show: boolean }) {
  return (
    <>
      {show && (
        <div className={cls.points}>
          {[1, 2, 3].map((el) => {
            return (
              <div className={cls.point} key={el * 13}>
                <Skeleton
                  width={18}
                  height={18}
                  radius={'50%'}
                  nested={
                    <Skeleton radius={'50%'} width={15} height={15} bgColor={'white'} />
                  }
                />
                <div className={cls.stick}>
                  <Skeleton radius={0} width={3} height={110} />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default SkeletonSchedulePoints
