<template>
  <div id="citylist">
    <div id="nav">
      <router-link  to="/citylist">
      <p id="ele">ele.me</p>
      </router-link>
      <div>
        <router-link  to="/register">
        <p class="nav-right">登陆|注册</p>
        </router-link>
      </div>
    </div>
    <div id="locatin">
      <div id="loc-top">
        <span id="loc-left">当前定位城市：</span>
        <span id="loc-right">定位不准确时，请在城市列表中选择</span>
      </div>
      <div id="lod-bottom">
        <span id="atcity">{{atcity.name}}</span>
        <router-link id="jiantou" :to="'/dingwei?name='+atcity.name+'&&id='+atcity.id">
          <img src="../img/右箭头.png" alt>
        </router-link>
      </div>
    </div>
    <div id="hot">
      <p>热门城市</p>
      <ul>
        <li :key="i" v-for="(v,i) in datas">
            <router-link :to="'/dingwei?name='+v.name+'&&id='+v.id">{{v.name}}</router-link>
        </li>
      </ul>
    </div>
    <div id="allcity">
      <ul>
        <li :key="key" v-for="(value,key) in groupCities">
          <p>
            {{key}}<span v-if="key=='A'">(按字母排序)</span>
          </p>
          <ul class="all">
            <li  :key="i" v-for="(v,i) in value">
              <router-link :to="'/dingwei?name='+v.name+'&&id='+v.id">{{v.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "citylist",
  data() {
    return {
      atcity: {},
      datas: [],
      groupCities: {}
    };
  },
  created() {
    this.getLocatio();
    this.getData();
    this.getGroupCities();
  },
  methods: {
    getData() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      //get请求方式
      this.$http.get(api).then(response => {
        this.datas = response.data;
      });
    },
    getLocatio() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http({
        url: api,
        method: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //请求返回的数据res
        this.atcity = res.data;
      });
    },
    getGroupCities() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res);
        var arr = [];
        //先排序,再给数据源赋值
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          this.groupCities[arr[i]] = res.data[arr[i]];
        //   this.$set(this.groupCities, arr[i], res.data[arr[i]]);
        }
        // this.groupCities = res.data;
        // var arr = [];
      });
    }
  }
};
</script>
<style scoped>

#locatin {
  margin-top: 0.4rem;
  background-color: white;
}
#loc-top {
  overflow: hidden;
  border-bottom: 1px solid #e4e4e4;
}
#loc-left {
  font-size: 0.1rem;
  padding: 0.1rem;
  float: left;
}
#loc-right {
  font-size: 0.08rem;
  padding: 0.1rem;
  float: right;
  color: #9f9f9f;
}
#lod-bottom {
  overflow: hidden;
}
#atcity {
  font-size: 0.2rem;
  padding: 0.1rem;
  float: left;
  color: blue;
}
#jiantou img {
  width: 0.1rem;
  padding: 0.12rem;
  float: right;
  color: blue;
}
#hot {
  overflow: hidden;
  margin-top: 0.2rem;
  background-color: white;
}
#hot p {
  font-size: 0.12rem;
  padding: 0.12rem;
}
#hot li {
  box-sizing: border-box;
  float: left;
  width: 25%;
  text-align: center;
  padding: 0.1rem 0;
  color: #3190eb;
  border: 0.01rem solid #9f9f9f;
  font-size: 0.15rem;
}
#allcity {
  margin-top: 0.2rem;
} 
#allcity{
    background-color: white;
}
#allcity p{
    font-size: 0.03rem;
    padding: 0.1rem 
}
#allcity p span{
    font-size: 0.02rem;
    margin-left: 0.02rem;
    color: #9f9f9f; 
} 
.all{
    overflow: hidden;
}
.all li{
   height: 0.4rem;
   box-sizing: border-box;
  float: left;
  width: 25%;
  text-align: center;
  border: 0.01rem solid #9f9f9f;
  font-size: 0.12rem;
  line-height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
