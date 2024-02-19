import { useAuth } from '../../hooks/useAuth'
import cls from './AuthPage.module.scss'

const AuthPage = () => {
  const { login } = useAuth()
  return (
    <div className={cls.welcome}>
      <div className={cls.welcome_container}>
        <div className={cls.logo}>
          <img src="/icons/king.svg" alt="university logo" />
        </div>
        <div className={cls.welcome_text}>
          <h1>Ласкаво просимо до “Cистеми Дистанційної Освіти”</h1>
          <p>
            Користуватись додатком можуть лише студенти Університету Короля Данила які
            авторизувались через навчальну пошту
          </p>
        </div>
      </div>
      <button className={cls.auth_button} onClick={() => login()}>
        <img src="/icons/google.svg" alt="" />
        Авторизуватись
      </button>
    </div>
  )
}

export default AuthPage
