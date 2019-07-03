<template>
  <div>
    <div class="top">
      <p class="top_t">
        <img @click="back()" src="./imgs/foot/back.png" alt />
        <span>{{this.$route.query.name}}</span>
      </p>

      <div class="top_b">
        <!-- 分类 -->
        <el-cascader
          :placeholder="this.$route.query.name"
          class="fenlei"
          :options="fenleiOp"
          :props="fenleiParams"
          :show-all-levels="false"
          clearable
          @change="getcaixi"
        >
          <template class="list_temp" slot-scope="{ node, data }">
            <img class="shangjialogo" src="./imgs/shangjia/shangjia.png" alt />
            <span>{{ data.name }}</span>
            <span>({{ data.count}})</span>
          </template>
        </el-cascader>
        <!-- 排序 -->
        <el-cascader v-model="paixus" @change="getId" placeholder="排序" :options="paixuoptions">
          <!-- <router-link slot-scope="{ node, data }" to="" tap="li">{{data.label}}</router-link> -->
          <p slot-scope="{ node, data }">{{data.label}}</p>
        </el-cascader>
        <!-- 筛选 -->
        <div @click="xs_yc()" class="shaixuan">筛选</div>
        <div class="backGround">
          <div v-show="xy" id="sai_x">
            <ul>
              <li id="sai_1">配送方式</li>
              <li id="sai_2">
                <input type="checkbox" />蜂鸟配送
              </li>
              <li id="sai_3">商家属性(可以多选)</li>
            </ul>
            <ul id="sai_ul">
              <li id="sai_4" :key="i" v-for="(v,i) in shux">
                <input type="checkbox" />
                {{v.name}}
              </li>
            </ul>
          </div>
          <div v-show="xy" id="wei_b">
            <span @click="qk_qk()" id="qing_k">清空</span>
            <span @click="xs_yc()" id="que_d">确定</span>
          </div>
        </div>
      </div>
    </div>
    <div id="space"></div>
    <!-- 商家列表 -->
    <router-view ref="mychild"></router-view>
  </div>
</template>
<script>
export default {
  name: "shangjialist",
  data() {
    return {
      xy: false,
      // qk:true,
      peisong: [],
      shux: [],
      paixus: [],
      //定义对象，存储所有的商家信息
      resMsg: [],
      //定义对象，存储所有的商铺分类列表
      resList: [],
      //经纬度对象
      LaO: {},
      //获取排序方式的id
      PaixuID: "",
      fenleiOp: [],
      fenleiParams: {
        label: "name",
        value: "id",
        children: "sub_categories"
      },
      paixuoptions: [
        {
          label: "起送价",
          value: "1"
        },
        {
          label: "配送速度",
          value: "2"
        },
        {
          label: "评分",
          value: "3"
        },
        {
          label: "智能排序",
          value: "4"
        },
        {
          label: "距离最近",
          value: "5"
        },
        {
          label: "销量最高",
          value: "6"
        }
      ],
      shaixuaioption: [
        {
          label: "配送方式",
          value: "蜂鸟转送"
        },
        {
          label: "商家属性(可以多选)",
          value: ""
        }
      ]
    };
  },
  created() {
    this.getRest();
    this.getrestList();
    this.getLaandLo();
    this.getshux(); 
  },
  methods: {
    //返回上一级路由
    back() {
      this.$router.back();
    },
    xs_yc() {
      this.xy = !this.xy;
    },
    qk_qk() {
      if (this.qk1 == "true") {
        this.qk = false;
        this.qk1 = false;
      } else {
        this.qk = "";
        this.qk1 = "true";
      }
    },
    //获取配送方式
    getPeisong() {
      const api =
        "https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes";
      this.$http.get(api).then(res => {
        this.peisong = res.data;
      });
    },
    //获得商家活动属性列表
    getshux() {
      const api =
        "https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes";
      this.$http.get(api).then(res => {
        this.shux = res.data;
      });
    },
    //筛选
    xs_yc() {
      this.xy = !this.xy;
    },
    qk_qk() {
      if (this.qk1 == "true") {
        this.qk = false;
        this.qk1 = false;
      } else {
        this.qk = "";
        this.qk1 = "true";
      }
    },
    //获得经纬度详情
    getLaandLo() {
      const api =
        "https://elm.cangdu.org/v2/pois/" +
        this.$store.state.latitude +
        "," +
        this.$store.state.longitude;
      this.$http.get(api).then(res => {
        //将获得的对象赋值
        // console.log("得到的经纬度的对象"+res.data.name);
        this.LaO = res.data;
      });
    },
    //获得所有商家的信息
    getRest() {
      // const api ="https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=1"
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.$route.query.latitude +
        "&longitude=" +
        this.$route.query.longitude;
      // const api="https://elm.cangdu.org/shopping/v2/restaurant/category";

      this.$http.get(api).then(res => {
        // console.log("这是所有商家信息")
        // console.log(res.data);
        // console.log("嘿嘿="+this.$store.state.latitude);
        this.resMsg = res.data;
      });
    },
    //获取所有商铺分类列表
    getrestList() {
      const api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
      this.$http.get(api).then(res => {
        // console.log(res.data);
        this.fenleiOp = res.data;
      });
    },
    getId(value) {
      this.PaixuID = value[0];
      // console.log("获取点击的id值"+value[0]);
      this.$store.commit("savePaixuID", this.PaixuID);

      this.$refs.mychild.getshop();
    },
    getcaixi(name) {
      console.log(name);
    }
  }
};
</script>

