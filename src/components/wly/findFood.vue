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
      <input v-model="inputFood" type="text" placeholder="请输入商家或美食名称">
      <span @click="findFood()">提交</span>
    </div>

    <div class="bottom">
      <ul v-if="showResult">
        <li class="li1" :key="i" v-for="(v,i) in foodList">
          <router-link tag="p" :to="'/shop?id='+v.id">
            <img class="img1" :src="'https://elm.cangdu.org/img/'+v.image_path" alt>
            <div class="bottom1">
              <p class="lip1">{{v.name}}</p>
              <p class="lip2">
                <span v-if="v.recent_order_num">月售</span>
                {{v.recent_order_num}}
                <span v-if="v.recent_order_num">单</span>
              </p>
              <p class="lip3">w
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
      <router-view v-show="showHistory"></router-view>
      <div id="menu">
      <router-link to="/family" tag="div">
        <img  src="../img/SSS.png" alt />
        <p>外卖</p>
      </router-link>
      <div>
        <img src="../img/zhinanzhen1.png" alt />
        <p>搜索</p>
      </div>
       <router-link to="/dingdan" tag="div">
         <img  src="../img/dingdan1.png" alt />
         <p>订单</p>
      </router-link>
       <router-link to="/wode" tag="div">
          <img src="../img/touxiang2.png" alt />
        <p>我的</p>
      </router-link>
    </div>
    </div>
</template>

<script>
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
      showResult: false
    };
  },
  created() {
    this.getHis();
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
        //当输入框中没有内容时直接返回不作任何操作
        if (this.inputFood == "") {
          return;
        }
        this.showResult = true;
        this.showHistory = false;
        // this.showHistory=!this.showHistory;
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
    }
  },
  watch: {
    inputFood: function(val) {
      if (val == "") {
        this.showHistory = true;
        this.showResult = false;
      }
    }
  }
};
</script>

<style scoped>
.top {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  line-height: 0.5rem;
  text-align: center;
  background-color: #f2f2f2;
}
.top_t {
  background-color: #3190e8;
  font-size: 0.2rem;
}
.top_t > img {
  position: absolute;
  left: 0;
  width: 0.5rem;
}
.top_t > span {
  color: #fff;
}
.inputFood {
  margin: 0.5rem 0.2rem 0.1rem;
}
.inputFood > input {
  box-sizing: border-box;
  width: 69%;
  float: left;
  font-size: 0.12rem;
  font-weight: bold;
  height: 0.3rem;
  background-color: white;
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
.bottom1{
margin-top: -0.4rem;
margin-left: 0.2rem;
}
.lip1,.lip2,.lip3{
margin-left: 0.45rem;
font-size: 0.13rem
}
.lip2{
margin-top: 0.05rem;
}
.lip3{
margin-top: 0.05rem;
}
.img1{
width:0.4rem;
margin-left: 0.2rem;
}
</style>