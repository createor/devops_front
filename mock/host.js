// 主机相关测试数据
module.exports = [
    {
        url: '/api/host/all',  // 查询所有主机信息
        type: 'get',
        response: require('./json/hostList')
    },
    {
        url: '/api/host/detail',  // 获取单台主机详情
        type: 'get',
        response: require('./json/chartList')
    }
]