<template>
  <div class="root">
    <div class="login-from">
      <img src="../../assets/common/logo.png" alt="" class="login">
      <el-form ref="loginForm" class="elem-from" :model="loginForm" :rules="rules">
        <el-form-item prop="loginName">
          <el-input v-model="loginForm.loginName" type="text" prefix-icon="el-icon-mobile-phone" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" :type="passwordType" prefix-icon="el-icon-lock" placeholder="请输入密码">
            <template #suffix>
              <i @click="changEye">
                <svg-icon :icon-class="showEye?'eye-open':'eye'" />
              </i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" type="text" prefix-icon="el-icon-setting" placeholder="请输入验证码">
            <template #suffix>
              <img :src="$store.state.user.clientToken" alt="" @click="getAuthCode">
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordType: 'password',
      showEye: false,
      loading: false,
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: ''
      },
      rules: {
        loginName: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }
        ]
      }
    }
  },
  async created() {
    // console.log(this)
    this.$store.dispatch('user/loginAction', Math.random())
  },
  methods: {
    async login() {
      try {
        await this.$refs.loginForm.validate()
        this.loading = true
        await this.$store.dispatch('user/login', {
          loginName: this.loginForm.loginName,
          password: this.loginForm.password,
          code: this.loginForm.code,
          clientToken: this.$store.state.user.AuthCodeToken,
          loginType: 0
        })
        this.$router.push('/home')
      } finally {
        this.loading = false
      }
    },
    getAuthCode() {
      this.$store.dispatch('user/loginAction', Math.random())
    },
    changEye() {
      this.showEye = !this.showEye
      this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password'
    }
  }

}

</script>

<style scoped lang='scss'>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/common/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  .login-from {
    position: relative;
    margin: 100px auto;
    width: 518px;
    height: 388px;
    border-radius: 10px;
    background-color: #fff;
    .login {
      position: absolute;
      left: 215px;
      top: -48px;
      width: 96px;
      height: 96px;
    }
    .elem-from {
      margin: 70px auto 0;
      width: 448px;
      height: 280px;
      ::v-deep .el-input__inner {
        height: 52px;
        line-height: 52px;
        border-color: #dcdfe6;
      }
    }
    .el-button--primary {
      width: 100%;
      height: 52px;
    }
    ::v-deep .el-input__suffix-inner {
      margin-right: -5px;
     .svg-icon {
        margin: 18px 15px 0 0;
        display: inline-block;
      }
    }
  }
}
</style>
