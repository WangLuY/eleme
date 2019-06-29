<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>购买记录</span>
    </div>
    <div id="content">
      <div id="conter">
        <img src="../img/下载.png" alt>
        <p>没有购买记录</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "goumaijilu",
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#content {
    margin-top: 0.4rem;
}
#conter{
    text-align: center;
    margin-top: 2rem;
}
</style>
