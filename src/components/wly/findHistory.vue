<template>
    <div class="history">
        <p class="history_p">搜索历史</p>
        <ul>
            <li v-for="(v,i) in After" :key="i" class="inputList" @click="interFood(v)">
                <span>{{v}}</span>
                <img @click="delMsg(i)" src="../img/quxiao.png" alt="">
            </li>
            
        </ul> 
        <p class="history_clear" @click="delAll()">删除历史记录</p> 
    </div>
</template>

<script>
export default {
    name:"findHistory",
    data() {
        return {
            //定义一个数组，存储搜索及记录
            foodArr:[],
            //定义一个数组，保存去重后
            After:[],
            localStr:""
        }
    },
    created() {
        this.getFindHistory();
    },
    methods: {
        //获得本地中food对象
        getFindHistory(){
            //返回回来的字符串
            const foodStr= localStorage.food;
            //将字符串以 ， 分开，并且存储到数组中
            this.foodArr=foodStr.split(",");
            //将数组中的元素去重
            for (var i = 0; i < this.foodArr.length; i++) {
                if(this.After.indexOf(this.foodArr[i])==-1){
                this.After.push(this.foodArr[i]);
                }
            }
            // console.log(this.After.length);
            
        },
        delAll(){
            this.After=null;
            localStorage.removeItem("food");
        },
        delMsg(i){
            this.After.splice(i,1);
            // for (let index = 0; index < this.After.length; index++) {
            //     this.localStr+=this.After[i]+",";
            // }
            // localStorage.food=this.localStr;
        },
        interFood(v){
            console.log(v);
            this.inputFood=v;
        }
    },
}
</script>

<style scoped>
.inputList{
    padding: 0.1rem ;
    overflow: hidden;
     background-color: #fff ;
    border-bottom:1px solid #e4e4e4;
}
.inputList>span:nth-child(1){
    float: left;
}
li img{
    float:right;
}
.history{
    background-color: #fff;
}
.history_p{
    background-color: #F5F5F5;
    /* padding: 0.01rem; */
    padding: 0.1rem ;
    /* font-size: 0.02rem; */
    color: #666666;
}
.history_clear{
    text-align: center;
    width: 100%;
    font-size: 0.15rem;
    color: #4C8DE0;
    padding: 0.1rem 0;
}
</style>