// 测试数据
const Mock = require('mockjs')  // 引入依赖

const host = require('./host')
const user = require('./user')
const role = require('./role')

// 测试的url组
const mocks = [
    ...host,
    ...user,
    ...role
]

Mock.setup({
    timeout: '200-600'  // 设置响应时间在200到600毫秒间
})

function mockXHR() {
    console.log("mock start")
    for (const i of mocks) {
        Mock.mock(new RegExp(connactUrl(i.url)), i.type || 'get', i.response)
    }
}

/**
 * @description 连接url
 * @param {string} url 
 * @return {string} newUrl 拼接后新的url
 */
function connactUrl(url) {
    let baseUrl = "http://116.205.190.209:90"  // 与axios的baseURL保持一致
    if (baseUrl) {
        return baseUrl + url
    }
    return url
}

module.exports = {
    mockXHR
}
