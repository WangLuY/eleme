<template>
  <div class="first">
    <!-- 商家店铺 -->
    <!-- 下面商铺部分 -->
    <div to="xiadan" id="allShop">
      <img src alt />
      <span>附近商家</span>
      <ul  @click="yidong1()">
        <li id="xiask" v-for="(item, index) in allShop" :key="index" class="shoplist" @click="addA(item)">
          <!-- <router-link :to="'xiadangoods?shopId='+item.id" id="shop"> -->
          <router-link :to="'xiadan?shopId='+item.id" id="shop">
            <img :src="'https://elm.cangdu.org/img/'+item.image_path" id="shopImg" />
            <p id="shopname">
              <span>品牌</span>
              <span>{{item.name}}</span>
              <span>
                <span v-for="(item, index) in item.supports" :key="index">{{item.icon_name}}</span>
              </span>
            </p>
            <p id="shopscore">
              <el-rate v-model="item.rating" disabled show-score text-color="#ff9900"></el-rate>
              <span>月售{{item.recent_order_num}}单</span>
              <span v-if="item.supports.length>1">{{item.supports[1].name}}</span>
              <span v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
              <!-- <span v-if="value.delivery_mode">{{value.delivery_mode.text}}</span> -->
              <!-- <span v-if="value.supports.length>1">{{value.supports[1].name}}</span> -->
            </p>
            <p id="shopmoney">
              <span>￥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</span>
              <span>{{item.order_lead_time}}</span>
              <span>{{item.distance}}/</span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 底部菜单栏 -->
  </div>
</template>
<script>
// import { Loading } from 'element-ui';
// let loadingInstance;
export default {
  name: "first",
  data() {
    return {
      datas: {},
      allShop: [],
      detailAdd: {},
      yidong1: 20
      //获得全局变量中的state的排序Id
      // paixuId:this.$store.state.paixuId
    };
  },
  created() {
    // console.log(this.$route.query);
    this.datas = this.$route.query;
    this.getshop(this.$store.state.paixuId);
    this.getDetail();
  },
  methods: {
    // 加载更多
    yidong1() {
      var con = document.getElementById("xiask");
      // console.log(1);
      if (con.scrollTop + con.clientHeight + 50 >= con.scrollHeight) {
        this.numall = this.numall + 10;
        // this.x1 = parseFloat(this.x1) + 0.1;
        // this.y1 = parseFloat(this.y1) + 0.1;
        this.getnear();
      }
    },
    fanhui() {
      this.$router.back();
    },
    addA(v) {
      console.log(v);
      this.$store.commit("QjSjXq", v);
      this.$store.commit("cunId", v.id);
      this.$store.commit("getcanguanId", v.id);
      this.$router.push({
        name: "xiadan"
      });
    },
    getDetail() {
      this.$http({
        url:
          "https://elm.cangdu.org/v2/pois/" +
          this.$route.query.latitude +
          "," +
          this.$route.query.longitude,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res.data);
        this.detailAdd = res.data;
      });
    },
    getshop() {
      this.$http({
        // https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=1
        //latitude="+this.$route.query.latitude+"&longitude="+this.$route.query.longitude+
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=" +
          this.$store.state.latitude +
          "&longitude=" +
          this.$store.state.longitude +
          "&order_by=" +
          this.$store.state.paixuId +
          "&limit=" +
          this.numall,
        method: "get"
      }).then(res => {
        this.allShop = res.data;
        // console.log("这是商家的列表");
        // console.log(res.data);
        // console.log("这个是鼠标点击的信息"+this.$store.state.paixuId+","+this.$store.state.latitude+","+this.$store.state.longitude);
      });
    }
  }
};
</script>
<style scoped>
.citysearchTop {
  width: 100%;
  height: 0.45rem;
  background-color: #3190e8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.citysearchTop img {
  width: 0.25rem;
  line-height: 0.45rem;
  position: absolute;
  top: 0.11rem;
  left: 0.1rem;
}
.citysearchTop p {
  margin: 0 auto;
  font-weight: bolder;
  color: white;
  text-align: center;
  line-height: 0.5rem;
  width: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.citysearchTop span {
  font-weight: bolder;
  color: white;
  position: absolute;
  right: 0.1rem;
  top: 0.16rem;
}
#allShop {
  /* margin-top: 1rem; */
  border-top: 0.01rem solid gray;
}
#shop {
  color: black;
}
.shoplist {
  height: 0.7rem;
}
#shopImg {
  width: 0.8rem;
}
#allShop > img {
  width: 0.18rem;
  vertical-align: bottom;
  float: left;
}
#allShop > span {
  color: gray;
  font-size: 0.1rem;
  margin-bottom: 0.1rem;
  margin-left: 0;
}
ul li {
  border-bottom: 0.01rem solid gray;
  padding: 0.12rem;
  position: relative;
  background-color: white;
}
#shopname {
  width: 2.7rem;
  position: absolute;
  top: 0.12rem;
  left: 0.98rem;
}
#shopname > span:nth-child(1) {
  display: inline-block;
  background-color: gold;
  font-weight: bold;
  font-size: 0.14rem;
  width: 0.3rem;
  text-align: center;
}
#shopname > span:nth-child(2) {
  display: inline-block;
  font-weight: bold;
  font-size: 0.16rem;
}
#shopname > span:nth-child(3) {
  float: right;
}
#shopname > span:nth-child(3) > span {
  font-size: 0.14rem;
  color: gray;
  border: 0.01rem solid gray;
  margin-left: 0.02rem;
  border-radius: 0.03rem;
}
#shopscore {
  width: 2.7rem;
  position: absolute;
  top: 0.35rem;
  left: 0.98rem;
  overflow: hidden;
}
#shopscore > span {
  font-size: 0.14rem;
}
#shopscore > span:nth-child(2) {
  float: left;
}
#shopscore > span:nth-child(3) {
  float: right;
  color: blue;
  display: inline-block;
  width: 0.5rem;
  text-align: center;
  border: 0.01rem solid blue;
  border-radius: 0.03rem;
}
#shopscore > span:nth-child(4) {
  float: right;
  background-color: blue;
  color: white;
  display: inline-block;
  width: 0.65rem;
  text-align: center;
  margin-right: 0.05rem;
  border-radius: 0.03rem;
}
#shopmoney {
  width: 2.7rem;
  position: absolute;
  top: 0.8rem;
  left: 0.98rem;
  font-size: 0.14rem;
}

#shopmoney > span:nth-last-child(2),
#shopmoney > span:last-child {
  float: right;
}
#shopmoney > span:nth-last-child(2) {
  color: blue;
}

.lunbo {
  width: 3.75rem;
  height: 2rem;
  color: blue;
  font-size: 0.83rem;
  text-align: center;
}
#xiask {
  /* overflow: hidden; */
  /* height: 3rem; */
  height: 12vh;
  overflow-y: scroll;
}
</style>
