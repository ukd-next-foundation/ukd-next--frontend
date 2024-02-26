import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('touchstart', handleClickOutside as EventListener)

    return () => {
      document.removeEventListener('touchstart', handleClickOutside as EventListener)
    }
  }, [callback])

  return ref
}
