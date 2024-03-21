import cls from './Toast.module.scss'
import { IToast } from '../../store/ToastStore.ts'
import { useToastRemover } from './hooks/useToastRemover.ts'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { progressVariants, toastVariants } from './framer'
import { useToast } from '../../hooks/useToast.ts'

function Toast({ id, message, type }: IToast) {
  const { removeToast } = useToast()
  const [isView, setIsView] = useState(true)
  const { removeToastHandler } = useToastRemover(() => setIsView(false))

  return (
    <AnimatePresence onExitComplete={() => removeToast(id)}>
      {isView && (
        <motion.div
          variants={toastVariants}
          layout={'position'}
          initial={'hidden'}
          animate={'show'}
          exit={'end'}
          className={`${cls.toast} ${cls[type]}`}
        >
          <div className={cls.toast_content}>
            <motion.div
              initial="fromTop"
              animate="toBottom"
              transition={{ duration: 8.5 }}
              variants={progressVariants}
              className={cls.progress_bar}
            ></motion.div>
            <img
              className={cls.toast_type_img}
              src={`/icons/toast_${type}.svg`}
              alt="toast-type"
            />
            <p>{message}</p>
          </div>
          <div onClick={removeToastHandler} className={cls.toast_close_icon}>
            <img src="/icons/toast_cross.svg" alt="toast-close" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast
