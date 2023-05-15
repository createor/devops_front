import md5 from 'js-md5'
import { JSEncrypt } from 'jsencrypt'

// const Base64 = require('js-base64').Base64

/**
 * @description json转对象
 * @param {json} data json数据
 * @return {object} 对象格式
 */
export function json2obj (data) {
  return JSON.parse(data)
}

/**
 * @description 加密函数
 * @param {string} data 需要加密的字符串
 * @param {string} key 公钥
 * @return {string} 加密后的字符串
 */
export function encryptData (data, key) {
  // 参考https://www.cnblogs.com/szy9/p/14803480.html
  // 先进行md5加密
  let str1 = md5(data)
  console.log(str1)
  // https://blog.csdn.net/qq_40323256/article/details/124006449
  let encrypt = new JSEncrypt()
  encrypt.setPublicKey(key)
  let str2 = encrypt.encrypt(str1.toString())
  console.log(str2)
  return str2
}

/**
 * @description websocket连接
 */
export default function wsData (url) {
  // 单例模式
  let instance
  function createInstance () {
    const ws = new WebSocket(url)
    return ws
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
}
