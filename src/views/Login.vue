<template>
  <div class="mz-login">
    <div class="logo">
      <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" />
    </div>
    <div class="login-form">
      <div class="form-group">
        <input placeholder="用户名"
               class="input-control"
               type="text"
               v-model="username" />
      </div>
      <div class="form-group">
        <input placeholder="密码"
               class="input-control"
               type="password"
               v-model="password" />
      </div>
      <button class="submit login-btn"
              :disabled="!password || !username"
              @click="handleLogin()">
        <span>登录</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {

    }
  }
}
</script>

<style lang="scss" scoped>
.mz-login {
  font-size: 16px;
  overflow: hidden;

  .logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;

    img {
      height: 60px;
    }
  }

  .login-form {
    .form-group {
      line-height: 55px;
      margin: 0 25px;
      position: relative;

      .input-control {
        height: 15px;
        line-height: 15px;
        padding: 20px 0;
        width: 100%;
        font-size: 15px;
        color: #191a1b;
        border: 0;
        outline-width: 0;
      }
    }

    .submit {
      width: calc(100% - 50px);
      line-height: 45px;
      font-size: 16px;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background-color: #ff5f16;
      height: 44px;
      color: #fff;
      border: none;

      &[disabled] {
        background-color: #ccc;
      }
    }
  }
}
</style>
