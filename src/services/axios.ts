import axios from 'axios'
import { refreshAccessToken } from './api'

const REFRESH_TOKEN_URL = ''
const BASE_URL = '/api/v0'

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
      const access_token = await refreshAccessToken(REFRESH_TOKEN_URL)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
      return axiosInstance(originalRequest)
    }

    window.location.href = '/auth'
    return Promise.reject(error)
  },
)
