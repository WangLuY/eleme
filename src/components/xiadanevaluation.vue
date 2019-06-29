<template>
  <div id="wrap">
    <div class="topin">
      <div class="to-left">
        <p>{{allrates}}</p>
        <p>综合评价</p>
        <p>
          高于周边商家
          <span>{{rates}}%</span>
        </p>
      </div>
      <div class="to-right">
        <div>
          <span>服务态度</span>
          <span>
            <el-rate
              v-model="server" disabled :show-score="seen" text-color="#ff9900" class="ratesss"></el-rate>
          </span>
        </div>
        <div>
          <span>菜品评价</span>
          <span>
            <el-rate
              v-model="caipin"
              disabled
              :show-score="seen"
              text-color="#ff9900"
              class="ratesss"
            ></el-rate>
          </span>
        </div>
        <div>
          <span>送达时间 {{deliver}} 分钟</span>
        </div>
      </div>
      <div class="v-comments">
        <ul>
          <li v-for="(v,i) in allcomments" :key="i">
            {{v.name}}
            ({{v.count}})
          </li>
        </ul>
      </div>
      <div class="detailcon">
          <div class="pinglun" v-for="(v,i) in detailcomments" :key="i">
              <div class="ping-zuo">
          <div class="border">
            <img v-if="v.avatar" :src="'https://fuss10.elemecdn.com/'+v.avatar+'.jpeg'" alt>
            <img v-else src="./../assets/orderF.png" alt>
          </div>
        </div>
        <div class="ping-mid">
               <p>{{v.username}}</p>
          <p class="stars">
            <el-rate v-model="v.rating_star" disabled :show-score="nosee" text-color="#ff9900" score-template="{value}" class="aass"></el-rate>
            <span v-if="v.time_spent_desc">{{v.time_spent_desc}}</span>
          </p>
          <div class="midimg" v-if="v.item_ratings">
            <div class="taotu">
              <div class="midgp" v-for="(k,b) in v.item_ratings" :key="'a'+b">
                <img
                  v-if="k.image_hash"
                  :src="'https://fuss10.elemecdn.com/'+k.image_hash+'.jpeg'"
                  class="imggg"
                >
                <!-- <span>{{k.food_name}}</span> -->
              </div>
            </div>
            <div class="baoguo">
              <div class="midgp2" v-for="(k,b) in v.item_ratings" :key="'a'+b">
                <span>{{k.food_name}}</span>
              </div>
            </div>
          </div>
          <p>
            <span></span>
            <span></span>
          </p>
        </div>
        <div class="ping-bot">
          <p>{{v.rated_at}}</p>
        </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "xiadanevaluation",
  data() {
    return {
      nosee: false,
      seen: true,
      Spadd: {},
      datas: [],
      allrates: "",
      rates: "",
      server: "",
      caipin: "",
      deliver: "",
      allcomments: "",
      detailcomments: ""
    };
  },
  created() {
    this.getSpadd();
    // this.Spadd = this.$route.query;
    this.getScore();
    // console.log(this.$route.query.id);
    this.getComment();
    this.getMsg();
  },
  methods: {
    getSpadd() {
      this.Spadd = this.$store.state.QJ;
      //   console.log(this.Spadd);
    },
    getScore() {
      const api =
        "https://elm.cangdu.org/ugc/v2/restaurants/" +
        this.Spadd.id +
        "/ratings/scores";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // this.datas = res.data;
        // console.log(this.datas)
        this.rates = parseInt((res.data.compare_rating * 100).toFixed(1));
        this.allrates = parseInt(res.data.overall_score.toFixed(1));
        this.server = parseInt(res.data.service_score.toFixed(1));
        this.caipin = parseInt(res.data.food_score.toFixed(1));
        this.deliver = parseInt(res.data.deliver_time);
        // console.log(this.deliver);
      });
    },
    getComment() {
      const api =
        "https://elm.cangdu.org/ugc/v2/restaurants/" +
        this.Spadd.id +
        "/ratings/tags";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.allcomments = res.data;
        console.log(this.allcomments);
      });
    },
    getMsg() {
      const api =
        "https://elm.cangdu.org/ugc/v2/restaurants/" +
        this.Spadd.id +
        "/ratings?offset=0&limit=10";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.detailcomments = res.data;
        // console.log(this.detailcomments);
      });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#wrap {
  width: 100%;
  position: fixed;
    left: 0;
    top: 0.3rem;
    /* overflow: hidden; */
    /* overflow-y:scroll; */
}
.topin {
  margin-top: 1.5rem;
  width: 100%;
  border-top: 1px solid lightgray;
  box-sizing: border-box;
}
.topin > div {
  float: left;
}
.to-left {
  width: 40%;
  height: 0.8rem;
  padding-top: 0.05rem;
  background-color: #fff;
  text-align: center;
}
.to-left p:nth-child(1) {
  font-size: 0.25rem;
  color: orangered;
}
.to-left p:nth-child(2) {
  font-size: 0.16rem;
  color: black;
}
.to-left p:nth-child(3) {
  font-size: 0.12rem;
  color: gray;
}
.to-right {
  width: 60%;
  height: 0.8rem;
  padding-top: 0.05rem;
  background-color: #fff;
  font-size: 0.16rem;
}
.to-right > div > span {
  float: left;
}
.v-comments {
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  padding-bottom: 0.1rem;
}
.v-comments ul {
  padding-left: 0.06rem;
}
.v-comments ul li {
  display: block;
  float: left;
  margin-top: 0.1rem;
  margin-right: 2%;
  font-size: 0.15rem;
  border-radius: 0.1rem;
  padding: 0.06rem;
  background-color: lightblue;
}
.detailcon {
  background-color: #fff;
  width: 100%;
}
.pinglun {
  width: 3.75rem;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.pinglun > div {
  float: left;
  margin-top: 0.1rem;
}
.ping-zuo {
  width: 15%;
}
.border {
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.ping-zuo img {
  width: 100%;
}
.ping-mid {
  width: 63%;
  overflow: hidden;
}
.midimg {
  width: 100%;
  /* border: 1px solid green; */
  overflow: hidden;
  margin-bottom: 0.1rem;
}
.taotu {
  margin-top: 0.05rem;
  margin-bottom: 0.05rem;
  width: 100%;
  /* border: 1px solid black; */
  overflow: hidden;
}
.midgp {
  width: 25%;
  overflow: hidden;
  /* border: 1px solid red;  */
  overflow: hidden;
  float: left;
  margin-right: 0.1rem;
}

.baoguo {
  width: 100%;
  overflow: hidden;
}
.midgp2 {
  width: 20%;
  float: left;
}

.midgp img {
  float: left;
  width: 100%;
}
.imggg {
  margin-right: 0.1rem;
  /* margin-left: 0.1rem; */
}
.midgp2 span {
  border-radius: 0.05rem;
  display: inline-block;
  border: 1px solid lightgray;
  width: 90%;
  height: 0.2rem;
  font-size: 0.12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* position: absolute;
  bottom: 0; */
  vertical-align: bottom;
}
.ping-bot {
  width: 22%;
  font-size: 0.12rem;
}
.stars {
  width: 100%;
}
.stars span {
  font-size: 0.14rem;
}
</style>
