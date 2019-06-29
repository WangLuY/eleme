<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>红包说明</span>
    </div>
    <div id="content">
        <div>
            <h4>Q1: 怎么获得红包？</h4>
            <div>通过邀请好友获得</div>
            <div>在下单返红包的商家下单获得</div>
            <div>抢微信朋友分享的红包获得</div>
        </div>
        <div>
            <h4>Q2: 红包可以做什么？</h4>
            <div>可以抵扣在线支付时的实际支付金额。</div>
        </div>
        <div>
            <h4>Q3: 红包的门槛金额按照什么金额计算？</h4>
            <div>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</div>
        </div>
        <div>
            <h4>Q4: 一个红包能拆开多次使用吗？</h4>
            <div>不能，一个红包只能一次性使用，不能分开使用。</div>
        </div>
        <div>
            <h4>Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</h4>
            <div>会的，订单无效后红包会自动返还到您的账户里。</div>
        </div>
        <div>
            <h4>
                Q6: 红包兑换码怎样兑换成红包，怎样查看红包？
            </h4>
            <div>
                在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"redexplain",
    methods:{
        back(){
            this.$router.back();
        }
    }
};
</script>
<style scoped>
#content{
  padding: 0.1rem;
  margin-top: 0.45rem;
}
h4{
  color: #333333;
  line-height: 0.25rem;
}
#content div div{
  font-size: 0.14rem;
  line-height: 0.25rem;
  color: #666666;
}
</style>
