<template>
  <div id="findFood">
   <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>搜索</span>
      <div></div>
    </div>
    <!-- 搜索输入框 -->
    <div class="inputFood">
      <!-- <el-input class="inpFood" v-model="inputFood" placeholder="请输入商家或美食名称"></el-input> -->
      <input v-model="inputFood" type="text" placeholder="请输入商家或美食名称" />
      <span @click="findFood()">提交</span>
    </div>

    <div class="bottom">
      <ul v-if="showResult">
        <li class="li1" :key="i" v-for="(v,i) in foodList">
          <router-link tag="p" :to="'/shop?id='+v.id">
            <img class="img1" :src="'https://elm.cangdu.org/img/'+v.image_path" alt />
            <div class="bottom1">
              <p class="lip1">{{v.name}}</p>
              <p class="lip2">
                <span v-if="v.recent_order_num">月售</span>
                {{v.recent_order_num}}
                <span v-if="v.recent_order_num">单</span>
              </p>
              <p class="lip3">
                {{v.float_minimum_order_amount}}
                <span v-if="v.float_minimum_order_amount">元 起送 / 距离</span>
                {{v.distance}}
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 搜索历史 -->
    <!-- <router-view v-show="showHistory"></router-view> -->
    <!-- <FindHistory v-show="showHistory"></FindHistory> -->
    <div class="history" v-show="showHistory">
      <p class="history_p">搜索历史</p>
      <ul>
        <li v-for="(v,i) in After" :key="i" class="inputList" @click="interFood(v)">
          <span>{{v}}</span>
          <img @click="delMsg(i)" @click.stop src="../img/quxiao.png" alt="">
          <!-- <span @click="delMsg(i)">删除</span> -->
        </li>
      </ul>
      
      <p class="history_clear" @click="delAll()">删除历史记录</p>
    </div>

    <div id="menu">
      <router-link to="/family" tag="div">
        <img src="../img/SSS.png" alt />
        <p>外卖</p>
      </router-link>

      <div>
        <img src="../img/zhinanzhen1.png" alt />
        <p>搜索</p>
      </div>
      <router-link to="/dingdan" tag="div">
        <img src="../img/dingdan1.png" alt />
        <p>订单</p>
      </router-link>
      <!-- <div>
       
      </div>-->
      <router-link to="/wode" tag="div">
        <img src="../img/touxiang2.png" alt />
        <p>我的</p>
      </router-link>
      <!-- <div>
       
      </div>-->
    </div>
  </div>
  <!-- 搜索结果 -->
</template>

<script>
import FindHistory from "@/components/wly/findHistory";
export default {
  name: "findFood",
  data() {
    return {
      //定义搜索框，双向绑定
      inputFood: "",
      //定义搜索到的食物对象
      foodList: [],
      //定义布尔类型的值来显示隐藏搜索结果
      showHistory: true,
      showResult: false,
      //定义一个数组，存储搜索及记录
      foodArr: [],
      //定义一个数组，保存去重后
      After: [],
      localStr: ""
    };
  },
  components: { FindHistory },
  created() {
    this.getHis();
    this.getFindHistory();
  },
  methods: {
    //返回上一级路由
    back() {
      this.$router.back();
    },
    login1() {
      this.$router.push({
        name: "first"
      });
    },
    login2() {
      this.$router.push({
        name: "wode"
      });
    },
    login3() {
      this.$router.push({
        name: "dingdan"
      });
    },
    //获取食物的对象
    findFood() {
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash=" +
        this.$store.state.latitude +
        "," +
        this.$store.state.longitude +
        "&keyword=" +
        this.inputFood;
      this.$http.get(api).then(res => {
        console.log(res.data);
        //当输入框中没有内容时直接返回不作任何操作
        if (this.inputFood == "") {
          return;
        }
        this.showResult = true;
        this.showHistory = false;
        //this.showHistory=!this.showHistory;
        //将获取到的对象赋值给foodList
        this.foodList = res.data;

        //将输入框中的值存到localhost本地中去
        if (localStorage.food) {
          localStorage.food += "," + this.inputFood;
        } else {
          localStorage.food = this.inputFood;
        }
      });
    },
    getHis() {
      if (localStorage.food) {
        this.showHistory = true;
      } else {
        this.showHistory = false;
      }
    },
    //搜索历史的界面
    //获得本地中food对象
    getFindHistory() {
      //返回回来的字符串
      const foodStr = localStorage.food;
      //将字符串以 ， 分开，并且存储到数组中
      this.foodArr = foodStr.split(",");
      //将数组中的元素去重
      for (var i = 0; i < this.foodArr.length; i++) {
        if (this.After.indexOf(this.foodArr[i]) == -1) {
          this.After.push(this.foodArr[i]);
        }
      }
      // console.log(this.After.length);
    },
    delAll() {
      this.After = null;
      localStorage.removeItem("food");
    },
    delMsg(i) {
      this.After.splice(i, 1);
      // console.log(this.After);
      if(this.After.length==0){
        localStorage.removeItem("food");
      }
      else{
        for (let index = 0; index < this.After.length; index++) {
          this.localStr=this.After.join(",");
        }
        localStorage.food=this.localStr;
      }
    },
    interFood(v) {
      console.log(v);
      this.inputFood = v;
      this.findFood();
      this.showHistory = false;
      this.showResult = true;
    }
  },
  watch: {
    inputFood: function(val) {
      if (val == "") {
        this.showHistory = true;
        this.showResult = false;
        // this.showResult = !this.showResult;
        this.getFindHistory();
      }
    }
  }
};
</script>

<style scoped>
.inputFood {
  padding: 0.5rem 0.2rem 0.1rem;
  background-color: white !important;
  overflow: hidden;
}
.inputFood > input {
  box-sizing: border-box;
  width: 69%;
  float: left;
  font-size: 0.12rem;
  font-weight: bold;
  height: 0.3rem;
  background-color: #e4e4e4;
  border-radius: 0.02rem;
}
.inputFood > span {
  box-sizing: border-box;
  /* margin-left: 0.01rem; */
  width: 30%;
  float: right;
  height: 0.3rem;
  background-color: #3190e8;
  text-align: center;
  line-height: 0.3rem;
  border-radius: 0.02rem;
  color: #fff;
}
.inputList {
  margin: 0.1rem 0;
  overflow: hidden;
}
.inputList > span:nth-child(1) {
  float: left;
}
.inputList > span:nth-child(2) {
  float: right;
}
.inputList{
    padding: 0.1rem ;
    overflow: hidden;
     background-color: #fff;
    border-bottom:1px solid #e4e4e4;
}
/* .inputList>span:nth-child(1){
    float: left;
} */
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
.bottom1 {
  margin-top: -0.4rem;
  margin-left: 0.2rem;
}
.lip1,
.lip2,
.lip3 {
  margin-left: 0.45rem;
  font-size: 0.13rem;
}
.lip2 {
  margin-top: 0.05rem;
}
.lip3 {
  margin-top: 0.05rem;
}
.img1 {
  width: 0.4rem;
  margin-left: 0.2rem;
}
</style>