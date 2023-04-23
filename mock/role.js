// 角色相关测试数据
module.exports = [
    {
        url: '/api/role/all',  // 获取角色列表,只能获取这个用户本身拥有的角色
        type: 'get',
        response: require('./json/roleList')
    },
    {
        url: '/api/role/add',  // 添加角色
        type: 'post',
        response: config => {

        }
    }
]