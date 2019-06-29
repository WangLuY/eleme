<template>
  <div id="redpacket">
    <div id="top">
      <p>
        有<span>{{$store.state.sum}}</span> 个红包即将到期
      </p>
     <router-link to="/redexplain">
      <div>
        <i class="el-icon-question"></i>
        <span>红包说明</span>
      </div>
     </router-link>
    </div>
    <div id="content">
      <ul>
        <li v-for="(v,i) in arr" :key="i">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <img src="../img/下载 (2).png" alt="">
          <div class="cont-left">
            <p>￥<span>{{v.amount}}</span></p>
            {{v.description_map.sum_condition}}
          </div>
          <div class="cont-conter">
            <p>分享红包</p>
          {{v.description_map.validity_periods}}
          <br>
          {{phone[i][0]}}
          <br>
          {{phone[i][1]}}
          </div>
          <div class="cont-right">{{v.description_map.validity_delta}}</div>
        </li>
      </ul>
       <router-link id="lishi" to="/historyrb">
        <p>查看历史红包></p>
       </router-link>
    </div>
    <div id="bottom">
        <router-link to="/duihuan">
        <p>兑换红包</p>
        </router-link>
        <router-link to="/tuijianyj">
        <p>推荐有奖</p>
        </router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name:"redpacket",
    data(){
       return{
         user:"",
         arr:[],
         phone:[]
       }
    },
    computed:{
        ...mapState({
             discounts:"discounts"
        })
    },
    created() {
    //首先，获取验证码
    this.login();
    this.user=this.$store.state.userMsg.user_id;
    console.log(this.user);
  },
    methods:{
       login() {
      const api = "https://elm.cangdu.org/promotion/v2/users/"+this.$store.state.userMsg.user_id+"/hongbaos?limit=20&offset=0";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true,
        data: {
          
        }
      }).then(res => {
        this.arr=res.data;
        this.$store.commit("getsum", res.data.length);
        console.log(this.arr.length);
       console.log(res.data);
      for (let index = 0; index < res.data.length; index++) {
        this.phone.push(res.data[index].description_map.phone.split(" "));

      }
      console.log(this.phone);
      });
    },
    }
};
</script>
<style scoped>
#top {
  font-size: 0.1rem;
  overflow: hidden;
  margin-bottom: 0.1rem;
}
#top>p {
  float: left;
}
#top div {
  float: right;
}
#redpacket{
    padding: 0.2rem
}
#bottom{
    width: 100%;
    background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.15rem 0;
  position: fixed;
  left: 0;
  bottom: 0;
}
#lishi{
    text-align: center;
}
#lishi>p{
    font-size: 0.1rem;
    margin-top: 0.2rem;
}
li{
  overflow: hidden;
  margin-top: 0.1rem;
   background-color: white;
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
  color: red;
}
.cont-left span{
  font-size: 0.2rem;
}
.cont-conter{
  float: left;
  padding: 0 0.1rem;
  margin: 0.1rem 0;
    border-left: 1px dotted red;
    color: #999999;
    font-size: 0.1rem;

}
.cont-conter p{
  font-size: 0.18rem;
  color: black;
}
.cont-right{
  float: right;
   padding: 0.1rem;
   color: red;
   margin: 0.13rem;
}
img{
  float: left;
  width: 5%;
}
</style>
