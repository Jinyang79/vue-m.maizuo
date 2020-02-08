import { request } from '../request'
export function getComingsoon (id) {
  return request({
    url: `/gateway?cityId=${id}&pageNum=1&pageSize=10&type=2&k=7579921`,
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1580019433369367191204","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.list'
    }
  })
}
