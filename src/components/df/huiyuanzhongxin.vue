<template>
  <div id="huiyuan">
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>会员中心</span>
    </div>
    <p>
      为用户
      <strong>{{$store.state.userMsg.username}}</strong>购买会员
    </p>
    <div id="content">
      <div class="cont-top">
        <p>会员特权</p>
        <router-link to="/huiyuansm">
          <div>
            <span>会员说明</span>
            <img src="../img/右箭头.png" alt>
          </div>
        </router-link>
      </div>
      <div class="cont-bot">
        <img src="../img/5.jpg" alt>
        <div>
          <p class="title">减免配送费</p>
          <p class="conter">每月减免30单，每日可减免3单，每单最高减4元</p>
          <p class="conter">蜂鸟专送专享</p>
        </div>
      </div>
      <div class="cont-bot">
        <img src="../img/4.jpg" alt>
        <div>
          <p class="title">减免配送费</p>
          <p class="conter">每月减免30单，每日可减免3单，每单最高减4元</p>
          <p class="conter">蜂鸟专送专享</p>
        </div>
      </div>
    </div>
    <div id="bottom">
      <p>开通会员</p>
      <div id="bottom-bot">
        <p>
          一个月
          <span>￥20</span>
        </p>
        <router-link to="/goumaivip">
        <el-button class="but" plain>购买</el-button>
        </router-link>
      </div>
    </div>
    <div class="cont-top">
      <p>兑换会员</p>
      <router-link to="/duihuanvip">
      <div>
        <span>使用卡号卡密</span>
        <img src="../img/右箭头.png" alt>
      </div>
      </router-link>
    </div>
    <div class="cont-top">
      <p>购买记录</p>
      <router-link to="/goumaijilu">
      <div>
        <span>开发票</span>
        <img src="../img/右箭头.png" alt>
      </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "huiyuanzhongxin",
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#huiyuan > p {
  margin-top: 0.4rem;
  padding: 0.1rem;
  color: #999999;
}
#content {
  background-color: white;
}
.cont-top {
  height: 0.2rem;
  line-height: 0.2rem;
  overflow: hidden;
  padding: 0.1rem;
  background-color: #fff;
  margin-top: 0.1rem;
}
.cont-top p {
  float: left;
  font-size: 0.15rem;
}
.cont-top div {
  float: right;
}
.cont-top img {
  width: 0.1rem;
  margin-left: 0.05rem;
}
.cont-top span {
  color: #999999;
}
.cont-bot {
  overflow: hidden;
  padding: 0.1rem;
  border-top: 1px solid #e3e3e3;
}
.cont-bot img {
  float: left;
  width: 0.5rem;
}
.cont-bot div {
  float: left;
  margin-left: 0.1rem;
}
.title {
  font-size: 0.15rem;
  margin-top: 0.05rem;
}
.conter {
  font-size: 0.1rem;
  margin-top: 0.03rem;
  color: #999999;
}
#bottom {
  background-color: #fff;
  margin-top: 0.15rem;
}
#bottom > p {
  padding: 0.2rem;
  border-bottom: 1px solid #e4e4e4;
}
#bottom-bot {
  overflow: hidden;
  padding: 0.2rem;
  line-height: 0.2rem;
}
#bottom-bot p {
  float: left;
}
#bottom-bot span {
  color: #ff6600;
}
.but {
  float: right;
  height: 0.2rem;
  line-height: 0.06rem;
  color: #ff6600;
  border: 1px solid #ff6600;
}
</style>
