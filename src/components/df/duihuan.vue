<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>兑换红包</span>
    </div>
    <div id="content">
      <el-input v-model="input" placeholder="请输入兑换码"></el-input>
      <div>
        <el-input class="inp" v-model="codeNumber" placeholder="验证码"></el-input>
        <div id="img">
          <img :src="code" alt>
          <div id="but">
            <button @click="getCode()">看不清</button>
            <br>
            <button id="huan" @click="getCode()">换一张</button>
          </div>
        </div>
      </div>
      <el-button @click="login()" class="button" type="info">兑换</el-button>
    </div>
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
  name: "duihuan",
  data() {
    return {
      code: "", //存储验证码base64图片
      codeNumber: "" ,//存储验证码输入框的值
      input:"",
       loginMsg: "",
       one:"",
       show:false
    };
  },
  created() {
    //首先，获取验证码
    this.getCode();
    this.one = this.$store.state.userMsg.user_id;
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
      const api = "https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          user_id: this.one,
          exchange_code: this.input,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.message) {
          this.loginMsg = res.data.message; //登陆失败
          this.show = !this.show;
        } else {
          console.log(res.data);
          // this.$store.commit("getUsers", res.data);
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "redpacket",
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
#content {
  padding: 0.1rem;
  margin-top: 0.4rem;
}
#content > div {
  margin-top: 0.15rem;
}
.inp {
  float: left;
  width: 60%;
}
#img {
  height: 0.4rem;
  overflow: hidden;
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
#huan {
  color: greenyellowa;
}
.button {
  width: 100%;
  margin-top: 0.2rem;
  color: white;
}
</style>
