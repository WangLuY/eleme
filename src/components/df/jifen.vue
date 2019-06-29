<template>
    <div>
        <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>我的积分</span>
    </div>
    <div id="conter">
      <div id="content">
        <div id="top">
          <p>当前积分</p>
          <router-link to="/jfwenti">
            <div>
              <i class="el-icon-question"></i>
              <span>积分说明</span>
            </div>
          </router-link>
        </div>
        <p>
          <span>{{integral}}</span>分
        </p>
        <el-button id="but" type="info">积分兑换商品</el-button>
      </div>
    </div>
    <div id="bottom">
      <p>最近30天积分纪录</p>
      <div id="bot-bot">
        <img src="../img/下载.png" alt srcset>
        <p id="p1">最近30天无积分纪录</p>
        <p id="p2">快去下单赚取大量积分吧</p>
      </div>
    </div>
     </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: "jifen",
  methods: {
    back() {
      this.$router.back();
    }
  },
  computed:{
      ...mapState({
          integral:"integral"
      })
  }
}
</script>
<style scoped>
#conter {
  background-color: #3190e8;
  padding: 0.1rem;
  margin-top: 0.4rem;
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
#p1{
    margin-top: 0.1rem;
}
#p2{
    margin-top: 0.1rem;
    color: #99a4be;
    font-size: 0.02rem;
}
</style>
