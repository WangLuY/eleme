<template>
  <div id="address">
    <div id="nav">
      <router-link to="/information">
        <img src="../img/back.png" alt />
      </router-link>
      <span>编辑地址</span>
      <div v-if="!show" @click="show=!show" class="nav-right">编辑</div>
      <div v-else @click="show=!show" class="nav-right">完成</div>
    </div>
    <div id="content">
      <ul>
        <li v-for="(v,i) in arr" :key="i">
          <p class="p1">{{v.address_detail}}</p>
          <p>{{v.phone}}</p>
          <img @click="deleteId(i)" v-if="show" src="../img/quxiao.png" alt />
        </li>
      </ul>
      <router-link tag="div" to="/editAddress">
        <div id="bottom">
          <p>新增地址</p>
          <img src="../img/iconfontjiantou2.png" alt />
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "add",
  data() {
    return {
      user: "",
      arr: [],
      show: false
    };
  },
  created() {
    this.user = this.$store.state.userMsg.user_id;
    this.login();
  },
  methods: {
    login() {
      const api = "https://elm.cangdu.org/v1/users/" + this.user + "/addresses";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true,
        data: {}
      }).then(res => {
        this.arr = res.data;
      });
    },
    deleteId(i) {
      const api =
        "https://elm.cangdu.org/v1/users/" +
        this.user +
        "/addresses/" +
        this.arr[i].id;
      this.$http({
        url: api,
        method: "DELETE"
      }).then(res => {
        console.log(res);
        this.arr.splice(i, 1);
      });
    }
  }
};
</script>
<style scoped>
#bottom {
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  background-color: white;
  padding: 0.1rem;
  overflow: hidden;
  margin-top: 0.1rem;
}
#bottom p {
  float: left;
}
#bottom img {
  width: 0.2rem;
  float: right;
}
#content {
  margin-top: 0.5rem;
}
li:nth-of-type(1) {
  background-color: #fff8c3;
}
li {
  background-color: white;
  padding: 0.1rem;
  margin-top: 0.1rem;
  position: relative;
}
li p {
  font-size: 0.12rem;
}
li img {
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
}
.p1 {
  margin-bottom: 0.1rem;
}
</style>
