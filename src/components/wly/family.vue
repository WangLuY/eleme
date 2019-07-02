<template>
  <div id="family">
    <div class="citysearchTop">
      <img src="./imgs/foot/back.png" @click="back()" alt />
      <p>{{$store.state.dingwei.name}}</p>
      <span>
        <router-link to="landing" style="color:white">登陆</router-link>|
        <router-link to="landing" style="color:white">注册</router-link>
      </span>
    </div>
    
    <FirstPage />
    <Shoplist />
    <!-- <router-view name="header"></router-view> -->
    <!-- <router-view name="content" class="content"></router-view> -->

    <div id="menu">
      <div>
        <img  src="../img/SSS1.png" alt />
        <p>外卖</p>
      </div>
      <router-link to="/findFood" tag="div">
        <img src="../img/zhinanzhen.png" alt />
        <p>搜索</p>
      </router-link>
      <!-- <div>
        
      </div> -->
      <router-link to="/dingdan" tag="div">
        <img src="../img/dingdan1.png" alt />
        <p>订单</p>
      </router-link>
      <!-- <div>
        
      </div> -->
      <router-link to="/wode" tag="div">
        <img src="../img/touxiang2.png" alt />
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import FirstPage from '@/components/wly/firstpage'

import Shoplist from '@/components/sgl/shoplist'
export default {
  name: "family",
  data() {
    return {};
  },
  components:{FirstPage,Shoplist},
  created() {
    this.saveLocalstorage();
    //存储经度
    this.$store.commit("getLatitude", this.$route.query.latitude);
    //存储纬度
    this.$store.commit("getLongitude", this.$route.query.longitude);
    // console.log("a" + this.$route.query.latitude);
    console.log("l" + this.$store.state.dingwei.latitude);
    console.log("log:" + this.$store.state.dingwei.longitude);
  },
  methods: {
    //返回上个路由界面
    back() {
      this.$router.back();
    },
    login1() {
      this.$router.push({
        name: "findFood"
      });
    },
    login2() {
      this.$router.push({
        name: "dingdan"
      });
    },
    login3() {
      this.$router.push({
        name: "wode"
      });
    },
    //将信息存储到localstorage中
    saveLocalstorage() {
      // console.log(this.$route.query.latitude);
      // console.log(this.$route.query.longitude);
      //获取到本地信息
      if (localStorage.name) {
        localStorage.name += "," + this.$store.state.dingwei.name;
        localStorage.addr += "," + this.$store.state.dingwei.address;
        localStorage.latitude += "," + this.$store.state.dingwei.latitude;
        localStorage.longitude += "," + this.$store.state.dingwei.longitude;
      } else {
        localStorage.name = this.$store.state.dingwei.name;
        localStorage.addr = this.$store.state.dingwei.address;
        localStorage.latitude = this.$store.state.dingwei.latitude;
        localStorage.longitude = this.$store.state.dingwei.longitude;
      }
    }
  }
};
</script>
<style scoped>
#family{
  margin-bottom: 0.7rem;
}
.change_botton {
  position: fixed;
  bottom: 0;
  z-index: 100;
}
.citysearchTop {
  width: 100%;
  height: 0.45rem;
  background-color: #3190e8;
  position: fixed;
  top: 0;
  z-index: 100;
}
.citysearchTop img {
  width: 0.25rem;
  line-height: 0.45rem;
  position: absolute;
  top: 0.11rem;
  left: 0.1rem;
}
.citysearchTop p {
  font-weight: bolder;
  color: white;
  text-align: center;
  line-height: 0.5rem;
}
.citysearchTop span {
  font-weight: bolder;
  color: white;
  position: absolute;
  right: 0.1rem;
  top: 0.16rem;
}
</style>
