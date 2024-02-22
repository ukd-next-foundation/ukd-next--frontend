import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'

export function useFramerScroll() {
  const { scrollYProgress } = useScroll()
  const [flex, setFlex] = useState('column')
  const circle = useRef<HTMLDivElement>()

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.15) {
      circle.current!.style.scale = `${1 - latest * 1.5}`
      flex === 'row' && setFlex('column')
    }

    if (latest > 0.15 && latest !== 1) {
      setFlex('row')
    }
  })

  return {
    scrollYProgress,
    circle,
    flex,
  }
}
