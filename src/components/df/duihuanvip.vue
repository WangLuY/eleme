<template>
  <div id="duihuan">
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>兑换会员</span>
    </div>
    <p>
      成功兑换后将关联到当前帐号:
      <span>{{$store.state.userMsg.username}}</span>
    </p>
    <el-input v-model="kahao" @input="changeInt(kahao)" placeholder="请输入10位卡号"></el-input>
    <span v-if="show1">输入卡号格式错误</span>
    <el-input v-model="input" @input="changeInt1(input)" placeholder="请输入6位卡密"></el-input>
    <span v-if="show2">输入的卡密格式错误</span>
    <el-button @click="show=!show" id="but" type="info">兑换</el-button>
    <div bottom>
      <div id="tetle">----温馨提示----</div>
      <div id="content">
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>月卡：30次减免配送费</p>
        <p>季卡：90次减免配送费</p>
        <p>年卡：360次减免配送费</p>
        <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
      </div>
    </div>
    <!-- 提示框 -->
    <transition enter-active-class="animated bounceIn" leave-active-class="animated zoomOut">
      <div class="tishi" v-if="show">
        <img src="../img/5913bcc165c01.png" alt>
        <p>兑换失败</p>
        <button @click="show=!show">确认</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "duihuanvip",
  data() {
    return {
      //  value:false
      kahao: "",
      input: "",
      show: false,
      show1: false,
      show2: false
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    changeInt(msg) {
      // 判断是否为正整数
      console.log(msg);
      var reg = /^\d{10}$/;
      console.log(reg.test(msg));
      this.show1 = !reg.test(msg);
    },
    changeInt1(msg) {
      // 判断是否为正整数
      console.log(msg);
      var reg = /^\d{6}$/;
      console.log(reg.test(msg));
      this.show2 = !reg.test(msg);
    }
  }
};
</script>
<style scoped>
#duihuan > p {
  margin-top: 0.4rem;
  padding: 0.1rem;
  font-size: 0.04rem;
}
#but {
  width: 94%;
  margin-left: 3%;
  margin-top: 0.1rem;
}
#tetle {
  text-align: center;
  margin-top: 1rem;
  color: #aaaaaa;
}
#content p {
  font-size: 0.1rem;
  margin-left: 0.6rem;
  margin-top: 0.1rem;
  color: #aaaaaa;
}
#duihuan > span {
  font-size: 0.12rem;
  color: red;
  line-height: 0.2rem;
}
</style>
