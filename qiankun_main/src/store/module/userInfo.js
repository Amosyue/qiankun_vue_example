import _storage from '@/utils/localstorage'
const userInfo = {
  state: {
    token: _storage.getItem('token'),
    userName:_storage.getItem('userName'),
    menuList:_storage.getItem('menuList'),
   
  },
  mutations: {
     // 保存以及清除token
    SET_USERNAME(state, userName) {
      state.userName = userName
      _storage.setItem('userName',userName)
    },
    SET_MENULIST(state, menuList) {
      state.menuList = menuList
      _storage.setItem('menuList',menuList)
    },
    // 保存以及清除token
    set_token(state, token) {
      state.token = token
      _storage.FASTJEE_ACCESS_TOKEN = token
    }
  },

  actions: {

  }
}


export default userInfo
