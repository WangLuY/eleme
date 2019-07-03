<template>
  <div>
    <div id="nav">
      <router-link to="/add">
        <img src="../img/back.png" alt>
      </router-link>
      <span>新增地址</span>
      <div></div>
    </div>
    <div id="content">
      <el-input class="inp" v-model="name" placeholder="请填入你的姓名"></el-input>
      <router-link to="/sousuo">
        <el-input class="inp" v-model="address" placeholder="小区/写字楼/学校等"></el-input>
      </router-link>
      <el-input class="inp" v-model="detail" placeholder="请填写详细送餐地址"></el-input>
      <el-input class="inp" @input="changeInt(phone)" v-model="phone" placeholder="请填写能够联系到您的手机号"></el-input>
      <p v-if="value">您输入的手机格式错误</p>
      <el-input
        class="inp"
        @input="changeInt1(phone_bk)"
        v-model="phone_bk"
        placeholder="备用联系电话(选填)"
      ></el-input>
      <p v-if="value1">您输入的手机格式错误</p>
    </div>
    <el-button @click="address1()" class="but" type="primary">新增地址</el-button>
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
  name: "editAddress",
  data() {
    return {
      name: "",
      address: "",
      detail: "",
      phone: "",
      phone_bk: "",
      newgeohash: "",
      user: "",
      loginMsg: "",
      tag: "zhangyunlei",
      sex: 1,
      poi_type: 0,
      tag_type: 3,
      show: false,
      value: false,
      value1: false
    };
  },
  created() {
    this.address = this.$route.query.name;
    this.newgeohash = this.$route.query.geohash;
    this.user = this.$store.state.userMsg.user_id;
    // console.log($route.query.geohash);
    //  this.address();
  },
  methods: {
    changeInt(msg) {
      // 判断是否为正整数
      console.log(msg);
      var reg = /^1[345789]\d{9}$/;
      console.log(reg.test(msg));
      if (reg.test(msg) == false) {
        this.value = true;
      } else {
        this.value = false;
      }
    },
    changeInt1(msg) {
      // 判断是否为正整数
      console.log(msg);
      var reg = /^1[345789]\d{9}$/;
      console.log(reg.test(msg));
      if (reg.test(msg) == false) {
        this.value1 = true;
      } else {
        this.value1 = false;
      }
    },
    address1() {
      const api = "https://elm.cangdu.org/v1/users/" + this.user + "/addresses";
      this.$http({
        url: api,
        method: "post",
        data: {
          //post的请求参数
          user_id: this.user,
          address: this.address,
          address_detail: this.detail,
          geohash: this.newgeohash,
          name: this.name,
          phone: this.phone,
          phone_bk: this.phone_bk,
          tag: this.tag,
          sex: this.sex,
          poi_type: this.poi_type,
          tag_type: this.tag_type
        }
      }).then(res => {
        console.log(res);
        if (res.data.message) {
          this.loginMsg = res.data.message; //登陆失败
          this.show = !this.show;
        } else {
          console.log(res.data);
          // this.$store.commit("getUsers", res.data);
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "add"
          });
        }
      });
    }
  }
};
</script>
<style scoped>
#content {
  margin-top: 0.45rem;
  background-color: #fff;
  padding-bottom: 0.1rem;
}
#content p {
  font-size: 0.12rem;
  color: red;
  margin-left: 3%;
  margin-top: 0.1rem;
}
.inp {
  width: 94%;
  margin-left: 3%;
  margin-top: 0.1rem;
  background-color: gainsboro;
}
.but {
  width: 94%;
  margin-left: 2%;
  margin-top: 0.2rem;
  background-color: #4cd964;
}
</style>
