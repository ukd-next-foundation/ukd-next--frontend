import cls from './Toasts.module.scss'
import { useToastData } from './hooks/useToastData.ts'
import Toast from './Toast.tsx'

function Toasts() {
  const toasts = useToastData()

  return (
    <div className={cls.toasts}>
      <div className={cls.toasts_container}>
        {toasts.map((toast) => (
          <Toast type={toast.type} key={toast.id} message={toast.message} id={toast.id} />
        ))}
      </div>
    </div>
  )
}

export default Toasts
