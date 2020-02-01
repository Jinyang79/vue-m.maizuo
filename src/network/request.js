import axios from 'axios'
export function request (config) {
  const instance = axios.create({
    baseURL: 'https://m.maizuo.com'

  })
  return instance(config)
}
