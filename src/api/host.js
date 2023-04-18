import instance from './base'

/**
 * @description 获取所有主机信息
 * @return {instance}
 */
export function getAll () {
  return instance.get(`/api/host/all`)
}

/**
 * @description 获取主机详情
 * @param {string} ip 主机IP
 * @return {instance}
 */
export function getDetail (ip) {
  return instance.get(`/api/host/detail`, { params: {ip: ip} })
}
