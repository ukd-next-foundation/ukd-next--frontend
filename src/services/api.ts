import axios from 'axios'
import { axiosInstance } from './axios'

export const refreshAccessToken = async function (
  refreshTokenUrl: string
): Promise<null | string> {
  return await axios
    .get(refreshTokenUrl, {
      withCredentials: true,
    })
    .then((response) => {
      localStorage.setItem('access-token', response.data.accessToken)
      return response.data.accessToken
    })
    .catch((err) => {
      console.error(err)
      return null
    })
}

export const fetchDataWithAxios = async function (url: string, params?: object) {
  const { data } = await axiosInstance.get(url, { params })
  return data
}

export const postDataWithAxios = async function (url: string, body: object) {
  const { data } = await axiosInstance.post(url, body)
  return data
}
