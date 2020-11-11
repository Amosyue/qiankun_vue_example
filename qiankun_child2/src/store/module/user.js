const userInfo = {
  state: {
    domain: '',
    token: localStorage.getItem('token'),
    userName:localStorage.getItem('userName'),
    menuList:localStorage.getItem('menuList'),
    menuIndex: '',
    isLogin: '',
    isfresh: false,
    emialSum: '',
    emailList: [],
    allEmail: {},
    name:'^^^^^^^^^8………………………………………………'
  },
  mutations: {
     // 保存以及清除token
    SET_USERNAME(state, userName) {
      state.userName = userName
      localStorage.setItem('userName',userName)
    },
    SET_MENULIST(state, menuList) {
      state.menuList = menuList
      localStorage.setItem('menuList',menuList)
    },
    IS_FRESH(state,isfresh){
      state.isfresh = true
    },
    SET_MENUINDEX(state, menuIndex) {
      state.menuIndex = menuIndex
    },
    EMAIL_SUM(state, emialSum) {
      state.emialSum = emialSum
    },
    EMAIL_LIST(state, emailList){
      state.emailList = emailList
    },
    ALL_EMAIL(state, allEmail) {
      state.allEmail = allEmail
    },
    // 保存以及清除token
    set_token(state, token) {
      state.token = token
      localStorage.FASTJEE_ACCESS_TOKEN = token
    },
    set_domain(state, domain) {
      state.domain = domain
    },
    login_status(state, islogin) {
      state.islogin = islogin
    },
  },

  actions: {

  }
}


export default userInfo
