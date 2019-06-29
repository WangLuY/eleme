<template>
  <div id="register">
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>密码登录</span>
    </div>
    <div id="conter">
      <input v-model="username" placeholder="账号" type="text">
      <div v-if="!value" class="pass">
        <input v-model="password" placeholder="密码" type="text">
        <p @click="value=!value" class="el-icon-open"></p>
      </div>
      <div v-else class="pass">
        <input v-model="password" placeholder="密码" type="password">
        <p @click="value=!value" class="el-icon-turn-off"></p>
      </div>
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
    <p>温馨提示：未注册过的账号，登录时将自动注册</p>
    <p>注册过的用户可凭账号密码登录</p>
   <div id="deng">
      <button  @click="login()">登录</button>
   </div>
    <router-link id="czmm" to="/resetpasswords">重置密码？</router-link>
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
import { mapState } from "vuex";
export default {
  name: "register",
  data() {
    return {
      code: "", //存储验证码base64图片
      username: "",
      password: "",
      codeNumber: "", //存储验证码输入框的值
      loginMsg: "",
      show: false,
      value:true
    };
  },
  created() {
    //首先，获取验证码
    this.getCode();
  },
  computed: {
    //  ...mapState({
    //  })
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
        console.log(this.logins);
      });
    },
    login() {
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        if (res.data.message) {
          this.loginMsg = res.data.message; //登陆失败
          this.show = !this.show;
        } else {
          console.log(res.data);
          this.$store.commit("getUsers", res.data);
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "wode",
            query: res.data
            // params: { pID: this.username}
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
  border: white;
  outline: none;
  border-color: transparent;
  box-shadow: none;
}
#register > p {
  color: red;
  font-size: 0.12rem;
  padding: 0.05rem;
}
#deng{
  text-align: center;
}
#deng button{
  height: 0.4rem;
  width: 94%;
  /* margin: 3%; */
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
.pass{
position: relative;
}
.pass>p{
  position: absolute;
  right: 0.15rem;
  top: 0.1rem;
  font-size: 0.2rem;
}
.el-icon-open{
  color: blue;
}
.el-icon-turn-off{
  color: #4cd964;
}
</style>
