import cls from './Skeleton.module.scss'
import { ReactNode } from 'react'

interface ISkeleton {
  gap?: number
  height: number | string
  width: number | string
  bgColor?: string
  show?: boolean
  fillDeep?: number
  fillColor?: string
  count?: number
  radius?: number | string
  nested?: ReactNode
  children?: ReactNode
  opacity2?: number
}

function Skeleton(props: ISkeleton) {
  const { gap = 10, height = 30, width = 200, bgColor, show = true } = props

  return (
    <>
      {show ? (
        <div
          data-name={'skeleton'}
          className={`skeleton_loader ${cls.loaders} `}
          style={{ gap, width }}
        >
          {new Array(props.count).fill('').map((_, index: number) => (
            <div
              key={gap * index}
              style={{
                height,
                width,
                borderRadius: props.radius,
                backgroundColor: bgColor,
                boxShadow: `inset 0px 0px 0px ${props.fillDeep}px ${props.fillColor}`,
              }}
              className={`${cls.loader}`}
            >
              <div className={cls.nested_container}>{props.nested}</div>
              <div style={{ opacity: props.opacity2 }} className={cls.loader_2}></div>
            </div>
          ))}
        </div>
      ) : (
        props.children
      )}
    </>
  )
}

export default Skeleton
