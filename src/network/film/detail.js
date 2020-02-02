import { request } from '../request'
export function getDetail (id) {
  return request({
    url: `/gateway?filmId=${id}&k=5991020`,
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1580019433369367191204","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.info'
    }
  })
}
