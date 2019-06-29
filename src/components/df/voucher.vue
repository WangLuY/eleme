<template>
  <div id="voucher">
    <router-link to="/djqshuoming">
    <div id="top">
      <i class="el-icon-question"></i>
      <span>商家代金券说明</span>
    </div>
    </router-link>
    <div id="bottom">
      <img src="../img/下载 (8).png" alt>
      <p>无法使用代金券</p>
      <p>非客户端或客户端版本过低</p>
      <router-link to="/download">
      <el-button id="but" type="success">下载或升级客户端</el-button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "voucher"
};
</script>
<style scoped>
#voucher {
  margin-top: 0.2rem;
  text-align: center;
  overflow: hidden;
}
#top {
  float: right;
  margin-right: 0.2rem;
  font-size: 0.02rem;
}
#voucher p:nth-of-type(1) {
  font-size: 0.16rem;
  color: #666666;
  margin-top: 0.07rem;
}
#voucher p:nth-of-type(2) {
  font-size: 0.04rem;
  margin-top: 0.05rem;
}
#bottom {
  margin-top: 1rem;
}
img {
  width: 2rem;
}
#but {
  margin-top: 0.2rem;
}
</style>
