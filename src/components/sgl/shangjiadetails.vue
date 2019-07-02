<template>
<div>
  <div id="nav">
      <img @click="fanhui()" src="../img/back.png" alt />
      <span>商家详情</span>
      <div></div>
    </div>
    <div class="huodong">
      <p>活动与属性</p>
    </div>
    <div class="juan">
      <p>
        <span>{{Spadd.activities[0].icon_name}}</span>
        <span>{{Spadd.activities[0].description}}</span>
      </p>
      <p>
        <span>{{Spadd.supports[0].icon_name}}</span>
        <span>{{Spadd.supports[0].description}}(APP专享)</span>
      </p>
      <p>
        <span>{{Spadd.supports[1].icon_name}}</span>
        <span>{{Spadd.supports[1].description}}(APP专享)</span>
      </p>
      <p>
        <span>{{Spadd.supports[2].icon_name}}</span>
        <span>{{Spadd.supports[2].description}}(APP专享)</span>
      </p>
    </div>
    <div class="anquan" @click="toAnauan()">
      <span>食品监督安全公示</span>
      <span>企业认证详情></span>
    </div>
    <div class="xhuok">
      <div class="xhuokImg">
        <img src="../../assets/icon_xiaolian-mian.png" alt>
      </div>
      <div class="result">
        <p>
          <span>监督检查结果:</span>
          <span>好</span>
        </p>
        <p>检查日期:</p>
      </div>
    </div>
    <div id="All_bottom">
      <p>商家信息</p>
      <p>{{Spadd.name}}</p>
      <p>地址:{{Spadd.address}}</p>
      <p>营业时间:{{Spadd.opening_hours}}</p>
      <p @click="clickZz">
        <span>营业执照</span>
        <span class="YouA">></span>
      </p>
      <p @click="clickZz">
        <span>餐饮服务许可证</span>
        <span class="YouA">></span>
      </p>
    </div>
    <div class="zhezao" v-if="show" @click="clickZz"></div>
  </div>
</template>
<script>
export default {
     name:"shangjiaDetails",
    data() {
        return {
            Spadd:{},
      show: false
        }
    },
    created(){
        this.getSpadd();
    },
    methods: {
         fanhui(){
            this.$router.push("xiadan");
            // this.$router.back();
        },
        getSpadd(){
            this.Spadd=this.$store.state.QJ;
            console.log(this.Spadd);
        },
         clickZz() {
      this.show = !this.show;
    },
     toAnauan(){
      this.$router.push({
        name: "qiyedetails"
      });
    }
    }
};
</script>
<style scoped>
.huodong {
  margin-top: 0.45rem;
  width: 3.65rem;
  background-color: #fff;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.18rem;
  padding-left: 0.1rem;
  border-bottom: 1px solid lightgray;
}
.juan {
  width: 3.65rem;
  padding-left: 0.1rem;
  background-color: #fff;
  color: #666;
  font-size: 0.15rem;
  margin-bottom: 0.1rem;
}
.juan > p {
  padding: 0.1rem 0;
}
.anquan {
  background-color: #fff;
  height: 0.5rem;
  border-bottom: 1px solid lightgray;
}
.anquan > span {
  height: 100%;
  line-height: 0.5rem;
}
.anquan > span:nth-child(2) {
  float: right;
  color: #bbb;
}
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
#All_bottom {
  background-color: #fff;
  /* height: 2rem; */
  width: 3.65rem;
  padding-left: 0.1rem;
}
#All_bottom > p {
  height: 0.5rem;
  border-bottom: 1px solid #f5f5f5;
  line-height: 0.5rem;
  font-size: 0.1rem;
  color: #666;
}
#All_bottom > p:nth-child(1) {
  font-size: 0.18rem;
  color: #333;
}
.YouA {
  float: right;
  font-size: 0.3rem;
}
.zhezao {
  width: 3.75rem;
  height: 100%;
  background-color: gray;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  opacity: 0.4;
}
</style>
