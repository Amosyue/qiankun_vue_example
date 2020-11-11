<template>
  <div id="login">
    <div class="login-header">
      <!-- <img :src="logoUrl" alt width="100px" class="logo" /> -->
    </div>

            <el-main class="login-right">
              <span data-v-187bef1a class="login-title">南京银行统一运维平台</span>
              <el-form class="loginForm" :model="form" ref="form">
                <div class="inputWrap">
                  <div class="login_label clear-float">
                    <i class="iconfont icon-yonghu"></i>
                    <span class="line"></span>
                    <input
                      name="username"
                      maxlength="20"
                      placeholder="请输入用户名"
                      type="text"
                      v-model.trim="form.username"
                      @keyup.enter="submitLogin('form')"
                    />
                  </div>
                </div>

                <div class="inputWrap">
                  <div class="login_label clear-float">
                    <i class="iconfont icon-mima"></i>
                    <span class="line"></span>
                    <input
                      name="password"
                      maxlength="20"
                      placeholder="请输入密码"
                      type="password"
                      v-model.trim="form.password"
                      @keyup.enter="submitLogin('form')"
                    />
                  </div>
                </div>
              </el-form>
              <div class="tc" style="margin-top:60px;">
                <el-button
                  class="button"
                  style="width: 100%; height: 50px;border: none !important;"
                  @click="submitLogin('form')"
                >登陆</el-button>
                <el-button
                  class="button"
                  style="width: 100%; height: 50px;border: none !important;"
                  @click="loginOut('form')"
                >退出</el-button>
              </div>
            </el-main>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
  #login {
    width: 100%;
    height: 100%;
    background: url(../../assets/images/login_bg.png) no-repeat;
    background-size: cover;
    .login-header {
      height: 50px;
      line-height: 50px;
      width: 100%;
      position: relative;
      overflow: hidden;
      background: #24292e;
    }
  }
</style>
<style lang="scss" scoped src="./index.scss"></style>