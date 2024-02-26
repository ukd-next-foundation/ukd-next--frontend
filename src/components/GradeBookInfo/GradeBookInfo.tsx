import cls from './GradeBookInfo.module.scss'
import { useState } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick.ts'

function GradeBookInfo() {
  const [open, setOpen] = useState(false)
  const element = useOutsideClick(() => setOpen(false))

  return (
    <div ref={element} className={cls.info_container}>
      <img onClick={() => setOpen(true)} src="/icons/info.svg" alt="" />
      {open && (
        <div className={cls.info}>
          <div className={cls.info_list}>
            <li className={cls.info_item}>
              <h3>Л</h3>
              <span>-</span>
              <p>лекція</p>
            </li>
            <li className={cls.info_item}>
              <h3>C</h3>
              <span>-</span>
              <p>семінар</p>
            </li>
            <li className={cls.info_item}>
              <h3>Т</h3>
              <span>-</span>
              <p>тестування</p>
            </li>
          </div>
        </div>
      )}
    </div>
  )
}

export default GradeBookInfo
