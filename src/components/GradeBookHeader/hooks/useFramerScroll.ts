import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'

export function useFramerScroll() {
  const { scrollYProgress } = useScroll()
  const [flex, setFlex] = useState<'column' | 'row'>('column')
  const circle = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(document.querySelector('.content')?.scrollHeight)

    if (latest < 0.15) {
      circle.current!.style.scale = `min(1, ${1 - latest * 1.5})`
      flex === 'row' && setFlex('column')
    }

    if (latest > 0.15 && latest !== 1) {
      circle.current!.style.scale = '.7'
      setFlex('row')
    }
  })

  return {
    scrollYProgress,
    circle,
    flex,
  }
}
