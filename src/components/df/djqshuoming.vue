<template>
  <div>
    <div id="nav">
      <router-link to="/discounts">
      <img  src="../img/左箭头.png" alt>
      </router-link>
      <span>代金券说明</span>
    </div>
    <div id="content">
      <div>
        <h4>Q1: 什么是商家代金券？</h4>
        <div>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</div>
      </div>
      <div>
        <h4>Q2: 怎么获得商家代金券？</h4>
        <div>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</div>
        <div>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</div>
      </div>
      <div>
        <h4>Q3: 商家代金券使用条件</h4>
        <div>商家代金券仅限在指定商家使用</div>
        <div>商家代金券仅限在线支付使用</div>
        <div>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "djqshuoming"
};
</script>
<style scoped>
#content {
  padding: 0.1rem;
  margin-top: 0.4rem;
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
