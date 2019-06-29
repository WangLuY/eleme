<template>
  <div>
      <div id="nav">
        <router-link to="/wode">
        <img src="../img/左箭头.png" alt>
        </router-link>
        <span>我的优惠</span>
      </div>
      <div id="nav-bottom">
        <router-link to="/redpacket">
        <p @click="value=!value" :class="value?styB:styA">红包</p>
        </router-link>
        <router-link to="/voucher">
        <p @click="value=!value" :class="value?styA:styB">商家代金券</p>
        </router-link>
      </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "discounts",
  data() {
    return {
      styA: "one",
      styB: "two",
      value: false
    };
  },
  methods: {
    
  }
};
</script>
<style scoped>
#nav-bottom {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.15rem 0;
  margin-top: 0.4rem;
}
.one {
  color: #3190e8;
  border-bottom: 2px solid #3190e8;
  padding-bottom: 0.01rem;
}
.two {
  color: black;
  border-bottom: 2px solid white;
  padding-bottom: 0.01rem;
}
</style>
