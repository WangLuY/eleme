<template>
  <div>
    <div id="nav">
      <img @click="fanhui()" src="../img/back.png" alt />
      <span>食品监督安全公示</span>
      <div></div>
    </div>
    <div id="resz">
      <div class="xhuok">
        <div class="xhuokImg">
          <img src="../../assets/icon_xiaolian-mian.png" alt />
        </div>
        <div class="result">
          <p>
            <span>监督检查结果:</span>
            <span>好</span>
          </p>
          <p>检查日期:</p>
        </div>
      </div>
    </div>
    <div id="gongshang">
      <p>工商登记信息</p>
      <p>企业名称</p>
      <p>注册资本</p>
      <p>注册地址</p>
      <p>属地监管所</p>
      <p>法定代表人</p>
      <p>经营范围</p>
    </div>
    <div id="canyin">
      <p>餐饮许可证</p>
      <p>营业范围</p>
      <p>许可证有效期</p>
      <p>许可证号</p>
      <p>发证时间</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "qiyedetails",
  methods: {
    fanhui() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#resz {
  margin-bottom: 0.1rem;
  width: 3.75rem;
  margin-top: 0.45rem;
  height: 1.3rem;
  background-color: #fff;
}
#gongshi {
  padding: 0.1rem 0;
  font-size: 0.2rem;
  border-bottom: 1px solid lightgray;
}
#gongshang {
  background-color: #fff;
  width: 3.75rem;
  margin-bottom: 0.1rem;
  font-size: 0.15rem;
}
#gongshang > p:nth-child(1) {
  height: 0.3rem;
  border-bottom: 1px solid lightgray;
  line-height: 0.3rem;
  font-size: 0.2rem;
}
#gongshang > p {
  padding: 0.1rem 0;
}
#canyin {
  background-color: #fff;
  font-size: 0.16rem;
  width: 3.75rem;
}
#canyin > p:nth-child(1) {
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.2rem;
}
#canyin > p {
  padding: 0.1rem 0;
}
/* 图片部分 */
.xhuok {
  width: 3.75rem;
  height: 1rem;
  background-color: #fff;
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.result > p {
  height: 0.1rem;
  padding: 0.15rem 0;
}
.xhuokImg > img {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.1rem;
}
.xhuok > div {
  float: left;
}
</style>
