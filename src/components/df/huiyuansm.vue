<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>会员说明</span>
    </div>
    <div id="content">
        <div>
            尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
              购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
              注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
        </div>
        <h4>Q1: 特权介绍</h4>
        <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
        <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
        <p>更多特权，敬请期待！</p>
        <h4>Q2: 资费介绍</h4>
        <p>饿了么会员卡：20元</p>
        <h4>Q3: 使用说明</h4>
        <p>当用户满足以下任一条件，会员服务自动失效：</p>
        <p>自绑定之日起超过31天；</p>
        <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
        <h4>Q4: 购卡说明</h4>
        <p>在线购买：饿了么App>我的>饿了么会员卡</p>
        <h4>Q5: 温馨提示</h4>
        <p>用户在当前会员服务失效前，无法购买新卡。</p>
        <p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
    </div>
  </div>
</template>
<script>
export default {
    name:"huiyuansm",
    methods:{
        back(){
            this.$router.back();
        }
    }
};
</script>
<style scoped>
h4{
    font-size: 0.17rem;
    margin-top: 0.1rem;
}
#content{
  padding: 0.1rem;
}
#content p{
    line-height: 0.25rem;
    font-size:0.15rem;
    margin-top: 0.1rem;
}
#content div{
    margin: 0.15rem 0.5rem;
    line-height: 0.2rem;
    font-size: 0.05rem;
}
</style>
