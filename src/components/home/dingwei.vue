<template>
    <div>
        <div class="nav">
            <img src="../wly/imgs/foot/back.png" @click="back()" alt>
            <span id="getcity">{{this.$route.query.name}}</span>
            <span @click="back()">切换城市</span>
        </div>
        <div class="search">
            <input v-model="searchPlace" type="text" placeholder="输入学校、商务楼、地址">
            <div @click="search()">提交</div>
        </div>
        <!-- 搜索结果 -->
        <div class="result">
            <ul class="resultlist">
                <li v-for="(v,i) in searchResult" :key="i"  @click="dingWei(v)">
                     <!-- <router-link :to="'/family?name='+v.name+'&address='+v.address+'&latitude='+v.latitude+'&longitude='+v.longitude" tag="div"> -->
                        <p>{{v.name}}</p>
                        <p>{{v.address}}</p>
                     <!-- </router-link> -->
                </li>
            </ul>
        </div>
        <!-- 搜索历史 -->
       <router-view v-if="showhistroy"></router-view>
        
    </div>
</template>

<script>
export default {
    name:"dingwei",
    created() {
        this.searchID=this.$route.query.id;
        this.searchName=this.$route.query.name;
        
    },
    data() {    
        return {
            searchPlace:"",
            searchID:"",
            searchName:"",
            searchResult:"",
            showhistroy:true
        }
    },
    methods: {
        back(){
            this.$router.back();
        },
        //将定位存储到全局中
        dingWei(v){
            this.$router.push({
                name:"family"
            })
            this.$store.commit("saveDingwei",v);
            // console.log("哈哈哈哈哈！我跳转了");
        },
        search(){
             //连接api
            const api="https://elm.cangdu.org/v1/pois?city_id="+this.searchID+"&keyword="+this.searchPlace+"&type=search";
            //get请求方式
            this.$http.get(api).then(
                res=>{
                    this.searchResult=res.data;
                    //将获得的定位信息存储到全局中
                    // this.$store.commit("saveDingwei",res.data);
                    this.showhistroy=!this.showhistroy;
                    console.log(res.data);
                    
                }
            )

        }
    },
}
</script>

<style lang="">
    .nav{
        box-sizing: border-box;
        width: 100%;
        height: 0.5rem;
        background-color: #3190e8;
        color: white;
        overflow: hidden;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.2rem;
        display: flex;
        justify-content: space-between;
    }
    .nav>img{
        width: 0.5rem;
    }
    #logo{
        font-size: 0.15rem;
    }
    #changecity{
        font-size: 0.1rem;
    }
    .search{
        box-sizing: border-box;
        width: 100%;
        margin-top: 0.6rem;
        border-top: 1px solid #9C9C9C;
        border-bottom: 1px solid #9C9C9C;
        padding: 0.1rem 0.3rem;
    }
    .search>input{
        width: 100%;
        height: 0.3rem;
        font-size: 0.15rem;
        border: 1px solid #9C9C9C;
    }
    .search>div{
        width: 100%;
        height: 0.3rem;
        background-color: #3190E8;
        margin-top:0.1rem;
        text-align: center;
        line-height: 0.3rem;
        border-radius: 0.02rem;
        color: white;
    }
    .result{
        /* margin-top: 0.6rem; */
    }
    .resultlist>li{
        padding: 0.05rem 0.1rem;
        border: 1px solid #e4e4e4;
    }
    .resultlist p:nth-child(1){
        
        font-size: 0.15rem;
    }
    .resultlist p:nth-child(2){
        color: #ABAB9F;
        margin-top:0.05rem;
        font-size: 0.05rem;
    }


</style>