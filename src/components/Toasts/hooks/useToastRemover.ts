import { useEffect } from 'react'

const DELAY_TO_REMOVE = 7000

interface IOptions {
  id: string
  cb: () => void
}
export function useToastRemover(options: IOptions) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      options.cb()
    }, DELAY_TO_REMOVE)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return {
    removeToastHandler: () => options.cb(),
  }
}
