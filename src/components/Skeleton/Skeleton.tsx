import cls from './Skeleton.module.scss'
import { ReactNode, useId } from 'react'

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
  const id = useId()

  return (
    <>
      {show ? (
        <div className={`${cls.loaders} `} style={{ gap }}>
          {new Array(props.count).fill('').map(() => (
            <div
              key={id}
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
