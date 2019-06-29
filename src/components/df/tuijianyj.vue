<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>推荐有奖</span>
    </div>
    <img id="imgs" src="../img/activity.png" alt>
    <div id="content">
      <div @click="show=!show">
        <img src="../img/weixin.png" alt>
        <p>邀请微信好友</p>
      </div>
      <div @click="show=!show">
        <img src="../img/qq.png" alt>
        <p>邀请QQ好友</p>
      </div>
      <div @click="show=!show">
        <img src="../img/mian.png" alt>
        <p>面对面邀请</p>
      </div>
    </div>
    <div id="bottom">
      <div id="bot-top">
        <div>
          <p>累计收益</p>
          <p>
            <span>0</span>元
          </p>
        </div>
        <div>
          <p>成功邀请</p>
          <p>
            <span>0</span>人
          </p>
        </div>
      </div>
      <div id="bot-botoom">
        <p>-收益明细-</p>
        <div>
          <img src="../img/下载 (3).png" alt>
          <p>还不赶紧邀请好友</p>
        </div>
      </div>
      <!-- 提示框 -->
      <transition enter-active-class="animated bounceIn" leave-active-class="animated zoomOut">
        <div class="tishi" v-if="show">
          <img src="../img/5913bcc165c01.png" alt>
          <p>邀请失败</p>
          <button @click="show=!show">确认</button>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "tuijianyj",
  data() {
    return {
      show: false
    };
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#imgs {
  margin-top: 0.4rem;
  width: 100%;
}
#content {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.15rem 0;
}
#content img {
  width: 0.6rem;
}
#content p {
  font-size: 0.04rem;
}
#content div {
  text-align: center;
}
#bot-top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.15rem 0;
}
#bot-top div {
  width: 50%;
  text-align: center;
}
#bot-top div:nth-of-type(1) {
  border-right: 1px solid #999999;
}
#bot-top span {
  color: red;
  font-size: 0.2rem;
}
#bot-botoom {
  text-align: center;
}
#bot-botoom img {
  width: 0.3rem;
}
#bot-botoom p {
  padding: 0.1rem;
  font-size: 0.13rem;
  color: #999999;
}
</style>
