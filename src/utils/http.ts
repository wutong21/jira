
import { type } from 'os'
import qs from 'qs'
const apiUrl = process.env.REACT_APP_API_URL
import * as auth from '../auth-provider'
import { useAuth } from '../context/auth-context'

interface Config extends RequestInit {
    token?: string,
    data?: object
}

export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config = {}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': data ? 'application/json' : ''
        },
        ...customConfig
    }
    if (config.method.toUpperCase() === 'GET') {
        endpoint += `?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data || {})
    }
    return window.fetch(`${apiUrl}/${endpoint}`, config).then(async response => {
        if (response.status === 401) {
            await auth.logout()
            window.location.reload()
            return Promise.reject({ message: '请重新登录' })
        }
        const data = await response.json()
        if (response.ok) {
            return data
        } else {
            return Promise.reject(data)
        }
    })
}

export const useHttp = () => {
    const { user } = useAuth()
    return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token })
}

// utility type
/**
 * Partial 可不传
 * Omit 可删属性
 * 
 * keyof T T的键值的key
 */

