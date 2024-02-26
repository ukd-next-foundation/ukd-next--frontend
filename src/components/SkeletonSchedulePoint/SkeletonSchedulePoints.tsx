import cls from './SkeletonSchedulePoints.module.scss'
import Skeleton from '../Skeleton/Skeleton.tsx'

function SkeletonSchedulePoints({ show }) {
  return (
    <>
      {show && (
        <div className={cls.points}>
          {[1, 2, 3].map((el) => (
            <div className={cls.point} key={el * 13}>
              {el === 2 ? (
                <div className={cls.circle}>
                  <div className={cls.circle_container}>
                    <Skeleton
                      key={11 * el}
                      width={35}
                      height={35}
                      bgColor={'rgba(255,255,255,0)'}
                      radius={'50%'}
                      fillColor={'rgba(247,247,247,1)'}
                      fillDeep={5}
                    />
                    <Skeleton width={20} height={20} radius={'50%'} />
                  </div>
                </div>
              ) : (
                <Skeleton
                  width={14} // if size is small, must be only pair number
                  height={14} // if size is small, must be only pair number
                  bgColor={'rgba(247,247,247,1)'}
                  radius={'50%'}
                  nested={
                    <Skeleton
                      fillDeep={8}
                      fillColor={'white'}
                      width={8} // if size is small, must be only pair number
                      radius={'50%'}
                      height={8} // if size is small, must be only pair number
                    />
                  }
                />
              )}
              <div className={cls.stick}>
                <Skeleton radius={0} width={3} height={110} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SkeletonSchedulePoints
