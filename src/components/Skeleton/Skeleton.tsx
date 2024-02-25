import cls from './Skeleton.module.scss'
import { useId } from 'react'

function Skeleton(props) {
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
