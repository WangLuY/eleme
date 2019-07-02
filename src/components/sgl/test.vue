<template>
  <div id="wrap">
    <div class="allcontent" v-if="show">
      <ul class="hotShangping">
        <li :key="i1" v-for="(value,i1) in obj" class="lis1 bianse" @click=" bianse(i1)">
          <a :href="'#a'+value.id">{{value.name}}</a>
          <!-- <span v-if="counta" style="">{{counta}}</span> -->
          <span v-if="nums[i1]" class="leftXS">{{nums[i1]}}</span>
        </li>
      </ul>
      <ul class="hotdetial">
        <li :key="i2" v-for="(value,i2) in obj" class="lis2" :id="'a'+value.id">
          <p class="hotdetial_top">
            <span>{{value.name}}</span>
            <span>{{value.description}}</span>
          </p>
          <div>
            <ul>
              <li :key="i3" v-for="(v,i3) in value.foods" class="lisdetial">
                <img
                  :src="'https://elm.cangdu.org/img/'+v.image_path"
                  alt
                  class="allfoodsImg"
                  @click="gofoods(v)"
                />
                <div class="lisdetialright">
                  <div @click="gofoods(v)">
                    <p id="xOrzp">
                      <span
                        :class="classB"
                        v-if="v.attributes.length>0 && v.attributes[0] && v.attributes[0].icon_color=='f07373'"
                      >{{v.attributes[0].icon_name}}</span>
                      <span
                        :class="classB"
                        v-if="v.attributes.length>0 && v.attributes[1] && v.attributes[1].icon_color=='f07373'"
                      >{{v.attributes[1].icon_name}}</span>
                      <span
                        :class="classA"
                        v-if="v.attributes.length>0 && v.attributes[1] && v.attributes[1].icon_color=='5ec452'"
                      >
                        <span>{{v.attributes[1].icon_name}}品</span>
                      </span>
                    </p>
                    <h3>
                      <p style="margin:0.1rem 0 0.1rem 0.1rem">{{v.name}}</p>
                    </h3>
                    <h6>
                      <p style="margin:0.1rem 0 0.1rem 0.1rem">{{v.description}}</p>
                      <p style="margin:0.1rem 0 0.1rem 0.1rem">
                        <span>月售{{v.month_sales}}份</span>
                        <span>好评率{{v.satisfy_rate}}%</span>
                      </p>
                    </h6>
                  </div>
                  <div class="ball"></div>
                  <span
                    v-if="v.activity"
                    style="border:1px solid rgb(240,115,115);border-radius:0.05rem;fontSize:0.1rem;color:rgb(241,136,79)"
                  >{{v.activity.image_text}}</span>
                  <p class="xPrice">
                    <span style="color:red">￥{{v.specfoods[0].price}}起</span>
                    <span
                      class="selectfoods"
                      v-if="v.specfoods.length>1"
                      @click="tanchuguige(v,v.specfoods[0].price)"
                    >规格</span>
                    <span v-else class="selectfoods1">
                      <span v-if="v.is_featured>0" @click.stop="delle(i2,i3)" class="jianhao">-</span>
                      <span v-if="v.is_featured>0">{{v.is_featured}}</span>
                      <span @click.stop="addd(i2,i3,$event)" class="jiahao">+</span>
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- 遮罩层 -->
    <div id="zhezhaoceng" v-if="showAllfoods"></div>
    <!-- 弹出框 -->
    <div id="xuanguige" v-if="showAllfoods">
      <p id="Fname">{{kobj.name}}</p>
      <p v-if="kobj.specfoods" id="Fguige">{{kobj.specfoods[0].name}}</p>
      <span
        class="Fguige1"
        v-for="(fv,fi) in kobj.specfoods"
        :key="fi"
        @click="foodsure(fv,fi)"
      >{{fv.specs_name}}</span>
      <p id="Fguige_last">
        <span>￥{{selfprice}}</span>
        <span @click="addgowuche(kobj,xiabiao)">加入购物车</span>
      </p>
    </div>
    <!-- 购物车 -->
    <div class="bottomgowu">
      <div class="gou00">
        <!-- <p>{{(goumoney).toFixed(2)}}</p> -->
        <p>{{(this.$store.state.totalprice).toFixed(2)}}</p>
        <!-- <p>配送费￥{{shopdata.float_delivery_fee}}</p> -->
        <p>配送费￥5</p>
      </div>
      <div class="haicha">
        <p class="classp1" v-if="this.$store.state.totalprice<20">还差￥20起送</p>
        <p class="classp2" v-if="this.$store.state.totalprice>=20">请结算</p>
      </div>
      <img
        src="../../assets/gouwuche.png"
        v-if="this.$store.state.totalprice<20"
        class="goshop"
        @click="clall"
      />
      <img src="../../assets/gouwuche.png" v-else class="goshopblue" @click="clall" />
      <div class="countnum" v-if="num">{{num}}</div>
      <!-- <div v-if="gounum" class="countnum">{{gounum}}</div> -->
    </div>
    <!-- 点击购物车时显示的 -->
    <div class="cargo" v-if="shopping && sk1.length>0">
      <p v-if="sk1.length>0 && shopping" class="pshop1">
        <span>购物车</span>
        <span @click="clearall(sk1)" class="clearall">清空</span>
      </p>
      <div class="cargoline" v-for="(y,z) in sk1" :key="z">
        <div>
          <span>{{y.name}}</span>
        </div>
        <div>
          <span v-if="y.specfoods.length==1 ">￥{{y.specfoods[0].price}}</span>
          <span v-if="y.specfoods.length>1 & elsesee">￥{{y.specfoods[0].price}}</span>
          <span v-if="y.specfoods.length>1 & ifsee">￥{{y.specfoods[1].price}}</span>
        </div>
        <span class="jiangou" @click.stop="dejian(y._id)">-</span>
        <span class="reduceadd">{{y.is_featured}}</span>
        <span class="jiagou" @click.stop="adjia(y._id)">+</span>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "shangpingleft",
  data() {
    return {
      xiabiao: "",
      data: "",
      shopId: "",
      datas: [],
      show: false,
      sunkai: [],
      selfId: "",
      xuanguize: true,
      clickId: "",
      aa: {},
      showAllfoods: false,
      foodsXuanze: {},
      count: 1,
      skArr: [],
      count1: 0,
      AA: [],
      kobj: {},
      elsesee: true,
      ifsee: false,
      classB: "ccb",
      classA: "cca",
      selfprice: 0,
      SV: 1,
      shopping: false
    };
  },
  created() {
    this.getHotpaipu();
  },
  computed: {
    obj() {
      return this.$store.state.obj;
    },
    //左边榜单显示数量
    nums() {
      var arr = [];
      for (var i = 0; i < this.$store.state.obj.length; i++) {
        var a = 0;
        for (var k = 0; k < this.$store.state.obj[i].foods.length; k++) {
          a += this.$store.state.obj[i].foods[k].is_featured;
        }
        // console.log(a);
        arr.push(a);
      }
      return arr;
    },
    // 购物车显示数量
    num() {
      var a = 0;
      for (var i = 0; i < this.$store.state.obj.length; i++) {
        for (var k = 0; k < this.$store.state.obj[i].foods.length; k++) {
          a += this.$store.state.obj[i].foods[k].is_featured;
        }
      }
      return a;
    },
    //显示总价
    zongjiage() {
      return this.$store.state.totalprice;
    },
    //显示购物车
    //点击购物车时显示所有订单
    sk1() {
      var ak = [];
      for (let i = 0; i < this.$store.state.obj.length; i++) {
        for (var k = 0; k < this.$store.state.obj[i].foods.length; k++) {
          if (this.$store.state.obj[i].foods[k].is_featured > 0) {
            ak.push(this.$store.state.obj[i].foods[k]);
          }
        }
      }
      return ak;
    }
  },
  methods: {
    //弹出购物车
    tanchuguige(v, price1) {
      this.kobj = v;
      this.selfprice = price1;
      this.showAllfoods = !this.showAllfoods;
    },
    //点击左边时，显示颜色
    bianse(a) {
      var bianse = document.getElementsByClassName("bianse");
      for (var i = 0; i < bianse.length; i++) {
        bianse[i].style.backgroundColor = "rgb(246,244,245)";
      }
      bianse[a].style.backgroundColor = "white";
    },
    //得到商铺id
    getAid() {
      this.aa = this.$store.state.shopId;
    },
    //选择规格中的food
    foodsure(v, index) {
      this.selfprice = v.price;
      this.xiabiao = index;
    },
    //加入购物车
    addgowuche(v, index) {
      v.is_featured++;
      this.$store.state.totalprice += v.specfoods[index].price;
      this.showAllfoods = !this.showAllfoods;
    },
    //本页面数据请求
    getHotpaipu() {
      console.log(this.$store.state.clickShopid);
      this.clickId = this.$store.state.clickShopid;
      const api =
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
        this.$store.state.selfId;
      this.$http({
        url: api,
        methods: "get"
      }).then(res => {
        this.datas = res.data;
        console.log(this.datas);
        this.show = true;
        this.$store.commit("spspshuju", res.data);
      });
    },
    //跳转到foods页面
    gofoods(v) {
      this.$router.push({
        name: "caipin",
        query: {
          foodrat: v.rating,
          miaosu: v.description,
          mingzi: v.name,
          yuesou: v.month_sales,
          pinglun: v.rating_count,
          haoping: v.satisfy_rate,
          tupian: v.image_path
        }
      });
    },
    //点击+时传下标
    addd(a, b, evt) {
      this.$store.commit("getindex", {
        a: a,
        b: b
      });

      var jiahaoObj = document.getElementsByClassName("jiahao");
      var $ball = document.getElementsByClassName("ball");
      //   document.body.onclick = function(evt) {
      //     console.log(evt.pageX, evt.pageY);
        $ball[b].style.top = evt.pageY + "px";
        $ball[b].style.left = evt.pageX + "px";
        $ball[b].style.transition = "left 0s, top 0s";
        setTimeout(() => {
          $ball[b].style.top = window.innerHeight + "px";
          $ball[b].style.left = "0px";
          $ball[b].style.transition = "left 1s linear, top 1s ease-in";
        }, 20);
      

      //   };
      //   this.chaqian=this.shopdata.float_minimum_order_amount-this.$store.state.totalprice;
    },
    //点击-时的
    delle(a, b) {
      this.$store.commit("getdele", {
        a: a,
        b: b
      });
      // this.chaqian=this.shopdata.float_minimum_order_amount-this.$store.state.totalprice;
    },
    //点击购物车时显示所有订单
    clall() {
      this.shopping = !this.shopping;
    },
    adjia(a) {
      this.$store.commit("goujia", a);
    },
    dejian(b) {
      this.$store.commit("goujian", b);
    },
    clearall(s) {
      for (var i = 0; i < s.length; i++) {
        s[i].is_featured = 0;
      }
      this.$store.state.totalprice = 0;
      this.shopping = false;
      this.chaqian = 20;
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.ball {
  width: 12px;
  height: 12px;
  background: blue;
  border-radius: 50%;
  position: fixed;
  transition: left 1s linear, top 1s ease-in;
  z-index: 10;
  left: -1rem;
  top:0;
}
.leftXS {
  background-color: #ff461d;
  width: 0.2rem;
  height: 0.2rem;
  font-size: 0.2rem;
  position: absolute;
  line-height: 0.2rem;
  text-align: center;
  top: 0.26rem;
  right: 0;
  color: white;
  border-radius: 50%;
}
::-webkit-scrollbar {
  display: none;
}
#wrap {
  /* overflow: hidden; */
}
.content {
  width: 3.75rem;
  /* overflow: hidden; */
}
.hotShangping {
  width: 1rem;
  /* background-color: #fff; */
  overflow: hidden;
  float: left;
  overflow-y: scroll;
  height: 65vh;
}
.hotdetial {
  width: 2.75rem;
  float: right;
  overflow-y: scroll;
  height: 65vh;
  overflow-x: hidden;
}
.lis1 {
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
}
.allfoodsImg {
  width: 1rem;
}
.lis2 {
  width: 2.75rem;
  overflow: hidden;
}
.hotdetial_top {
  width: 100%;
  margin: 0.1rem 0 0.1rem 0.1rem;
}
.hotdetial_top > span:nth-child(1) {
  color: black;
  font-size: 0.2rem;
}
.hotdetial_top > span:nth-child(2) {
  color: #999;
  font-size: 0.1rem;
}
.lisdetial {
  background-color: #fff;
  border: 1px solid #f8f8f8;
  position: relative;
  overflow: hidden;
}
.lisdetialright {
  width: 2.05rem;
  float: right;
}
.allfoodsImg {
  width: 0.6rem;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}
.selectfoods,
.selectfoods1 {
  float: right;
  /*  */
}
.selectfoods {
  background-color: rgb(49, 143, 231);
  margin-right: 0.1rem;
  padding: 0.05rem;
  border-radius: 0.05rem;
  color: white;
}
.selectfoods1 {
  font-size: 0.2rem;
}
/* 遮罩层 */
#zhezhaoceng {
  width: 3.75rem;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: gray;
  opacity: 0.6;
  z-index: 10;
}
/* 选规格部分 */
#xuanguige {
  width: 2.5rem;
  height: 2rem;
  background-color: white;
  border-radius: 0.1rem;
  /* border: 1px solid red; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 113;
}
#Fname {
  width: 2.5rem;
  font-size: 0.2rem;
  text-align: center;
}
#Fguige {
  font-size: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  margin-left: 0.1rem;
}
.Fguige1 {
  border: 1px solid lightgray;
  margin-left: 0.1rem;
  border-radius: 4px;
  color: #333;
}
#Fguige_last {
  margin-top: 0.4rem;
  background-color: #f9f9f9;
  height: 0.5rem;
  padding: 0.04rem 0;
}
#Fguige_last > span:nth-child(1) {
  margin-left: 0.1rem;
  color: red;
  height: 0.5rem;
  line-height: 0.5rem;
}
#Fguige_last > span:nth-child(2) {
  float: right;
  background-color: #3199e8;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-right: 0.1rem;
  border-radius: 10px;
  color: white;
}
/* 新品或招牌 */
.ccb {
  color: red;
  border: 1px solid orangered;
  border-radius: 0.05rem;
  float: right;
  margin-right: 0.1rem;
  font-size: 0.08rem;
  padding: 0.01rem;
}
.cca {
  width: 0.5rem;
  height: 0.4rem;
  background-color: rgb(76, 219, 101);
  color: white;
  font-size: 0.14rem;
  text-align: center;
  transform: rotateZ(-45deg);
  position: absolute;
  top: -0.15rem;
  left: -0.2rem;
}
.cca span {
  display: block;
  /* line-height: 0.4rem; */
  font-size: 0.1rem;
  padding-top: 0.25rem;
  /* transform: rotateZ(45deg); */
}
/* 显示价格样式 */
.xPrice {
  margin: 0.1rem 0;
}
/* 加号样式 */
.jiahao {
  border-radius: 50%;
  /* padding: 0.05rem; */
  width: 0.2rem;
  height: 0.2rem;
  display: block;
  margin-right: 0.1rem;
  text-align: center;
  line-height: 0.2rem;
  float: right;
  color: white;
  background-color: rgb(49, 143, 231);
  border: 1px solid rgb(49, 143, 231);
}
/* 减号样式 */
.jianhao {
  border-radius: 50%;
  width: 0.2rem;
  height: 0.2rem;
  text-align: center;
  line-height: 0.2rem;
  display: block;
  margin-right: 0.05rem;
  float: left;
  color: rgb(49, 143, 231);
  border: 1px solid rgb(49, 143, 231);
}
/* 购物车样式 */
.bottomgowu {
  width: 100%;
  height: 0.7rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgb(66, 65, 70);
  z-index: 10;
}
.goshop {
  width: 10%;
  background-color: rgb(66, 65, 70);
  border-radius: 50%;
  border: 0.05rem solid gray;
  padding: 0.05rem;
  position: absolute;
  top: -0.15rem;
  left: 0.1rem;
}

