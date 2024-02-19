import { useGoogleLogin } from '@react-oauth/google'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { postDataWithAxios } from '../services/api'

export function useAuth() {
  const navigate = useNavigate()

  const doAuth = useMutation({
    mutationFn: (accessToken: string) => {
      return postDataWithAxios('/auth/by/google', {
        accessToken,
      })
    },

    onSuccess: (data) => {
      localStorage.setItem('access-token', data.accessToken)
      navigate('/home/profile')
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
