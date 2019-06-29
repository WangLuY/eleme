<template>
    <div class="citysearch">
        <div class="citysearchTop">
            <img @click="fanhui" src="./../assets/back.png" alt="">
            <p>{{this.$route.query.name}}</p>
            <span  @click="fanhui">切换城市</span>
        </div>
        <div class="searchDiv1">
            <input v-model="searchPlace" class="searchinput" type="text" placeholder="输入学校，商务楼，地址"><br>
            <button @click="search()" class="searchbutton">提交</button>
        </div>
        <!-- 搜索结果 -->
        <div class="searchDiv3">
            <ul class="searchDiv4">
                <li :key="i" v-for="(v,i) in searchResult">
                    <router-link class="searchDiv5"  :to="'/first?name='+v.name+'&&geohash='+v.geohash" tag="p">{{v.name}}</router-link>
                    <router-link class="searchDiv6" :to="'/first?name='+v.name+'&&geohash='+v.geohash" tag="p">{{v.address}}</router-link>
                </li>
            </ul>
        </div>
         <div class="searchDiv2">
            <p class="searchp">搜索历史</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"citysearch",
    created() {
        this.searchID=this.$route.query.id;
    },
    data() {
        return {
            searchPlace:"",
            searchID:"",
            searchResult:""
        }
    },
    methods: {
         fanhui(){
            this.$router.back();
        },
        search(){
             //连接api
            const api="https://elm.cangdu.org/v1/pois?city_id="+this.searchID+"&keyword="+this.searchPlace+"&type=search";
            //get请求方式
            this.$http.get(api).then(
                res=>{
                    console.log(res.data);
                    this.searchResult=res.data
                }
            )

        }
    },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.citysearch {
  text-align: left;
  background-color: #f5f5f5;
}
.citysearchTop{
      width: 100%;
  height: 0.45rem;
  background-color: #3190e8;
  position: fixed;
  top: 0;
}
.citysearchTop img{
 width: 0.12rem;
    position: absolute;
    top: 0.12rem;
    left: 0.1rem;
}
.citysearchTop p{
    font-weight: bolder;
    color: white;
    text-align: center;
    line-height: 0.5rem;
}
.citysearchTop span{
font-weight: bolder;
    color: white;
    position: absolute;
    right: 0.1rem;
    top: 0.2rem;
}
.searchDiv1{
    background-color: #fff;
text-align: center;
line-height: 0.4rem;
}
.searchinput{
    width: 90%;
    line-height: 0.3rem;
    font-size: 0.14rem;
    border: 1px solid #9f9f9f;
    margin-top: 0.6rem;
}
.searchbutton{
    width: 90%;
    line-height: 0.28rem;
    background-color: blue;
    color: white;
    font-size: 0.15rem;
    border-radius: 5px;
}
.searchp{
    width: 100%;
    line-height: 0.2rem;
    background-color: #f0eded;
    color: black;
    font-size: 0.15rem;
    border: 1px solid #c0bcbc;
}
.searchbutton:focus,
.searchbutton:active:focus,
.searchbutton.active:focus,
.searchbutton.focus,
.searchbutton:active.focus,
.searchbutton.active.focus {
    outline: none;
    border-color: transparent;
    box-shadow:none;
}
.searchDiv3{
    background-color: #fff;
}
.searchDiv4 li{
    border-top: 1px solid #c0bcbc;

}
.searchDiv5{
    box-sizing: border-box;
    font-size: 0.14rem;
    line-height: 0.3rem;
    padding: 0.02rem 0.15rem;
    font-weight: bolder;
}
.searchDiv6{
    box-sizing: border-box;
    font-size: 0.02rem;
    line-height: 0.3rem;
    padding: 0 0.15rem;
    color: #adaaaa;
}
</style>
