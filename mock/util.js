/**
 * @description 判断请求是否携带token
 * @param {object} config 请求
 * @return {boolean}
 */
export function checkToken (config) {
    // const token = config.headers['Authorization']  // 获取请求头的token
    // if (token && token === '123456') {
    //     return true
    // }
    // return false
    return true
}

/**
 * @description 获取请求的参数
 * @param {object} config 请求
 * @param {String} param 参数
 * @return {String} 结果
 */
export function formatReq (config, param) {
  const url = decodeURIComponent(config.url.split('?')[1]).replace(/\+/g, ' ')  // 根据url的?切割
  if (!url) {  // 如果没有参数
    return null
  }
  const arr = url.split('&')
  arr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      if (name === param) {
        return val
      }
    }
  })
  return null
}
