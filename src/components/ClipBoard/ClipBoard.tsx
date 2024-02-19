import cls from "./ClipBoard.module.scss";
import { useClipBoard } from "./hooks/useClipBoard.ts";
import { ReactNode } from "react";

interface IClipBoard {
  children: ReactNode;
  value: string;
}
function ClipBoard({ children, value }: IClipBoard) {
  const { writeClipboardText } = useClipBoard(value);
  return (
    <div className={cls.clipboard}>
      {children}{" "}
      <img onTouchStart={writeClipboardText} src="/icons/copy.svg" alt="" />
    </div>
  );
}

export default ClipBoard;
