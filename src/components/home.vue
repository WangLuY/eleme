<template>
  <!-- 城市首页面 -->
  <div id="cityHome">
    <!-- 城市首页登录注册兰 -->
    <div id="cityTop">
      <p class="p1">ele.me</p>
      <span>
        <router-link to="landing" style="color:white">登陆</router-link>|
        <router-link to="landing" style="color:white">注册</router-link>
      </span>
    </div>
    <!-- 城市定位 -->
    <div id="cityPositioning1">
      <p class="p2">当前定位城市：</p>
      <p class="p3">定位不准时，请在城市列表中选择</p>
    </div>
    <div id="cityPositioning2">
      <router-link
        tag="p"
        :to="'/citysearch?name='+cityPositioning.name+'&&id='+cityPositioning.id"
        class="cityHotli"
      >
        <p class="p4">{{cityPositioning.name}}</p>
        <img class="p5" src="./../assets/youj.png" alt>
      </router-link>
    </div>
    <!-- 热门城市 -->
    <div id="cityHot0">
      <p class="p6">热门城市</p>
    </div>
    <div id="cityHot">
      <ul>
        <li :key="i" v-for="(v,i) in cityHot">
          <router-link :to="'/citysearch?name='+v.name+'&&id='+v.id" class="cityHotli">{{v.name}}</router-link>
        </li>
      </ul>
    </div>
    <!-- 所有城市 -->
    <div id="cityAll">
      <ul :key="index" v-for="(value,key,index) in cityAll">
        <p>{{key}}</p>
        <span class="p7" v-if="key == 'A' ">(按字母排序)</span>
        <ul class="cityAlls">
          <li :key="index" v-for="(value,index) in value">
            <router-link
              :to="'/citysearch?name='+value.name+'&&id='+value.id"
              class="cityAllsli"
            >{{value.name}}</router-link>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  //组件创建完成时，请求该页面数据
  created() {
    this.getcityPositioning();
    this.getcityHot();
    this.getcityAll();
  },
  data() {
    return {
      //当前城市
      cityPositioning: {},
      //热门城市
      cityHot: {},
      cityAll: {}
    };
  },
  methods: {
    //获取网络请求方式
    //获取当前城市
    getcityPositioning() {
      //连接api
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      //get请求方式
      this.$http.get(api).then(res => {
        console.log(res.data); //返回请求到的数据
        this.cityPositioning = res.data;
        console.log(this.cityPositioning);
      });
    },
    getcityHot() {
      //连接api
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      //get请求方式
      this.$http.get(api).then(res => {
        console.log(res.data); //返回请求到的数据
        this.cityHot = res.data;
      });
    },
    getcityAll() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http.get(api).then(res => {
        console.log(res.data); //返回请求到的数据
        const arr = [];
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        for (let i = 0; i < arr.length; i++) {
          this.cityAll[arr[i]] = res.data[arr[i]];
        }
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
#cityHome {
  text-align: left;
  background-color: #f5f5f5;
}
#cityTop {
  width: 100%;
  height: 0.45rem;
  background-color: #3190e8;
  position: fixed;
  top: 0;
}
.p1 {
  color: white;
  position: absolute;
  left: 0.1rem;
  top: 0.2rem;
}
span {
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;
  color: white;
}
#cityPositioning1 {
  width: 100%;
  height: 0.45rem;
  background-color: #ffffff;
  position: absolute;
  top: 0.45rem;
}
.p2 {
  position: absolute;
  left: 0.1rem;
  top: 0.2rem;
  color: #666666;
  font-size: 0.13rem;
}
.p3 {
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;
  color: #9f9f9f;
  font-size: 0.11rem;
  font-weight: bolder;
}
#cityPositioning2 {
  width: 100%;
  height: 0.45rem;
  background-color: #ffffff;
  position: absolute;
  top: 0.92rem;
  border-bottom: 2px solid #e4e4e4;
}
.p4 {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  color: blue;
  font-size: 0.2rem;
}
.p5 {
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  color: #9f9f9f;
  font-size: 0.3rem;
}
#cityHot0 {
  width: 100%;
  height: 0.3rem;
  background-color: #ffffff;
  position: absolute;
  top: 1.5rem;
  border-top: 2px solid #e4e4e4;
  list-style-type: none;
}
#cityHot {
  width: 100%;
  background-color: #ffffff;
  position: absolute;
  top: 1.79rem;
  border-top: 2px solid #e4e4e4;
  list-style-type: none;
}
.p6 {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  color: #666666;
  font-size: 0.13rem;
}
#cityHot li {
  box-sizing: border-box;
  float: left;
  width: 25%;
  text-align: center;
  padding: 0.1rem 0;
  border: 0.01rem solid #e4e4e4;
  font-size: 0.15rem;
}
.cityHotli {
  color: blue;
}
#cityAll {
  width: 100%;
  background-color: #ffffff;
  position: absolute;
  top: 2.66rem;
  border-top: 2px solid #e4e4e4;
  list-style-type: none;
}
#cityAll li {
  box-sizing: border-box;
  float: left;
  width: 25%;
  text-align: center;
  padding: 0.1rem 0;
  border: 0.01rem solid #e4e4e4;
  font-size: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cityAllsli {
  color: black;
}
.p7 {
  position: absolute;
  left: 0.1rem;
  top: 0.02rem;
  color: #9f9f9f;
  font-size: 0.1rem;
}
.cityAlls {
  overflow: hidden;
}
</style>


