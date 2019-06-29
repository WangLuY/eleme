<template>
  <div id="fuwuzhongxin">
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>服务中心</span>
    </div>
    <div id="conter">
      <div id="top">
        <div id="top-left">
          <img src="../img/kefu.png" alt>
          <p>在线客服</p>
        </div>
        <div id="top-right">
          <img src="../img/dianhua.png" alt>
          <p>在线客服</p>
        </div>
      </div>
      <p>热门问题</p>
      <ul>
        <li @click="getCode(i)" v-for="(v,i) in data" :key="i">
          <span>{{v}}</span>
          <img class="yjt" src="../img/iconfontjiantou2.png" alt>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "fuwuzhongxin",
  data() {
    return {
      data: [
        "超级会员权益说明",
        "签到规则",
        "用户等级说明",
        "积分问题",
        "教我拍大片",
        "支付问题",
        "其他问题",
        "准时达问题",
        "会员说明",
        "会员问题",
        "红包问题",
        "活动细则",
        "补签规则",
        "优惠说明",
        "免责声明",
        "代金券说明",
        "商务合作",
        "余额问题",
        "超赞商家",
        "匿名购买",
        "活动问题"
      ]
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    getCode(i) {
      console.log(i);
      const api = "https://elm.cangdu.org/v3/profile/explain";
      if (i == 0) {
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              supervipCaption: res.data.supervipCaption,
              supervipContent: res.data.supervipContent
            }
          });
        });
      }
      else if(i==1){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              signCaption: res.data.signCaption,
              signContent: res.data.signContent
            }
          });
        });
      }
      else if(i==2){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              rankCaption: res.data.rankCaption,
              rankContent: res.data.rankContent
            }
          });
        });
      }
      else if(i==3){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              pointtextCaption: res.data.pointtextCaption,
              pointtextContent: res.data.pointtextContent
            }
          });
        });
      }
      else if(i==4){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              phototutorialCaption: res.data.phototutorialCaption,
              phototutorialContent: res.data.phototutorialContent
            }
          });
        });
      }
      else if(i==5){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              paymentCaption: res.data.paymentCaption,
              paymentContent: res.data.paymentContent
            }
          });
        });
      }
       else if(i==6){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              otherCaption: res.data.otherCaption,
              otherContent: res.data.otherContent
            }
          });
        });
      }
      else if(i==7){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              ontimeCaption: res.data.ontimeCaption,
              ontimeContent: res.data.ontimeContent
            }
          });
        });
      }
      else if(i==8){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              memberTimesCaption: res.data.memberTimesCaption,
              memberTimesContent: res.data.memberTimesContent
            }
          });
        });
      }
       else if(i==9){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              memberCaption: res.data.memberCaption,
              memberContent: res.data.memberContent
            }
          });
        });
      }
       else if(i==10){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              hongbaoCaption: res.data.hongbaoCaption,
              hongbaoContent: res.data.hongbaoContent
            }
          });
        });
      }
       else if(i==11){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              freshmanCaption: res.data.freshmanCaption,
              freshmanContent: res.data.freshmanContent
            }
          });
        });
      }
      else if(i==12){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              forgotCaption: res.data.forgotCaption,
              forgotContent: res.data.forgotContent
            }
          });
        });
      }
      else if(i==13){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              discountCaption: res.data.discountCaption,
              discountContent: res.data.discountContent
            }
          });
        });
      }
       else if(i==14){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              disclaimerCaption: res.data.disclaimerCaption,
              disclaimerContent: res.data.disclaimerContent
            }
          });
        });
      }
       else if(i==15){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              couponCaption: res.data.couponCaption,
              couponContent: res.data.couponContent
            }
          });
        });
      }
      else if(i==16){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              businessCaption: res.data.businessCaption,
              businessContent: res.data.businessContent
            }
          });
        });
      }
      else if(i==17){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              balanceCaption: res.data.balanceCaption,
              balanceContent: res.data.balanceContent
            }
          });
        });
      }
      else if(i==18){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              awesomeRestaurantCaption: res.data.awesomeRestaurantCaption,
              awesomeRestaurantContent: res.data.awesomeRestaurantContent
            }
          });
        });
      }
       else if(i==19){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              anonymousBuyCaption: res.data.anonymousBuyCaption,
              anonymousBuyContent: res.data.anonymousBuyContent
            }
          });
        });
      }
      else if(i==20){
        this.$http({
          url: api,
          method: "get"
          //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        }).then(res => {
          this.$router.push({
            name: "huiyuanwt",
            query: {
              activityCaption: res.data.activityCaption,
              activityContent: res.data.activityContent
            }
          });
        });
      }
    }
  }
};
</script>
<style scoped>
#conter {
  margin-top: 0.4rem;
  background-color: #fff;
}
#top {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.15rem 0;
}
#top img {
  width: 0.3rem;
}
#top p {
  font-size: 0.05rem;
}
#top-left,
#top-right {
  text-align: center;
}
#conter > p {
  font-size: 0.2rem;
  padding: 0.2rem;
  border-top: 1px solid #e4e4e4;
}
li {
  height: 0.2rem;
  padding: 0.1rem;
  overflow: hidden;
  border-top: 1px solid #e4e4e4;
}
#conter span {
  font-size: 0.13rem;
  line-height: 0.2rem;
  float: left;
  margin-left: 0.1rem;
}
.yjt {
  height: 0.15rem;
  float: right;
}
#conter::-webkit-scrollbar {
    display: none;
  }
  
</style>
