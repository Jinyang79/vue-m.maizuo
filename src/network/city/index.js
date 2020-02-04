import { request } from '../request'
export function getCity () {
  return request({
    url: '/gateway?k=9495839',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1580019433369367191204","bc":"310100"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
}
