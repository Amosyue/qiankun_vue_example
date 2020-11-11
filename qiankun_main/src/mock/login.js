var Mock = require('mockjs')
const Random = Mock.Random;
export const login = Mock.mock('user/login', 'post', (req) => {
  const { password, username } = JSON.parse(req.body)
  if (username === 'admin' && password === 'admin') {
    return {
      code: 200,
      status:true,
      body: {
        uid:Random.id(),
        type: 1,
        username:username,
        expire_in: "63666",
        token: Random.guid(),
        logintime: Random.now()
      }
    }
  } else {
    return {
      code: 500,
      status:false,
      body: {
        message:'接口500'
      }
    }
  }
})

export const menuList = Mock.mock('user/menuList', 'post', (req) => {
  return {
    code: 200,
    status:true,
    body: [{
          "id": '1',
          "path": "/lanmu1",
          "menuName": "栏目1",
          "type": "11"
        },
        {
          "id": '2',
          "path": "/lanmu2",
          "menuName": "栏目2",
          "type": "22"
        }
      ]
  }
})
