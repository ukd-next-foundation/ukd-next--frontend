import axios from 'axios'
import { refreshAccessToken } from './api'

const BASE_URL = '/api/v0'
const REFRESH_TOKEN_URL = BASE_URL + '/auth/refresh'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access-token')}`
  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const accessToken = await refreshAccessToken(REFRESH_TOKEN_URL)

      if (accessToken) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
        return axiosInstance(originalRequest)
      }
    }

    localStorage.removeItem('access-token')
    window.location.href = '/auth'

    return Promise.reject(error)
  }
)
