import { request } from '../request'
export function getHeaderSwiper (id) {
  return request({
    url: `/gateway?type=2&cityId=${id}&k=9545404`,
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1580019433369367191204","bc":"310100"}',
      'X-Host': 'mall.cfg.common-banner'
    }
  })
}
