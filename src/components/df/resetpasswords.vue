<template>
  <div id="register">
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>重置密码</span>
    </div>
    <div id="conter">
      <input v-model="username" placeholder="账号" type="text">
      <input v-model="old" placeholder="旧密码" type="text">
      <input v-model="newpassword" placeholder="新密码" type="text">
      <input v-model="password"  placeholder="确认新密码" type="text">
      <div id="code">
        <input v-model="codeNumber" placeholder="验证码" type="text">
        <div id="img">
          <img :src="code" alt>
          <div id="but">
            <button @click="getCode()">看不清</button>
            <br>
            <button @click="getCode()">换一张</button>
          </div>
        </div>
      </div>
    </div>
    <button id="deng" @click="login()">登陆</button>
     <!-- 提示框 -->
    <transition enter-active-class="animated bounceIn" leave-active-class="animated zoomOut">
      <div class="tishi" v-if="show">
        <img src="../img/5913bcc165c01.png" alt>
        <p>{{loginMsg}}</p>
        <button @click="show=!show">确认</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "resetpasswords",
  data() {
    return {
      code: "", //存储验证码base64图片
      old:"",
      username: "",
      newpassword:"",
      password: "",
      codeNumber: "", //存储验证码输入框的值
      loginMsg: "",
      show: false
    };
  },
  created() {
    //首先，获取验证码
    this.getCode();
  },
  methods: {
    getCode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        withCredentials: true
      }).then(res => {
        this.code = res.data.code;
      });
    },
    login() {
      const api = "https://elm.cangdu.org/v2/changepassword";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          oldpassWord: this.old,
          newpassword: this.newpassword,
          confirmpassword: this.password,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        if (res.data.message) {
          this.loginMsg = res.data.message; //登陆失败
          this.show = !this.show;
        } else {
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "person",
            query: res.data,
            params: { pID: res.data.id }
          });
        }
      });
    },
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#conter {
  margin-top: 0.5rem;
}
input {
  width: 94%;
  padding: 0 3%;
  height: 0.4rem;
  border-bottom: 1px solid #e4e4e4;
}
#code {
  position: relative;
}
#img {
  position: absolute;
  right: 0%;
  top: 0;
  height: 0.4rem;
}
#img img {
  height: 0.3rem;
  margin-top: 0.05rem;
}
#but {
  float: right;
  margin-right: 5px;
  height: 0.4rem;
}
#but button {
  height: 0.2rem;
  background-color: white;
  outline: none;
  border-color: transparent;
  box-shadow: none;
}
#register > p {
  color: red;
  font-size: 0.12rem;
  padding: 0.05rem;
}
#deng {
  height: 0.4rem;
  width: 94%;
  margin: 3%;
  border-radius: 5px;
  background-color: #4cd964;
  border: transparent;
  color: white;
  font-size: 0.15rem;
  outline: none;
  border-color: transparent;
  box-shadow: none;
}
#czmm {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  color: #3b95e9;
}
</style>
