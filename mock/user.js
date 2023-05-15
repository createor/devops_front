const md5 = require('js-md5')
const JSEncrypt = require('jsencrypt').JSEncrypt
const checkToken = require('./util').checkToken
const Mock = require('mockjs')

// 用户列表
const users = [
    {
        uid: 1,
        username: "admin",
        password: "123456",
        token: "123456"
    },
    {
        uid: 2,
        username: "test",
        password: "test",
        token: "test666"
    }
]

/**
 * @description 获取用户信息
 * @param {string} key 键
 * @param {string} value 值
 * @return {object} 用户对象
 */
function getObj(key, value) {
    return users.filter(obj => {
        if (obj.hasOwnProperty(key) && obj[key] == value) {
            return obj
        }
        return {}
    })
}

// for(let i = 0;i < 10;i++) {
//     users.push(Mock.mock({
//         id: '@increment',
//         name: '@'
//     }))
// }
// users.push({
//     id: 1001,
//     name: 'admin'
// })

// 用户相关的测试数据
module.exports = [
    {
        url: '/api/user/all',  // 获取所有用户列表
        type: 'get',
        response: require('./json/userList')
    },
    {
        url: '/api/user/login',  // 用户登陆鉴权接口
        type: 'post',
        response: config => {
            // 获取用户名密码
            const { username,password } = JSON.parse(config.body)
            if (username && password) {
                // http://web.chacuo.net/netrsakeypair,此网址生成公私钥,不要配置密码
                // let private_key = "-----BEGIN PRIVATE KEY-----MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8ZkXTwbg9P7Ku59XgA5zd9FyA1xAT+DpPz6zHc3zqdjHhwuThMQ/E5atESUwK7/8tNO4ReMjmLBKqEnP610pGG1HkGknY1uOLviZafHb4wAjG3L2YxuysUdGYKybVQE8AmLaQPRUGaf8vhK9LCVApHNIo4bP3ZJdvJwUMB8l43p1D1kwePggeE41LmkK3d0k6dwwcRopSr34wNvVdGxBnTv8KD8xU9n7agQR7KLrmtmAqIE/TFdllwoP/KTDuaWSVAhMIZjvxDFJzk8U7FGv4qX0JpDz6atzOowWUzDDL/8QDe7oaEoi4yPz6VPmGDqizfK76dSdj/cED1emIye2zAgMBAAECggEBALOERD7tVM/P1UQCFnI5Hw0DHe2Kf4B3w6BvA3SdX8bNTuSO36aQKDV2noYXzYSSgLSjvcEaNVvVXQd/Q9IduGErARH31qvuvq1WR5drB7YozXQnu+VKjxP3dl6np34FpAGugi7YdSNCduzhYmJ+gkpacwqPXft6dy1rocx/0wL+gZWtjfqNd5yBxfwtpBzzoNaTPzIHEmBdh7c4YnjBoQ8EQCwanbtIaI4OfMBU7xfI2jnZzdbSvSbIFSa3EKDeqzInQFv2hSnPfnr8YHZ6eyN44LnzeYc2gvrO0WTBBxCsN4KjEluY3O3uT5IXqJSxg21FRZi/hEBg9NXTf6sY65kCgYEA3NHH4m2rGLNABGzJNOwoScvMgqJwwkNJD2DB5jdZGFLzywvuufhTMrtPXVbwJnFQN1ahe29+eAY7Fi1ziVqo7sffoCVjMMCC+eSvMaJC/iShbq7MeJTxz4ZrTuf6MeTOfAA52E18fSvjLpsCDOUL4OS+1jPuq7LkBjmks0bFEI0CgYEA2mo61hAkqrXN3PFQovez75p28SNkdkxkfDqfCw0xdplYmm7cjs9hs8mZzx/aLfXluhiuooltWC0H3Ju9NWHll8t+MWWRgyWpeOrfmAZkqcy3yqcXn2yq0qVe8M2lrVEJJYyM721bxNbgN2yD3X8QDdokuk/sQ9Uv9dGuPFnzBz8CgYEAyVL+AYPpVWi/+gjQ3U5eYQHNIGFHmuXLq5iUz/cwZMvkeAAWFDnCaON7tWb5JqNy9jEmoyqAzJ8pqcugpd8hXCqgyRqtN5qdD4ae8Aq3N4xgHlCCHYH2gTVViqhXZLvuQgHWu03SLTEhPLGYifceAFmtYBATDznXSZGuhsEEFFUCgYAQOvCgU5bF8LiZgH0jfxCp72qDRMQEXmzhJmIHKjXQwFhrMW3GVvbFq2d4kr9dxvYJPChN/7RWZxI8fH40509uVjrMZOXJPxU23Q08eM0mKQZHUt9Yg3S2Ln+9mSqElI7/cVBPwmqdV/JVbATograosNsl1SaTa9YiiDBQX8bFdQKBgAsH1+NQ8IhrHB5J74m30zWShSl9Pkpthge81sLlSKMCaVKcV4xGDxJv5I9FQQ78zVgVidjMVwPQPYQog/ZVA35UKA7cVnhnu+ZSwYRGRWqhkk3qFOubUMkSH/L6Rif8wB8Vwv+JvhGrvcpn6PaAtbybuGjOTqI7B25/T3jGyfDQ-----END PRIVATE KEY-----"
                let private_key = `
                -----BEGIN PRIVATE KEY-----
                MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+t80v6QiLM4iQ
                RHxeL/yo6kzsoGCW/fJXEbxHzL+2O8ZilXUerl9I2evpOJWc65PTpogBkvyinP1O
                0QCvV+skSz3lHNTrZ04dBKqiy3v24ra+svM0CV50zOmLkT/4W3qTZCEQ6qWjGTdu
                NWNrb+Ml73uCsXftjdV4Fk55A6ldDNkL3xa4qR4zJsCsqj/pKXN59C12M9DfMMZZ
                RH3Vn1ANBd0Uj4D4R1uL/dcuKMo5n6vQVK7a2KjlO7TU2+Ph4iJxosODRDaTCd44
                hza5vz30gy16zFacsGy4LE+S3tSa02vOWEcuS2qIbklEsTbTUPAMxihCZDhx0s9X
                f8EimGi7AgMBAAECggEAW517qbot6oCU54ienbg7jQEQdtML0zymP4E7itomden9
                ALp/CoAFMb/Nfbk61ais2I005Fyxk4QKguQPiiuXv1WNpBPXjEWR1oq5VX6eTBjY
                ZH8eKS8e+si8n9jke++l0EvXPoMZkmG4qO5oleGnoj+Ke1u5Gpp5ozhD9gn2P8Xo
                rJjZTr9oWcXq3UhfRLvKzSrFkYgnQM/T7cSqtvqcT4VUzVjpfuGuttPzL392ipCC
                TVpelUe0IiiSp7uuCQZMs39Q3KBa4OAwhovYdhFZKO40u47n5GJJT5qrAiTb2hcQ
                bK1/sdU45inuTmYqApuUvBD4R++mb7jei/sCWgZsEQKBgQD2PGPh7vE+u0G0m1QO
                1YeNW4H7edz28dDoE+AI/9a53IuoBB43Cxz6ViqlE4zuWX9gfTkNY9xBmGKsuvv6
                gN7D3SHObJ4MLD4LYppqO2VpUlERLQAJn+b2L3t/CqEfFhsD7fdwRiqGZsaIR9cr
                RoRnk3R2nv/M8E1t8efx1pXjlwKBgQDGR9VSW5wzPz9iZk1bNK/fcXUNNkVxdeEn
                uB/3xgN/fBq9Q3Z0IZrgQTQwkDxYLOV+2QfKQYKQXbUAfMTRpSdMFyV5PoRG6tQ0
                Ovcy+BU9CpxtHjLL2L8CGyyOh354KmtUefxDsnfxQssGabKrHmxsLb8DQZXn8PZo
                bpLtlkL4fQKBgQCKWBGyPcJTAXiAFYkbsIKxPAmClcw8/k3mJkyIId2tnSjl5DJp
                sJe+Wq0pBBv5SlVTi+eDC2kTfZ9q9r9d1gvStaopxULjCfRuBx9Eskxe6T3czZCo
                16s3BCR5kypFQfE5uvh7nyCDVLkUlnBgwwTfAKy9fMWxig2myPQNHwglzwKBgFjz
                tu7IrG2NLUlercuB+niadLGlrEe3Y3gnMSg+DCmwKmrIDicRQGLkvZ4fxwKjuZ1L
                jiQdeY58i4wZbU7D8bpAFA6tjjgmd2arIWUbSKPm08BcMNukdCRkvnt+q60LErWG
                ODbCpO52UZCh8Ia2ElwBtdSnIrI4NsMo//9YTtkdAoGAQpVwgginKuOXb91l6GKH
                IVEIYH64YTWOglRy7MQKmRS/11l9hgJ2TW4YnYHWLLFdEflfJIggUJFMhuF8Mj9b
                KJVORy9qtmGqhOtkgHJ216QW4JSBMVBTQIOGyTDTpdFSUGVUQh5YkpPxSyrdKV7Z
                fRQeYYmDTgs/2eveEfgmRyQ=
                -----END PRIVATE KEY-----
                `
                let decryptor = new JSEncrypt()
                decryptor.setPrivateKey(private_key)
                function decryData (data) {
                    return decryptor.decrypt(data)
                }
                if (decryData(username) == md5('admin') && decryData(password) == md5('123456')) {
                    return {
                        'status': 0,
                        'data': {
                            'token':'123456'
                        },
                        'msg': '登陆成功'
                    }
                }
                return {
                    'status': -1,
                    'msg': '用户名或密码错误'
                }
            }
            return {
                'status': -1,
                'msg':'用户名或密码不能为空'
            }
        }
    },
    {
        url: '/api/user/role',  // 获取用户角色权限
        type: 'get',
        response: config => {
            if (checkToken(config)) {
                return {
                    "status": 0,
                    "data": {

                    },
                    "msg": "请求成功"
                }
            } else {
                return {
                    "status": -1,
                    "msg": "用户未鉴权"
                }
            }
        }
    },
    {
        url: '/api/user/add',  // 添加用户
        type: 'post',
        response: config => {
            if (checkToken(config)) {
                const userInfo = config.body
                users.push(userInfo)
                return {
                    "status": 0,
                    "msg": "添加成功"
                }
            } else {
                return {
                    "status": -1,
                    "msg": "用户未鉴权"
                }
            }
        }
    },
    {
        url: '/api/user/menu',  // 获取用户菜单权限
        type: 'get',
        response: config => {
            if (checkToken(config)) {
                return {
                    "status": 0,
                    "data": [
                        {
                            "id": "1",
                            "name": "主机",
                            "children":[{
                                "id": "1-1",
                                "name": "详情",
                                "path": "/host",
                                "icon": ""
                            }]
                        },
                        {
                            "id": "2",
                            "name": "用户",
                            "path": "/user",
                            "icon": "el-icon-user-solid"
                        },
                        {
                            "id": "3",
                            "name": "告警",
                            "path": "/alarm",
                            "icon": ""
                        },
                        {
                            "id": "4",
                            "name": "任务",
                            "path": "/task",
                            "icon": ""
                        },
                        {
                            "id": "5",
                            "name": "角色",
                            "path": "/role",
                            "icon": ""
                        }
                    ],
                    "msg": "请求成功"
                }
            } else {
                return {
                    "status": -1,
                    "msg": "用户未鉴权"
                }
            }
        }
    },
    {
        url: '/api/user/key',  // 获取公钥
        type: 'get',
        response: _ => {
            return {
                "status": 0,
                "data": {
                    //"public_key": "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvGZF08G4PT+yrufV4AOc3fRcgNcQE/g6T8+sx3N86nYx4cLk4TEPxOWrRElMCu//LTTuEXjI5iwSqhJz+tdKRhtR5BpJ2Nbji74mWnx2+MAIxty9mMbsrFHRmCsm1UBPAJi2kD0VBmn/L4SvSwlQKRzSKOGz92SXbycFDAfJeN6dQ9ZMHj4IHhONS5pCt3dJOncMHEaKUq9+MDb1XRsQZ07/Cg/MVPZ+2oEEeyi65rZgKiBP0xXZZcKD/ykw7mlklQITCGY78QxSc5PFOxRr+Kl9CaQ8+mrczqMFlMwwy//EA3u6GhKIuMj8+lT5hg6os3yu+nUnY/3BA9XpiMntswIDAQAB-----END PUBLIC KEY-----"
                    "public_key": `
                    -----BEGIN PUBLIC KEY-----
                    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvrfNL+kIizOIkER8Xi/8
                    qOpM7KBglv3yVxG8R8y/tjvGYpV1Hq5fSNnr6TiVnOuT06aIAZL8opz9TtEAr1fr
                    JEs95RzU62dOHQSqost79uK2vrLzNAledMzpi5E/+Ft6k2QhEOqloxk3bjVja2/j
                    Je97grF37Y3VeBZOeQOpXQzZC98WuKkeMybArKo/6SlzefQtdjPQ3zDGWUR91Z9Q
                    DQXdFI+A+Edbi/3XLijKOZ+r0FSu2tio5Tu01Nvj4eIicaLDg0Q2kwneOIc2ub89
                    9IMtesxWnLBsuCxPkt7UmtNrzlhHLktqiG5JRLE201DwDMYoQmQ4cdLPV3/BIpho
                    uwIDAQAB
                    -----END PUBLIC KEY-----
                    `
                },
                "msg": "请求成功"
            }
        }
    },
    {
        url: '/api/user/modify',
        type: 'post',
        response: _ => {
            return {
                "status": 0,
                "data": "",
                "msg": "请求成功"
            }
        }
    },
    {
        url: '/api/user/info',
        type: 'get',
        response: _ => {
            return {
                "status": 0,
                "data": {
                    "uid": 10086,
                    "name": "admin"
                },
                "msg": "请求成功"
            }
        }
    }
]