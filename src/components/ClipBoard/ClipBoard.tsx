import cls from './ClipBoard.module.scss'
import { ReactNode } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface IClipBoard {
  children: ReactNode
  value: string
}
function ClipBoard({ children, value }: IClipBoard) {
  return (
    <CopyToClipboard text={value}>
      <div className={cls.clipboard}>
        {children} <img src="/icons/copy.svg" alt="" />
      </div>
    </CopyToClipboard>
  )
}

export default ClipBoard
