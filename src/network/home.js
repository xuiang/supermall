import { request } from './request.js'

export function getHomeData () {
  return request({
    baseConfig: {
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    },
    requestConfig: {
      url: '/home/multidata'
    }
  })
}
