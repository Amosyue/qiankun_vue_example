  import Vue from 'vue'
  // import {
  //   login,
  //   getInfo,
  //   logout,
  //   updatePassword,
  //   userInfo
  // } from '../../api/login';
  // import {
  //   getToken,
  //   getRefreshToken,
  //   setToken,
  //   removeToken
  // } from '../../utils/token';
  // getToken,removeToken
  // import {
  //   setToken,
  //   getToken
  // } from '../../utils/newtoken'
  // import loginCnImg from '../../assets/img/yuan.png'
  // import loginEnImg from '../../assets/img/login_en.jpg'
  export default {
    name: 'Environment',
    data() {
      return {
        beforeLength: '',
        loading: false,
        psdStatus: false,
        loginImage: '',
        form: {
          username: 'admin',
          password: 'caicloud',
        },
        access_token: '',
        refresh_token: '',
        dialogVisible: false,
        loginMessage: '',
        loginLoading: false,
        showRegister: false
      }
    },
    mounted() {
  
    },
    methods: {
      // 登录
      submitLogin(formName, type) {
        this.$refs[formName].validate(valid => {
          const { username, password} = this.form
          if (valid) {
            this.$service({
                url: '/qz-gateway/qz-auth/oauth/token',
                method: 'post',
                headers: {
                    'Authorization': 'Basic cXo6c2hxejg4NjYu',
                },
                params: { username, password}
            }).then(res=>{
              if(res.data.status){
                this.$message({
                  message: '登陆成功',
                  type: 'success'
                });
                if(res.data.body){
                  localStorage.setItem('token',res.data.body)
                }
                this.$store.commit('set_token')
                this.getUserInfo()
              }else{
                this.$message({
                  message: res.data.message,
                  type: 'error'
                });
              }
            })
          } 
        })
      },
      getUserInfo(){
        this.$service({
          url: '/qz-usercenter/user/userInfo',
          method: 'post',
        }).then(res=>{
          if(res.status){
            this.$store.commit('SET_USERNAME',res.data.user.username)
            this.getMenus()
          }
        })
      },
      getMenus(){
        this.$service({
          url: `/qz-usercenter/resource/getMenu?topid=2`,
          method: 'post',
         }).then(res=>{
           if(res.status){
            this.$store.commit('SET_MENULIST',JSON.stringify(res.data.body))
            this.$router.push('/home')
           }else{

           }
         })
      },
      loginOut(){
        this.$service({
          url: '/qz-gateway/qz-auth/removeToken',
          method: 'post',
         }).then(res=>{
           debugger
         })
        
      }
    }
  }
