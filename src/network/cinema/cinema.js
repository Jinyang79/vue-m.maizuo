import { request } from '../request'
export function getCinema () {
  return request({
    url: '/gateway?cityId=110100&ticketFlag=1&k=6842504',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1580019433369367191204","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  })
}
