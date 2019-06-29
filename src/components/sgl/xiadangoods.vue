<template>
  <div id="xiadangoods">
    <!-- 左半部分 -->
    <div id="left">
      <ul>
        <li v-for="(item,index) in datas" :key="index">
          <a :href="'#top'+index">{{item.name}}</a>
          <!-- <ul>
            <li v-for="(a,b) in item.foods" :key="b">{{a.name}}</li>
          </ul>-->
        </li>
      </ul>
    </div>
    <!-- 右半部分 -->
    <div id="right">
      <ul>
        <li v-for="(items,index) in datas" :key="index">
          <!-- 分类栏 -->
          <div class="top" :id="'top'+index">
            <span>{{items.name}}</span>
            <span>{{items.description}}</span>
          </div>
          <ul id="ul1">
            <li v-for="(item, i) in items.foods" :key="i" id="det" >
              <img :src="'https://elm.cangdu.org/img/'+item.image_path" id="imgSrc" @click="gofoods(item)">
              <div id="detR">
                <p>{{item.name}}</p>
                <p>{{item.description}}</p>
                <p>
                  <span @click="gofoods(item)">月售{{item.month_sales}}份</span>
                  <span @click="gofoods(item)">好评率{{item.satisfy_rate}}%</span>
                </p>
                <p @click="gofoods(item)" v-if="item.activity" id="tel">{{item.activity.image_text}}</p>
                <p>
                  <span @click="gofoods(item)" id="money">￥{{item.specfoods[0].price}}</span>
                  <span @click="gofoods(item)">起</span>
                </p>
                <p @click="gofoods(item)"
                  id="tri"
                  v-if="item.attributes.length > 0 && item.attributes[0] && item.attributes[0].icon_name && item.attributes[0].icon_color=='5ec452'"
                >
                  <span @click="gofoods(item)">{{item.attributes[0].icon_name}}品</span>
                </p>
                <span 
                  v-if="item.attributes.length > 0 && item.attributes[1] && item.attributes[1].icon_name"
                  id="sign"
                >{{item.attributes[1].icon_name}}</span>

                
                <p @click="xuanzhe()" v-if="item.specfoods[1]" id="choose">选规格</p>


                <!-- 加减数量 -->
                <p
                  @click="reduce(item.specfoods[0].price,i,index)"
                  v-if="!item.specfoods[1] && item.__v"
                  id="reduce"
                >-</p>
                <p v-if="!item.specfoods[1] && item.__v" id="count">{{datas[index].foods[i].__v}}</p>
                <p
                  @click="add(item.specfoods[0].price,i,index)"
                  v-if="!item.specfoods[1]"
                  id="add"
                >+</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div id="gowuche">
      <div id="gwc">
        <div>
          <p id="gwc_left_1">
            <img src="../../assets/gouwuche.png" alt>
          </p>
          <p v-if="total" id="gwc_left_2">{{total}}</p>
        </div>
        <div id="gwc_right">
          <div id="gwc_right_left">
            <span id="allprice">￥{{this.price}}</span>
            <p id="const">配送费￥5</p>
          </div>
        </div>
        <p id="gwc_right_right" v-if="this.price-20<0">还差￥{{Math.abs(this.price-20)}}起送</p>
        <p id="gwc_right_right2" v-else>去结算</p>
      </div>
    </div>
     <div id="ball"></div>
  </div>
