import axios from 'axios'
export function request (config) {
  const instanceHome = axios.create(config.baseConfig)
  instanceHome.interceptors.request.use(config => {
    console.log(config.url)
    /*
      拦截的一半作用:
      1.config中的数据不符合服务器的要求
      2.比如每次发送网络请求时,都希望在界面中显示一个请求的图标
      3.某些网络请求(比如登录,需要携带token),都必须携带一些特殊的信息
    */
    return config// 拦截后要返回出去
  }, err => {
    console.log(err)
  })
  instanceHome.interceptors.response.use(res => {
    console.log(res)
    return res.data// 拦截后要返回出去
  }, err => {
    console.log(err)
  })
  return instanceHome(config.requestConfig)
}
