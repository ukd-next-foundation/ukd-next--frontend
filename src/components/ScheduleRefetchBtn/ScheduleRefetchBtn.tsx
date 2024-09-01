import cls from './ScheduleRefetchBtn.module.scss'
import RefetchBtn from '../RefetchBtn/RefetchBtn.tsx'

interface IScheduleRefetchBtn {
  currentDate: string
}

function ScheduleRefetchBtn({ currentDate }: IScheduleRefetchBtn) {
  return (
    <div className={cls.refetch_btn}>
      <div className={cls.refetch_btn_container}>
        <h2>Отакої!</h2>
        <p>Схоже сьогодні у вас немає пар.</p>
        <RefetchBtn queryKey={['schedules', currentDate]} />
      </div>
    </div>
  )
}

export default ScheduleRefetchBtn
