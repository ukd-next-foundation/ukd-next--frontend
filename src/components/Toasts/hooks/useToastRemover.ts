import { useEffect } from 'react'

const DELAY_TO_REMOVE = 7000

export function useToastRemover(callback: () => void) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      callback()
    }, DELAY_TO_REMOVE)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return {
    removeToastHandler: () => callback(),
  }
}
