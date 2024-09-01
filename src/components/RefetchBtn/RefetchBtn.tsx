import cls from './RefetchBtn.module.scss'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

interface IRefetchBtn {
  width?: number
  height?: number
  queryKey: string[]
}

function RefetchBtn({ width = 180, height = 58, queryKey }: IRefetchBtn) {
  const queryClient = useQueryClient()
  const [isLoading, setIsLoading] = useState(false)

  const btnClickHandler = () => {
    setIsLoading(true)
    queryClient.invalidateQueries({ queryKey }).finally(() => setIsLoading(false))
  }

  return (
    <button onClick={btnClickHandler} style={{ width, height }} className={cls.btn}>
      {isLoading ? <span className={cls.loader}></span> : <p>Оновити</p>}
    </button>
  )
}

export default RefetchBtn
