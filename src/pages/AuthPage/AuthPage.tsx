import { useAuth } from '../../hooks/useAuth'

const AuthPage = () => {
    const { login } = useAuth()
    return (
        <>
            <button onClick={() => login()}>Auth</button>
        </>
    )
}

export default AuthPage