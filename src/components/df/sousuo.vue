<template>
  <div id="sousuo">
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>搜索地址</span>
    </div>
    <div id="content">
      <div>
        <el-input class="inp" v-model="input" placeholder="请输入小区/写字楼/学校等"></el-input>
        <el-button @click="get()"  id="but" type="primary">确认</el-button>
      </div>
    </div>
   <div id="p">
      <p>为了满足商家的送餐要求，建议您从列表中选择地址</p>
   </div>
    <ul>
        <li v-for="(v,i) in arr" :key="i">
          <router-link :to="'/editAddress?name='+v.name+'&&geohash='+v.geohash">
            {{v.name}}<br>{{v.address}}
          </router-link>
        </li>
      </ul>
    <div id="bottom">
      
      <div v-if="show">
        <p>找不到地址？</p>
        <p>请尝试输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号）可稍后输入哦。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sousuo",
  data() {
    return {
      input: "",
      searchId: "",
      arr:[],
      show:true
    };
  },
  created() {
    this.searchId = this.$store.state.cityInfo.id
  },
  methods: {
    back() {
      this.$router.back();
    },
    get() {
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +this.searchId +"&keyword=" +this.input +"&type=search";
      this.$http({
        url: api,
        method: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //请求返回的数据res
        console.log(res.data);
        this.arr = res.data;
        this.show=!this.show;
      });
    }
  }
};
</script>
<style scoped>
#content {
  margin-top: 0.4rem;
  padding: 0.1rem;
  overflow: hidden;
}
.inp {
  float: left;
  width: 77%;
}
#but {
  float: right;
}
#p{
  text-align: center;
}
#p > p {
  background-color: #fff6e4;
  color: #ff883f;
  font-size: 0.13rem;
  padding: 0.1rem;
}
#bottom div {
  text-align: center;
  color: #96a1bb;
  margin-top: 2rem;
}
#bottom div p {
  margin-top: 0.05rem;
}
li {
  background-color: white;
  padding: 0.1rem;
  border-bottom: 1px solid #e4e4e4;
}
</style>
