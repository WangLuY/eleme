<template>
    <div>
          <div class="top">
               <img src="./../assets/back.png" alt="" class="zuojiantou" @click="back()">
               <span>{{name}}</span>
          </div>
          <p class="datu">
               <img :src="'https://elm.cangdu.org/img/'+tudizhi" alt="">
          </p>
          <p class="infor">{{infor}}</p>
          <p class="fname">{{name}}</p>
          <p>
               <span class="ratscore">评分</span>
               <span class="ratwidth">
                    <el-rate
               v-model="rat"
               disabled
               show-score
               text-color="#ff9900"
               score-template="{value}" class="ratwidth1">
               </el-rate>
               </span>

          </p>
          <p>
               <span class="monthsale">月售{{xiaosou}}单</span>
               <span>售价￥20起</span>
          </p>
          <p>
               <span class="pincount">
                    评论数{{pinglunshu}}
               </span>
               <span class="haoping"> 
                    好评率{{manyidu}}%
               </span>
          </p>
         <!-- <div class="bottomgowu">
               <div>
                    <img src="../../assets/gouwuche.png" alt="">
               </div>
               <div>
                   <p>￥80</p>
                   <p>配送费5元</p>
               </div>
               <div>去结算</div>
          </div> -->
          
    
    </div>
</template>
<script>
export default {
    name:"caipin",
    data() {
        return {
            rat:1,
            name:'',
            infor:'',
            xiaosou:1,
            pinglunshu:1,
            manyidu:1,
            tudizhi:''

        }
    },
    created() {
          console.log(this.$route.query)
          this.rat=this.$route.query.foodrat;
          this.rat=parseFloat(this.rat);
          this.name=this.$route.query.mingzi;
          this.infor=this.$route.query.miaosu;
          this.xiaosou=this.$route.query.yuesou
          this.pinglunshu=this.$route.query.pinglun;
          this.manyidu=this.$route.query.haoping;
          this.tudizhi=this.$route.query.tupian;
    },
    methods: {
         back(){
             this.$router.back();
         }
    },
}
</script>
<style scoped>
 div{
        background-color: #fff;
    }
     .top{
          width: 3.75rem;
          background-color: #3190e8;
          position: relative;
          top: 0;
          left: 0;
          color: white;
          font-size: 0.2rem;
     }
     .zuojiantou{
          width: 0.2rem;
          /* border: 1px solid red */
     }
     .top>span{
          /* display: inline-block; */
          /* margin-top: 0.21rem;  */
          position:absolute;
          top:50%;
          left: 50%;
          transform: translate(-50%,-50%);
     }
     .datu{
          width: 3.75rem;
          height: 3.75rem;
     }
     .datu>img{
          width: 100%;
          height: 100%;
     }
     .infor{
          width: 3.65rem;
          margin-top: 0.1rem;
          background-color: #fff;
          color: #666;
          padding-left:0.1rem ;
     }
     .fname{
          margin-top:0.2rem;
          padding-left:0.1rem ;
          font-size: 0.23rem;
     }
     .ratwidth{
          width: 3rem;
     }
     .ratscore{
          display: inline-block;
      padding-left:0.1rem ;
     margin-top:0.1rem;
     }
     .ratwidth1{
          width: 3rem;
          display: inline-block;
     }
     .monthsale{
          display: inline-block;
          padding-left:0.1rem ;
          margin-top:0.1rem;
          color: #666;
     }
     .pincount{
          display: inline-block;
          padding-left:0.1rem ;
          margin-top:0.1rem;
          color: #666;
     }
     .haoping{
          color: #666;
     }
     .bottomgowu{
          position: fixed;
          width: 3.75rem;
          bottom: 0;
          left: 0;
          background-color: #555;
          height: 0.7rem;
     }
     .bottomgowu>div:nth-child(1){
         display: inline-block;
          width: 18%;
          background-color: blue;
          border-radius: 50%;
          margin: -2% 0 0 4%; 
     }
     .bottomgowu>div>img{
          width: 100%;
     }
     .bottomgowu>div:nth-child(2){
         display: inline-block;
         width: 50%;
         height: 0.7rem;
        background-color: #555;
        color: #fff;
     }
     .bottomgowu>div:nth-child(3){
         display: inline-block;
         width: 25%;
         padding-top:0.5rem; 
         height: 0.7rem;
         background-color: #4cd964;
         color: white;
         text-align: center;
     }
</style>
