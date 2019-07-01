<template>
    <div>
        <p>搜索历史</p>
        <ul>
            <li v-for="(v,i) in After" :key="i" class="inputList">
                <span>{{v}}</span>
                <span @click="delMsg(i)">删除该条记录</span>
            </li>
            
        </ul> 
        <p @click="delAll()">删除历史记录</p> 
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
            After:[]
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
            console.log(this.After.length);
            
        },
        delAll(){
            // for (let index = 0;  index< this.After.length; index++) {
            //     this.After.pop();
            // }
            this.After=null;
            localStorage.removeItem("food");
        },
        delMsg(i){
            this.After.splice(i,1);
        }
    },
}
</script>

<style lang="">
.inputList{
    display: flex;
    justify-content: space-between;
}
</style>