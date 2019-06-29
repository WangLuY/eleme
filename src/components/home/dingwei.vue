<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>{{this.$route.query.name}}</span>
      <router-link id="switchover" to="/citylist">切换城市</router-link>
    </div>
    <div id="conter">
      <div id="content">
        <input v-model="searchPlace" type="text" placeholder="输入学校、商务楼、地址">
        <button @click="get()">提交</button>
      </div>
    </div>
    <div id="Search">
      <p>搜索历史</p>
      <ul>
        <router-link to="/wode">
        <li v-for="(v,i) in arr" :key="i">
          {{v.name}}
          <br>
          {{v.address}}
        </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "dingwei",
  created() {
    this.searchId = this.$route.query.id;
    this.searchname = this.$route.query.name;
    this.getCity();
  },
  data() {
    return {
      searchPlace: "",
      searchId: "",
      searchname: "",
      arr: []
    };
  },
  methods: {
    getCity() {
      this.$store.commit("getCity", this.$route.query);
    },
    back() {
      this.$router.back();
    },
    get() {
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.searchId +
        "&keyword=" +
        this.searchPlace +
        "&type=search";
      this.$http({
        url: api,
        method: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //请求返回的数据res
        this.arr = res.data;
        console.log(res.data);
      });
    }
  }
};
</script>
<style scoped>
#switchover {
  float: right;
  margin-right: 10px;
}
#conter {
  margin-top: 0.5rem;
  background-color: white;
  padding: 0.1rem;
  border-top: 2px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
}
#content {
  width: 90%;
  margin-left: 5%;
}
#content input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid black;
  height: 0.3rem;
}
#content button {
  width: 100%;
  background-color: blue;
  color: white;
  height: 0.3rem;
  border: blue;
  margin-top: 5px;
  border-radius: 5px;
}
p {
  font-size: 0.05rem;
  padding: 0.05rem;
  border-bottom: 2px solid #e4e4e4;
}
#Search li {
  background-color: white;
  padding: 0.1rem;
  border-bottom: 1px solid #e4e4e4;
}
</style>
