import { request } from './request.js'

export function getHomeData () {
  return request({
    baseConfig: {
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    },
    requestConfig: {
      url: '/home/multidata',
      methods: 'get'
    }
  })
}

export function getHomeGoods (type, page) {
  return request({
    baseConfig: {
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    },
    requestConfig: {
      url: '/home/data',
      params: {
        type,
        page
      },
      methods: 'get'
    }
  })
}
