<template>
  <div class="first">
    <!-- 顶部栏 -->
    <div class="citysearchTop">
      <img @click="fanhui" src="../../assets/find.png" alt />
      <p>{{add}}</p>
      <span>
        <router-link to="register" style="color:white">登陆</router-link>|
        <router-link to="register" style="color:white">注册</router-link>
      </span>
    </div>
    <!-- 轮播部分 -->
    <div class="lunbo">
      <!-- <router-link :to="'xiadan?shopId='+v.id"><p>....</p></router-link> -->
    </div>

    <!-- 商家店铺 -->
    <!-- 下面商铺部分 -->
    <div to="xiadan" id="allShop">
      <img src="../../assets/Group-.png" alt />
      <span>附近商家</span>
      <ul>
        <li v-for="(item, index) in allShop" :key="index" @click="addA(item)">
          <router-link :to="'xiadan?shopId='+item.id" id="shop">
            <img :src="'https://elm.cangdu.org/img/'+item.image_path" id="shopImg" />
            <p id="shopname">
              <span>品牌</span>
              <span>{{item.name}}</span>
              <span>
                <span v-for="(items, index) in item.supports" :key="index">{{items.icon_name}}</span>
              </span>
            </p>
            <p id="shopscore">
              <el-rate v-model="item.rating" disabled show-score text-color="#ff9900"></el-rate>
              <span>月售{{item.recent_order_num}}单</span>
              <span>{{item.supports[1].name}}</span>
              <span>{{item.delivery_mode.text}}</span>
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
    <div id="menu">
      <div>
        <img src="../img/SSS1.png" alt />
        <p>外卖</p>
      </div>
      <div>
        <img @click="login2()" src="../img/zhinanzhen.png" alt />
        <p>搜索</p>
      </div>
      <div>
        <img @click="login3()" src="../img/dingdan1.png" alt />
        <p>订单</p>
      </div>
      <div>
        <img @click="login1()" src="../img/touxiang2.png" alt />
        <p>我的</p>
      </div>
    </div>
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
      allShop: {},
      detailAdd: {},
      add:""
    };
  },
  created() {
    // 正在加载动画效果
    // loadingInstance = Loading.service({
    //   fullscreen:true,
    //   text:'正在加载',
    //   spinner:'el-icon-loading'
    // })
    console.log(this.$route.query);
    console.log(this.$route.query.address);
    this.add=this.$route.query.address;
    this.datas = this.$route.query;
    this.getDetail();
  },
  methods: {
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
        name: "dingdan"
      });
    },
    fanhui() {
      this.$router.back();
    },
    getDetail() {
      this.$http({
        url: "https://elm.cangdu.org/v2/pois/" + this.datas.geohash,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res);
        this.detailAdd = res.data;
        console.log(this.detailAdd);
        this.getshop();
      });
    },
    getshop() {
      this.$http({
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=" +
          this.detailAdd.latitude +
          "&longitude=" +
          this.detailAdd.longitude +
          "&limit=20",
        method: "get",
        withCredentials: true
      }).then(res => {
        console.log(res.data);
        this.allShop = res.data;
      });
    },
    addA(v) {
      this.$store.commit("QjSjXq", v);
      this.$store.commit("cunId", v.id);
    }
  }
};
</script>
<style scoped>
.first {
  padding-bottom: 0.7rem;
}
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
  margin-top: 0.5rem;
  border-top: 0.01rem solid gray;
}
#shop {
  color: black;
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
  box-sizing: border-box;
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
</style>
