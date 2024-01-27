import { useGoogleLogin } from '@react-oauth/google'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { postDataWithAxios } from '../services/api'

export function useAuth() {
  const navigate = useNavigate()
  //TODO: version of API to const

  const doAuth = useMutation({
    mutationFn: (accessToken: string) =>
      postDataWithAxios('/auth/by/google', {
        accessToken,
      }),
    onSuccess: (data) => {
      localStorage.setItem('access-token', data.accessToken)
      navigate('/profile')
    },
    onError: () => {
      /** TOAST, or any other alert about error logic */
    },
  })

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => doAuth.mutate(codeResponse.access_token),
  })

  return {
    login,
  }
}

//TODO: Add types
