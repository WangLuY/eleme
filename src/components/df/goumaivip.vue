<template>
  <div id="goumaivip">
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>在线支付</span>
    </div>
    <div id="top">
      <p>支付剩余时间</p>
      <span>00:{{minute}}:{{second}}</span>
    </div>
    <p>选择支付方式</p>
    <div id="conter">
      <div>
        <img src="../img/zhifubao.png" alt>
        <p @click="value=!value" :class="value?styB:styA" class="el-icon-success"></p>
      </div>
      <div>
        <img src="../img/weixin1.png" alt>
        <p @click="value=!value" :class="value?styA:styB" class="el-icon-success"></p>
      </div>
    </div>
    <el-button @click="tishi()" id="but" type="success">确认支付</el-button>
        <!-- 提示框 -->
    <transition enter-active-class="animated bounceIn" leave-active-class="animated zoomOut">
      <div class="tishi" v-if="show">
        <img src="../img/5913bcc165c01.png" alt>
        <p>支付失败</p>
        <button @click="show=!show">确认</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "goumaivip",
  data() {
    return {
      minutes: 15,
      seconds: 0,
      styA:"one",
      styB:"two",
      value:true,
      show:false
    };
  },
  mounted() {
    this.add();
  },
  methods: {
    tishi(){
       if(this.minutes==0&&this.seconds==0){
          this.show=!this.show
       }
    },
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
    back() {
      this.$router.back();
    }
  },

  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },

  computed: {
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    }
  }
};
</script>
<style scoped>
#goumaivip{
    text-align: center;
}
#top {
  margin-top: 0.4rem;
  background-color: #ffffff;
  text-align: center;
  padding: 0.4rem;
}
#top p {
  font-size: 0.15rem;
  color: #999999;
}
#top span {
  font-size: 0.5rem;
  margin-top: 0.1rem;
}
#goumaivip > p {
  font-size: 0.15rem;
  padding: 0.1rem;
}
#conter {
  background-color: #ffffff;
}
#conter div {
  padding: 0.2rem;
  overflow: hidden;
  border: 1px solid #e4e4e4;
}
#conter img {
  width: 0.5rem;
  float: left;
}
.el-icon-success {
  float: right;
  line-height: 0.5rem;
  font-size: 0.3rem;
}
.one{
    color: #999999;
}
.two{
  color: #4CD964;
}
#but{
    width: 95%;
    margin-top: 0.15rem;
}
</style>
