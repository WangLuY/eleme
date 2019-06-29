<template>
    <div>
        <div id="f_top">
            <span class="el-icon-arrow-left jiantouleft" @click="back()"></span>
            <span id="shangjia">食品监督安全公示</span>
        </div>
        <div id="resz">
           <div class="xhuok">
           <div class="xhuokImg">
               <img src="../../assets/xiaolian.png" alt="">
           </div>
           <div class="result">
            <p><span>监督检查结果:</span>
           <span>好</span></p>
           <p>检查日期:</p>
           </div>
            </div>   
        </div>
        <div id="gongshang">
            <p>工商登记信息</p>
            <p>企业名称</p>
            <p>注册资本</p>
            <p>注册地址</p>
            <p>属地监管所</p>
            <p>法定代表人</p>
            <p>经营范围</p>
        </div>
        <div id="canyin">
            <p>餐饮许可证</p>
            <p>营业范围</p>
            <p>许可证有效期</p>
            <p>许可证号</p>
            <p>发证时间</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'foodAnquan',
    methods: {
        back(){
            this.$router.back();
        },
    },
}
</script>
<style scoped>
    .jiantouleft{
        font-size: 0.5rem;
        margin-bottom:0.1rem; 
    }
    #f_top{
        position: fixed;
        top: 0;
        left: 0;
        width: 3.75rem;
        background-color: #3190e8;
        height: 0.7rem;
        z-index: 10;
        color: white;
    }
     #shangjia{
         font-size: 0.2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
     }
     #resz{
         margin-bottom:0.1rem;
         width: 3.75rem;
         margin-top:0.7rem; 
         height: 1.3rem; 
         background-color: #fff;
     }
     #gongshi{
         padding: 0.1rem 0;
         font-size: 0.2rem;
         border-bottom:1px solid lightgray; 
     }
     #gongshang{
         background-color: #fff;
         width: 3.75rem;
         margin-bottom:0.1rem; 
         font-size: 0.15rem;
     }
     #gongshang>p:nth-child(1){
         height: 0.3rem;
         border-bottom: 1px solid lightgray;
         line-height: 0.3rem;
         font-size: 0.2rem;
     }
     #gongshang>p{
         padding:0.1rem 0; 
     }
     #canyin{
         background-color: #fff;
         font-size: 0.16rem;
         width: 3.75rem;
     }
     #canyin>p:nth-child(1){
         height: 0.3rem;
         line-height: 0.3rem;
         font-size: 0.2rem;
     }
     #canyin>p{
         padding:0.1rem 0; 
     }
     /* 图片部分 */
     .xhuok{
         width: 3.75rem;
         height: 1rem;
         background-color: #fff;
         margin-bottom:0.1rem; 
         overflow: hidden;
     }
     .result>p{
        height: 0.1rem;
        padding: 0.15rem 0;
     }
     .xhuokImg>img{
         width: 0.8rem;
         height: 0.8rem;
         margin: 0.1rem;
     }
     .xhuok>div{
         float: left;
     }
</style>
