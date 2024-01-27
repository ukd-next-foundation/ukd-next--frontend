import axios from 'axios'
import { axiosInstance } from './axios'

export const refreshAccessToken = async function (refreshTokenUrl: string) {
    const response = await axios.get(refreshTokenUrl, {
        withCredentials: true,
    })
    localStorage.setItem('token', response.data.accessToken)
}

export const fetchDataWithAxios = async function (url: string) {
    const { data } = await axiosInstance.get(url)
    console.log('fetchDataWithAxios', data)
    return data
}

export const postDataWithAxios = async function (url: string, body: object) {
    const { data } = await axiosInstance.post(url, body)
    console.log('postDataWithAxios', data)
    return data
}
