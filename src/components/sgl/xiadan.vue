<template>
  <div v-if="show" class="xiadan">
    <!-- 下单商家信息页 -->
    <div class="xiadanTop">
      <div class="xiadanTop0">
        <img
          :src="'https://elm.cangdu.org/img/'+Spadd.image_path"
          style="width:3.75rem; height: 3.3rem;"
        />
      </div>
      <img class="xiadanTop1" @click="fanhui" src="../../assets/back.png" alt />
      <img class="xiadanTop2" :src="'https://elm.cangdu.org/img/'+Spadd.image_path" alt />
      <span class="xiadanTop3">{{Spadd.name}}</span>
      <br />
      <span class="xiadanTop4">商家配送/分钟送达/{{Spadd.piecewise_agent_fee.tips}}</span>
      <br />
      <span class="xiadanTop5">公告:{{data.promotion_info}}</span>
      <br />
      <div v-if="Spadd.activities">
        <span class="xiadanTop6">{{Spadd.activities[0].icon_name}}</span>
        <span class="xiadanTop7">{{Spadd.activities[0].description}}(App专享)</span>
        <span class="xiadanTop8">{{Spadd.activities.length}}个活动</span>
        <img class="xiadanTop10" src="../../assets/jright.png" />
      </div>
      

      <!-- 如果用下边（函数注释部分）局部传参方法，则用这两种拼接方式跳转 -->

      <router-link to="shangjiaDetails">
        <img class="xiadanTop9" src="../../assets/jright.png" />
      </router-link>
    </div>
    <div class="xiadanBtn">
      <span
        :style="[{'border-bottom':border1},{'color':color1}]"
        class="xiadanBtn1"
        @click="xian1()"
      >商品</span>
      <span
        :style="[{'border-bottom':border2},{'color':color2}]"
        class="xiadanBtn1"
        @click="xian2()"
      >评价</span>
    </div>
    <router-view class="router"></router-view>
  </div>
</template>
<script>
export default {
  name: "xiadan",
  data() {
    return {
      getId: "",
      data: {},
      show: false,
      border1: "3px solid blue",
      border2: "none",
      color1: "blue",
      color2: ""
    };
  },
  created() {
    this.getLastid();
  },
  computed: {
    Spadd() {
      return this.$store.state.QJ;
    }
  },
    methods: {
      getSpadd() {
        this.Spadd = this.$store.state.QJ;
        console.log(this.Spadd);
      },
      fanhui() {
        this.$router.push("family");
      },
      getLastid() {
        this.getId = this.$route.query.shopId;
        console.log(this.getId);
        this.getHttp();
      },
      getHttp() {
        const api = "https://elm.cangdu.org/shopping/restaurant/" + this.getId;
        this.$http({
          url: api,
          method: "get"
        }).then(res => {
          this.data = res.data;
          console.log(this.data);
          this.show = true;
        });
      },
      xian1() {
        this.border1 = "3px solid blue";
        this.border2 = "none";
        this.color1 = "blue";
        this.color2 = "";
        this.$router.push({
          name: "test"
        });
      },
      xian2() {
        this.border1 = "";
        this.border2 = "3px solid blue";
        this.color1 = "";
        this.color2 = "blue";
        this.$router.push({
          name: "xiadanevaluation"
        });
      }
    }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.router {
  position: fixed;
  left: 0;
  top: 1.7rem;
  display: inline-block;
  z-index: 11;
  height: 2px;
}
.xiadan {
  text-align: left;
  background-color: #f5f5f5;
}
.xiadanTop {
  width: 100%;
  height: 1.2rem;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}
.xiadanTop0 {
  filter: blur(16px);
  -webkit-background-color: rgba(0, 0, 0, 0.9);
  margin: 0
}
.xiadanTop1 {
  width: 0.12rem;
  position: absolute;
  top: 0.03rem;
  left: 0.079rem;
  z-index: 10;
}
.xiadanTop2 {
  width: 0.7rem;
  border-radius: 5px;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.xiadanTop3 {
  position: absolute;
  left: 0.9rem;
  top: 0.1rem;
  color: #fff;
  font-size: 0.2rem;
}
.xiadanTop4 {
  position: absolute;
  left: 0.9rem;
  top: 0.44rem;
  color: #fff;
  font-size: 0.05rem;
}
.xiadanTop5 {
  position: absolute;
  left: 0.9rem;
  top: 0.66rem;
  color: #fff;
  font-size: 0.05rem;
}
.xiadanTop6 {
  width: 0.14rem;
  height: 0.14rem;
  position: absolute;
  left: 0.1rem;
  top: 0.96rem;
  color: #fff;
  font-size: 0.05rem;
  background-color: red;
}
.xiadanTop7 {
  position: absolute;
  left: 0.3rem;
  top: 0.96rem;
  color: #fff;
  font-size: 0.05rem;
}
.xiadanTop8 {
  position: absolute;
  left: 3rem;
  top: 0.96rem;
  color: #fff;
  font-size: 0.05rem;
}
.xiadanTop9 {
  width: 0.1rem;
  position: absolute;
  left: 3.46rem;
  top: 0.5rem;
  color: #fff;
  font-size: 0.05rem;
}
.xiadanTop10 {
  width: 0.08rem;
  position: absolute;
  left: 3.46rem;
  top: 0.96rem;
  color: #fff;
  font-size: 0.05rem;
}
.xiadanBtn {
  width: 3.75rem;
  height: 0.6rem;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 1.2rem;
  display: flex;
  justify-content: space-around;
}
.xiadanBtn1 {
  line-height: 0.6rem;
  margin-bottom: 0.12rem;
}
</style>