.goshopblue {
  width: 10%;
  background-color: rgb(49, 143, 231);
  border-radius: 50%;
  border: 0.05rem solid gray;
  padding: 0.05rem;
  position: absolute;
  top: -0.15rem;
  left: 0.1rem;
}
.bottomgowu > div {
  float: left;
}
.gou00 {
  width: 70%;
}
.gou00 > p {
  margin-left: 30%;
  color: white;
}
.gou00 > p:nth-child(1) {
  margin-top: 0.15rem;
  font-size: 0.2rem;
}
.gou00 > p:nth-child(2) {
  font-size: 0.12rem;
}
.haicha {
  width: 30%;
  height: 0.7rem;
  background-color: rgb(80, 81, 83);
  /* background-color: red; */
  font-size: 0.14rem;
  color: white;
  text-align: center;
  line-height: 0.7rem;
}
.classp1 {
  background-color: rgb(80, 81, 83);
}
.classp2 {
  background-color: rgb(75, 218, 100);
}
.countnum {
  width: 0.25rem;
  height: 0.25rem;
  /* padding: 0.03rem; */
  position: absolute;
  line-height: 0.25rem;
  text-align: center;
  top: -0.2rem;
  left: 0.5rem;
  font-size: 0.2rem;
  background-color: red;
  border-radius: 50%;
}
/* 点击后显示的购物车样式 */
.cargo {
  width: 100%;
  max-height: 2.8rem;
  position: fixed;
  left: 0;
  bottom: 0.7rem;
  overflow-y: scroll;
  z-index: 7;
  background-color: white;
}
.cargoline {
  width: 100%;
  height: 0.35rem;
  /* background-color: yellow; */
}
.cargoline > div {
  float: left;
  height: 0.35rem;
}
.cargoline > div:nth-child(1) {
  width: 65%;
  line-height: 0.35rem;
  font-size: 0.16rem;
  font-weight: bold;
  background-color: #fff;
}
.cargoline > div:nth-child(2) {
  width: 15%;
  font-size: 0.16rem;
  /* border: 1px solid red; */
  color: red;
  font-weight: bold;
  box-sizing: border-box;
  /* background-color:yellow; */
  line-height: 0.35rem;
}
.cargoline > div:nth-child(3) {
  width: 20%;
  background-color: lightblue;
  line-height: 0.35rem;
}
.jiangou {
  /* margin-right: 0.05rem; */
  border-radius: 50%;
  font-size: 0.15rem;
  padding: 0.05rem;
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  display: block;
  margin-right: 0.05rem;
  float: left;
  color: white;
  margin-top: 0.05rem;
  background-color: rgb(49, 143, 231);
}
.jiagou {
  border-radius: 50%;
  padding: 0.05rem;
  display: block;
  font-size: 0.15rem;
  margin-right: 0.05rem;
  margin-top: 0.05rem;
  float: right;
  color: white;
  background-color: rgb(49, 143, 231);
}
.reduceadd {
  line-height: 0.35rem;
}
.pshop1 {
  height: 0.35rem;
  line-height: 0.35rem;
  background-color: rgb(239, 239, 239);
}
.pshop1 span:nth-child(2) {
  float: right;
  margin-right: 0.1rem;
}
</style>