<style  >
#space {
  height: 1rem;
}
.top {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  line-height: 0.5rem;
  text-align: center;
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
.top_b {
  list-style-type: none;
  display: flex;
  /* justify-content: !important; */
}
.shaixuan {
  width: 50%;
  /* border: 1px solid #eff0f3; */
  height: 0.34rem;
  line-height: 0.34rem;
  color: #c2c6cd;
  background-color: #fff;
}
.backGround{
  background-color:#fff;
  position: absolute;
  left: 0;
  top: 0.9rem;
  width: 100%;
  box-sizing: border-box;
  /* border: 1px solid; */
}
.top_b .el-input__inner {
  /* border: 1px solid #DCDFE6; */
  border-radius: 0;
  text-align: center;
}
.top_b .el-scrollbar__thumb {
  display: none;
}
.popper__arrow {
  display: none;
}
.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  display: none;
}
.el-scrollbar__view,
.el-cascader-menu__list {
  /* background-color: black; */
  padding: 0;
}
.el-cascader-menu__wrap,
.el-scrollbar__wrap {
  height: 4rem;
}
#cascader-menu-1132-0 {
  width: 50%;
}
.el-popper,
.el-cascader__dropdown {
  border-radius: 0;
  width: 100%;
  left: 0 !important ;
  top: 0.78rem !important;
}
.el-scrollbar__thumb,
.el-scrollbar__bar {
  display: none;
}
/* 设置li */
.el-cascader-node {
  margin-top: 0.05rem;
}
.list_temp {
  position: relative;
}
.shangjialogo {
  position: absolute;
  left: 0;
  width: 0.2rem;
}
.el-select {
  /* background-color: #000; */
  height: 0.4rem;
  top: -0.05rem !important;
}
.el-select > .el-input,
.el-select > .el-input--suffix {
  /* background-color:red; */
  /* border-radius: 50%; */
  height: 100%;
}
.el-select .el-input__inner {
  /* background-color: red; */
  /* border-radius: 50%; */
  height: 100%;
}
#sai_1,
#sai_3 {
  color: #4e4e4e;
  font-size: 0.13rem;
  margin-top: 0.1rem;
  margin-left: 0.12rem;
  text-align: left;
}
#sai_4{
  float: left;
  color: #4e4e4e;
  font-size: 0.11rem;
  margin-top: 0.1rem;
  margin-left: 0.12rem;
  margin-bottom: 0.1rem;
  width: 30vw;
  height: 0.3rem;
  border: #e4e4e4 0.01rem solid;
  line-height: 0.3rem;
  text-align: center;
}
#sai_2 {
  color: #4e4e4e;
  font-size: 0.11rem;
  margin-top: 0.1rem;
  margin-left: 0.12rem;
  margin-bottom: 0.1rem;
  width: 30vw;
  height: 0.3rem;
  border: #e4e4e4 0.01rem solid;
  line-height: 0.3rem;
}
#sai_ul {
  background-color: #fff;
  overflow: hidden;
}
#wei_b{
  display: flex;
  justify-content: space-around;
  background-color: #F1F1F1;
}
#qing_k{
 width:1.5rem;  
 background-color: #fff;
 margin: 0.2rem 0;
 box-sizing: border-box;
 border-radius: 0.05rem;
}
#que_d{
  width:1.5rem;
  color: #fff;
  background-color: #78CE7F;
  margin: 0.2rem 0;
  box-sizing: border-box;
  border-radius: 0.05rem;
}
</style>