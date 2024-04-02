import ProgressCircle from '../../UI/ProgressCircle/ProgressCircle.tsx'
import { ReactNode } from 'react'
import Skeleton from '../Skeleton/Skeleton.tsx'

interface IGradebookProgressSkeleton {
  children: ReactNode
  show: boolean
}
function GradebookProgressSkeleton({ show, children }: IGradebookProgressSkeleton) {
  return (
    <>
      {show ? (
        <Skeleton
          show={show}
          bgColor={'rgba(0,0,0,0)'}
          height={170}
          width={170}
          nested={
            <>
              <ProgressCircle color={'rgb(245, 245, 245, 1)'} value={75} />
              <ProgressCircle color={'rgb(245, 245, 245, 1)'} value={75} />
              <ProgressCircle color={'rgb(245, 245, 245, 1)'} value={75} />
            </>
          }
        ></Skeleton>
      ) : (
        children
      )}
    </>
  )
}

export default GradebookProgressSkeleton
