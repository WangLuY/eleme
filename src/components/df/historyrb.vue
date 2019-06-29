<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>历史红包</span>
    </div>
    <div id="content">
      <ul>
       
        <li v-for="(v,i) in arrA" :key="i">
           <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
        <img src="../img/下载 (7).png" alt="">
          <div class="cont-left">
            <p>￥<span>{{v.amount}}</span></p>
            {{v.description_map.sum_condition}}
          </div>
          <div class="cont-conter">
            <p>分享红包</p>
            {{v.description_map.validity_periods}}
            <br>
            {{v.description_map.phone}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "historyrb",
  data() {
    return {
      user: "",
      arrA: []
    };
  },
  created() {
    this.user = this.$store.state.userMsg.user_id;
    this.history();
  },
  methods: {
    back() {
      this.$router.back();
    },
    history() {
      const api ="https://elm.cangdu.org/promotion/v2/users/"+this.user+"/expired_hongbaos?limit=20&offset=0";
      this.$http({
        url: api,
        method: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //请求返回的数据res
        this.arrA = res.data;
        
        console.log(res.data);
      });
    }
  }
};
</script>
<style scoped>
#content {
  margin-top: 0.4rem;
}
li{
  overflow: hidden;
  margin-top: 0.1rem;
   background-color: white;
   margin: 0.1rem;
}
.cont-left{
  float: left;
  padding:0.1rem;
  text-align: center;
  margin-top:0.1rem;
  color: #999999;
  font-size: 0.1rem;
}
.cont-left p{
  color: #999999;
}
.cont-left span{
  font-size: 0.2rem;
}
.cont-conter{
  float: left;
  padding: 0 0.1rem;
  margin: 0.1rem 0;
    border-left: 1px dotted #999999;
    color: #999999;
    font-size: 0.1rem;

}
.cont-conter p{
  font-size: 0.18rem;
  color: black;
}
img{
  float: left;
  width: 5%;
}
</style>
