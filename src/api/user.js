// 用户相关接口
import instance from './base'

/**
 * @description 用户登陆接口
 * @param {object<username string,password string>} data
 * @return {instance}
 */
export function userLogin (data) {
  return instance.post(`/api/user/login`, data)
}

/**
 * @description 获取用户菜单接口
 * @returns {instance}
 */
export function getMenu () {
  return instance.get(`/api/user/menu`)
}

/**
 * @description 获取公钥接口
 * @return {instance}
 */
export function getKey () {
  return instance.get(`/api/user/key`)
}

/**
 * @description 获取用户信息接口
 * @return {instance}
 */
export function getInfo () {
  return instance.get(`/api/user/info`)
}
