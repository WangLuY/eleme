<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>积分说明</span>
    </div>
    <div id="content">
      <div>
        <h4>Q1: 怎么获得积分？</h4>
        <div>在线支付的订单将获得订单积分奖励：</div>
        <div>积分将在用户完成评价后获得。</div>
        <div>订单金额指实际付款金额，不包含活动优惠金额。</div>
        <div>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</div>
      </div>
      <div>
        <h4>Q2: 积分用来做什么？</h4>
        <div>可以在积分商城兑换各种礼品。</div>
      </div>
      <div>
        <h4>Q3: 礼品兑换很多天了还没有收到，该怎么办？</h4>
        <div>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</div>
      </div>
      <div>
        <h4>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h4>
        <div>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "jfwenti",
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#content {
  padding: 0.1rem;
  margin-top: 0.45rem;
}
h4 {
  color: #333333;
  line-height: 0.25rem;
}
#content div div {
  font-size: 0.14rem;
  line-height: 0.25rem;
  color: #666666;
}
</style>
