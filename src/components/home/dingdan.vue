<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>订单</span>
    </div>
    <div id="menu">
      <div>
        <img @click="login3()" src="../img/SSS.png" alt>
        <p>外卖</p>
      </div>
      <div>
        <img @click="login2()" src="../img/zhinanzhen.png" alt>
        <p>搜索</p>
      </div>
      <div>
        <img src="../img/dingdan2.png" alt>
        <p>订单</p>
      </div>
      <div>
        <img @click="login1()" src="../img/touxiang2.png" alt>
        <p>我的</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dingdan",
  methods: {
      back(){
        this.$router.back();
      },
    login1() {
      this.$router.push({
        name: "wode"
      });
    },
    login2() {
      this.$router.push({
        name: "ss"
      });
    },
    login3() {
      this.$router.push({
        name: "waimai"
      });
    }
  }
};
</script>
<style scoped>
</style>
