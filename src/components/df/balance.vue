<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>我的余额</span>
    </div>
    <div id="conter">
      <div id="content">
        <div id="top">
          <p>当前余额</p>
          <router-link to="/balexplain">
            <div>
              <i class="el-icon-question"></i>
              <span>余额说明</span>
            </div>
          </router-link>
        </div>
        <p>
          <span>{{balance}}</span>元
        </p>
        <el-button id="but" type="info">提现</el-button>
      </div>
    </div>
    <div id="bottom">
      <p>交易明细</p>
      <div id="bot-bot">
        <img src="../img/下载.png" alt srcset>
        <p>暂无明细记录</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "balance",
  methods: {
    back() {
      this.$router.back();
    }
  },
  computed: {
    ...mapState({
      balance: "balance"
    })
  }
};
</script>
<style scoped>
#conter {
  background-color: #3190e8;
  padding: 0.1rem;
  margin-top:0.4rem; 
}
#content {
  padding: 0.1rem;
  background-color: white;
  border-radius: 0.05rem;
}
#content p span {
  font-size: 0.3rem;
}
#top {
  font-size: 0.1rem;
  overflow: hidden;
  margin-bottom: 0.1rem;
}
#top p {
  float: left;
}
#top div {
  float: right;
}
#bottom > p {
  color: #99a4be;
  padding: 0.1rem;
  font-size: 0.14rem;
}
#but {
  width: 100%;
  margin-top: 0.3rem;
}
#bot-bot {
  text-align: center;
}
</style>
