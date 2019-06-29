<template>
  <div>
    <div id="nav-top">
      <div id="nav">
        <router-link to="/citylist">
          <img src="../img/左箭头.png" alt>
        </router-link>
        <span>我的</span>
      </div>
      <div id="nav-bottom">
        <div id="img">
          <img :src="img1||'https://elm.cangdu.org/img/'+res.data.avatar" alt>
        </div>
        <div @click="getters()" id="username">
          <div id="user">{{user||zhuze}}</div>
          <div id="phone">
            <img src="../img/1.png" alt>
            <p>暂无绑定手机号</p>
          </div>
        </div>
        <router-link to="/information">
          <img id="you" src="../img/右箭头.png" alt>
        </router-link>
      </div>
    </div>
    <div id="conter">
      <router-link to="/balance">
        <div class="wo">
          <p>
            <span class="num1">{{balance}}</span>元
          </p>
          <p class="content">我的余额</p>
        </div>
      </router-link>
      <router-link to="/discounts">
        <div class="wo" id="discounts">
          <p>
            <span class="num2">{{$store.state.sum}}</span>个
          </p>
          <p class="content">我的优惠</p>
        </div>
      </router-link>
      <router-link to="/jifen">
        <div class="wo">
          <p>
            <span class="num3">{{integral}}</span>分
          </p>
          <p class="content">我的积分</p>
        </div>
      </router-link>
    </div>
    <div id="bot-top">
      <div class="menu">
        <div class="el-icon-tickets"></div>
        <span>我的订单</span>
        <router-link to="/dingdan">
          <img class="yjt" src="../img/iconfontjiantou2.png" alt>
        </router-link>
      </div>
      <router-link to="/jifensc">
        <div class="menu">
          <div class="el-icon-s-goods"></div>
          <span>积分商城</span>
          <img class="yjt" src="../img/iconfontjiantou2.png" alt>
        </div>
      </router-link>
      <router-link to="/huiyuanzhongxin">
        <div class="menu">
          <img class="logo" src="../img/huangguan.png" alt>
          <span>饿了么会员卡</span>
          <img class="yjt" src="../img/iconfontjiantou2.png" alt>
        </div>
      </router-link>
    </div>
    <div id="bot-bottom">
      <div class="menu">
        <div class="divs"></div>
        <span>服务中心</span>
        <router-link to="/fuwuzhongxin">
          <img class="yjt" src="../img/iconfontjiantou2.png" alt>
        </router-link>
      </div>
      <router-link to="/download">
        <div class="menu">
          <div class="el-icon-eleme"></div>
          <span>下载饿了么App</span>
          <img class="yjt" src="../img/iconfontjiantou2.png" alt>
        </div>
      </router-link>
    </div>
    <div id="menu">
      <div>
        <img @click="login1()" src="../img/SSS.png" alt>
        <p>外卖</p>
      </div>
      <div>
        <img @click="login2()" src="../img/zhinanzhen.png" alt>
        <p>搜索</p>
      </div>
      <div>
        <img @click="login3()" src="../img/dingdan1.png" alt>
        <p>订单</p>
      </div>
      <div>
        <img src="../img/touxiang1.png" alt>
        <p>我的</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "wode",
  data() {
    return {
      user: "",
      zhuze: "登录|注册",
      img1: ""
    };
  },
  created() {
    (this.user = this.$store.state.userMsg.username);
    (this.img1 = this.$store.state.imagavater);
    this.getImg();
  },
  methods: {
    getImg(){
      const api = "https://elm.cangdu.org/v1/user/"+this.$store.state.userMsg.user_id;
      this.$http({
        url: api,
        method: "get",
      }).then(res => {
        this.img1="https://elm.cangdu.org/img/"+res.data.avatar;
;
      });
    },
    back() {
      this.$router.back();
    },
    login1() {
      this.$router.push({
        name: "waimai"
      });
    },
    login2() {
      this.$router.push({
        name: "ss"
      });
    },
    login3() {
      this.$router.push({
        name: "dingdan"
      });
    },
    getters() {
      if (this.user) {
        //  console.log("a");
        this.$router.push({
          name: "information"

          // query:{user:this.nowusername}
        });
      } else {
        this.$router.push({
          name: "register"
        });
      }
    }
  },
  computed: {
    ...mapState({
      balance: "balance",
      discounts: "discounts",
      integral: "integral"
    })
  }
};
</script>
<style scoped>
#nav-bottom {
  background-color: #3190e8;
  padding: 0.2rem;
  overflow: hidden;
  margin-top: 0.01rem;
}
#img {
  margin-top: 0.4rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: white;
  float: left;
  overflow: hidden;
}
#img img {
  width: 0.5rem;
  height: 0.5rem;
}
#username {
  float: left;
  margin-top: 0.45rem;
  margin-left: 0.1rem;
  color: white;
}
#user {
  font-size: 0.17rem;
  margin-bottom: 0.05rem;
}
#phone {
  height: 0.15rem;
  line-height: 0.15rem;
}
#phone img {
  height: 0.01rem;
}
#phone p {
  font-size: 0.01rem;
  line-height: 0.15rem;
  float: right;
}
#you {
  width: 0.1rem;
  float: right;
  padding: 0.12rem;
  margin-top: 0.45rem;
}
#conter {
  width: 100%;
  overflow: hidden;
  background-color: white;
}
.wo {
  width: 33%;
  float: left;
  text-align: center;
  padding: 0.1rem 0;
}
#discounts {
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}
.num1,
.num2,
.num3 {
  font-size: 0.3rem;
  margin-bottom: 0.1rem;
}
.num1 {
  color: orange;
}
.num2 {
  color: red;
}
.num3 {
  color: green;
}
.content {
  font-size: 0.08rem;
  margin: 0.1rem 0;
}
#bot-top {
  background-color: white;
  margin-top: 0.15rem;
}
.menu {
  height: 0.2rem;
  padding: 0.1rem;
}
.logo {
  height: 0.2rem;
  float: left;
}
.menu div {
  float: left;
}
.menu span {
  font-size: 0.13rem;
  line-height: 0.2rem;
  float: left;
  margin-left: 0.1rem;
}
.yjt {
  height: 0.15rem;
  float: right;
}
#bot-bottom {
  background-color: white;
  margin-top: 0.15rem;
}
.el-icon-s-goods {
  color: red;
}
.el-icon-eleme {
  background-color: blue;
  color: white;
}
.divs {
  width: 0.2rem;
  height: 0.2rem;
  background-color: blue;
}
#phone {
  height: 0.15rem;
}
#phone img {
  height: 0.15rem;
}
</style>