</template>
<script>
export default {
  name: "xiadangoods",
  data() {
    return {
      Spadd: {},
      datas: [],
      price: 0.0,
      total:0
    };
  },
  created() {
    this.getSpadd();
    this.getAll();
  },
  methods: {
    fanhui() {
      this.$router.back();
    },
    getSpadd() {
      this.Spadd = this.$store.state.QJ;
      console.log(this.Spadd);
    },
    getAll() {
      this.$http({
        url:
          "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
          this.Spadd.id,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(url);
        this.datas = res.data;
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
    // 点击添加食品
    add(price, index, i) {
      this.datas[i].foods[index].__v += 1; //添加数量
      this.total+=1;
      // datas[i].foods[index].specfoods[0].original_price += price;//添加价钱
      this.price += price; //记录总价
      console.log(this.price);
      var $ball = document.getElementById('ball');
    document.body.onclick = function (evt) {
        console.log(evt.pageX,evt.pageY)
        $ball.style.top = evt.pageY+'px';
        $ball.style.left = evt.pageX+'px';
        $ball.style.transition = 'left 0s, top 0s';
        setTimeout(()=>{
            $ball.style.top = window.innerHeight+'px';
            $ball.style.left = '0px';
            $ball.style.transition = 'left 1s linear, top 1s ease-in';
        }, 20)
    }
    },
    // 点击减少食品
    reduce(price, index, i) {
      this.datas[i].foods[index].__v -= 1; //添加数量
      this.total-=1;
      // datas[i].foods[index].specfoods[0].original_price -= price;//添加价钱
      this.price -= price; //记录总价
      console.log(this.price);
    },
    xuanzhe() {}
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#ball {
            width:12px;
            height:12px;
            background: #5EA345;
            border-radius: 50%;
            position: fixed;
            transition: left 1s linear, top 1s ease-in;
        }
#xiadangoods {
  width: 3.75rem;
  position: fixed;
  left: 0;
  top: 0.01rem;
}
#left {
  float: left;
  margin-top: 1.8rem;
  width: 0.8rem;
  overflow: hidden;
  /* 上下导航条 */
  overflow: scroll;
  /* 去掉下导航条 */
  overflow: auto;
  /* 左边div的长度 */
  height: 4.38rem;
  background-color: lightgray;
}
#left ul li {
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.16rem;
  border-bottom: 0.01rem solid gray;
  padding-left: 0.03rem;
}
#left ul li a {
  color: black;
}
.top {
  padding: 0.17rem 0.12rem;
  background-color: lightgray;
}
.top > span:first-child {
  font-size: 0.18rem;
}
.top > span:nth-child(2) {
  font-size: 0.14rem;
}
#ul1 > li {
  padding: 0.13rem 0.1rem;
  overflow: hidden;
  position: relative;
}
#right {
  position: absolute;
  right: 0;
  top: 1.7rem;
  float: right;
  margin-top: 0.1rem;
  width: 2.95rem;
  overflow: hidden;
  overflow: scroll;
  overflow: auto;
  height: 4.38rem;
  background-color: white;
}
#imgSrc {
  float: left;
  width: 0.8rem;
}
#det {
  border-bottom: 0.01rem solid gray;
}
#detR {
  float: left;
  margin-left: 0.03rem;
}
#detR > p:nth-child(1) {
  font-size: 0.19rem;
  font-weight: bold;
  margin-bottom: 0.08rem;
  width: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#detR > p:nth-child(2) {
  font-size: 0.14rem;
  color: gray;
  margin-bottom: 0.08rem;
}
#detR > p:nth-child(3) {
  font-size: 0.14rem;
  margin-bottom: 0.08rem;
}
#tel {
  padding: 0.02rem;
  display: inline-block;
  font-size: 0.14rem;
  color: red;
  border: 0.01rem solid red;
  border-radius: 0.03rem;
  margin-bottom: 0.08rem;
}
#money {
  font-size: 0.14rem;
  color: orange;
}
#tri {
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgb(50, 199, 50);
  transform: rotateZ(-45deg);
  position: absolute;
  top: -0.25rem;
  left: -0.25rem;
}
#tri > span {
  font-size: 0.14rem;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0.1rem;
}
#sign {
  color: red;
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  border: 0.01rem solid red;
  width: 0.35rem;
  text-align: center;
  border-radius: 0.03rem;
}
#add,
#choose,
#reduce,
#count {
  position: absolute;
  bottom: 0.1rem;
  right: 0.1rem;
  color: white;
  background-color: blue;
}
#add,
#reduce,
#count {
  border-radius: 50%;
  width: 0.15rem;
  height: 0.15rem;
  text-align: center;
  line-height: 0.15rem;
}
#reduce {
  right: 0.5rem;
}
#count {
  right: 0.3rem;
  background-color: white;
  color: black;
}
#choose {
  width: 0.55rem;
  height: 0.22rem;
  line-height: 0.22rem;
  text-align: center;
  border-radius: 0.05rem;
}
/* 去掉滚动条 */
::-webkit-scrollbar {
  display: none;
}
#shopcar {
  height: 0.5rem;
  width: 3.75rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border: 0.01rem solid red;
}

#gowuche {
  position: fixed;
  left: 0;
  top: 6.2rem;
  width: 3.75rem;
  height: 0.5rem;
  background-color: black;
}
#gwc {
  position: relative;
}
.gwc_leftA {
  position: fixed;
  left: 0.2rem;
  top: 6rem;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: black;
}
.gwc_leftB {
  position: fixed;
  left: 0.2rem;
  top: 6rem;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: blue;
}
#gwc_left_1 {
  position: absolute;
  top: 0.12rem;
  left: 0.1rem;
}
#gwc_left_2 {
  position: absolute;
  left: 0.44rem;
  width: 0.2rem;
  height: 0.2rem;
  padding: 0.02rem;
  background-color: red;
  color: white;
  border-radius: 50%;
  line-height: 0.2rem;
  text-align: center;
}
#gowuche img {
  width: 0.4rem;
}
#gwc_left p:nth-child(2) {
  font-size: 0.15rem;
  color: white;
}
#gwc_right {
  position: absolute;
  left: 1rem;
  color: white;
}
#gwc_right_left {
  float: left;
}
#allprice {
  font-size: 0.2rem;
  color: white;
  margin-left: 0.1rem;
}
#const {
  margin-left: 0.15rem;
  color: white;
  margin-top: 0.1rem;
  font-size: 0.1rem;
}
#gwc_right_right {
  float: right;
  color: white;
  background-color: gray;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.15rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  width: 1rem;
  text-align: center;
}
#gwc_right_right2 {
  text-align: center;
  width: 1rem;
  float: right;
  color: white;
  background-color: green;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.2rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
</style>
