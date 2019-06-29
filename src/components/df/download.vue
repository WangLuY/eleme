<template>
  <div>
    <div id="nav">
      <router-link to="/wode">
      <img src="../img/左箭头.png" alt>
      </router-link>
      <span>下载</span>
    </div>
    <div id="bottom">
        <img src="../img/下载.jpg" alt="">
        <h2>下载饿了么APP</h2>
        <el-button id="but" type="success">下载</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "download"
};
</script>
<style scoped>
#bottom{
    text-align: center;
    margin-top: 1rem;
}
#bottom img{
    border-radius: 10px;
}
h2{
    margin-top: 0.2rem;
}
#but{
    width: 90%;
    margin-top: 0.3rem;
}
</style>
