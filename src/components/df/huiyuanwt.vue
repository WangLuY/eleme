<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/左箭头.png" alt>
      <span>{{one||two||three||four||five||six||seven||eight||nine||ten||eleven||twelve||thirteen||fourteen||fifteen||sixteen||seventeen||eighteen||nineteen||twenty||twentyOne}}</span>
    </div>
    <div id="content">
      <h4>
        {{one1||two1||three1||four1||five1||six1||seven1||eight1||nine1||ten1||eleven1||twelve1||thirteen1||fourteen1||fifteen1||sixteen1||seventeen1||eighteen1||nineteen1||twenty1||twentyOne1}}
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "huiyuanwt",
  data() {
    return {
      one: "",
      one1: "",
      two: "",
      two1: "",
      three: "",
      three1: "",
      four: "",
      four1: "",
      five: "",
      five1: "",
      six: "",
      six1: "",
      seven: "",
      seven1: "",
      eight: "",
      eight1: "",
      nine: "",
      nine1: "",
      ten: "",
      ten1: "",
      eleven: "",
      eleven1: "",
      twelve: "",
      twelve1: "",
      thirteen: "",
      thirteen1: "",
      fourteen: "",
      fourteen1: "",
      fifteen: "",
      fifteen1: "",
      sixteen: "",
      sixteen1: "",
      seventeen: "",
      seventeen1: "",
      eighteen: "",
      eighteen1: "",
      nineteen: "",
      nineteen1: "",
      twenty: "",
      twenty1: "",
      twentyOne: "",
      twentyOne1: ""
    };
  },
  created() {
    (this.one = this.$route.query.supervipCaption),
      (this.one1 = this.$route.query.supervipContent),
      (this.two = this.$route.query.signCaption),
      (this.two1 = this.$route.query.signContent),
      (this.three = this.$route.query.rankCaption),
      (this.three1 = this.$route.query.rankContent),
      (this.four = this.$route.query.pointtextCaption),
      (this.four1 = this.$route.query.pointtextContent),
      (this.five = this.$route.query.phototutorialCaption),
      (this.five1 = this.$route.query.phototutorialContent),
      (this.six = this.$route.query.paymentCaption),
      (this.six1 = this.$route.query.paymentContent),
      (this.seven = this.$route.query.otherCaption),
      (this.seven1 = this.$route.query.otherContent),
      (this.eight = this.$route.query.ontimeCaption),
      (this.eight1 = this.$route.query.ontimeContent),
      (this.nine = this.$route.query.memberTimesCaption),
      (this.nine1 = this.$route.query.memberTimesContent),
      (this.ten = this.$route.query.memberCaption),
      (this.ten1 = this.$route.query.memberContent),
      (this.eleven = this.$route.query.hongbaoCaption),
      (this.eleven1 = this.$route.query.hongbaoContent),
      (this.twelve = this.$route.query.freshmanCaption),
      (this.twelve1 = this.$route.query.freshmanContent),
      (this.thirteen = this.$route.query.forgotCaption),
      (this.thirteen1 = this.$route.query.forgotContent),
      (this.fourteen = this.$route.query.discountCaption),
      (this.fourteen1 = this.$route.query.discountContent),
      (this.fifteen = this.$route.query.disclaimerCaption),
      (this.fifteen1 = this.$route.query.disclaimerContent),
      (this.sixteen = this.$route.query.couponCaption),
      (this.sixteen1 = this.$route.query.couponContent),
      (this.seventeen = this.$route.query.businessCaption),
      (this.seventeen = this.$route.query.businessContent),
      (this.eighteen = this.$route.query.balanceCaption),
      (this.eighteen1 = this.$route.query.balanceContent),
      (this.nineteen = this.$route.query.awesomeRestaurantCaption),
      (this.nineteen1 = this.$route.query.awesomeRestaurantContent),
      (this.twenty = this.$route.query.anonymousBuyCaption),
      (this.twenty1 = this.$route.query.anonymousBuyContent),
      (this.twentyOne = this.$route.query.activityCaption),
      (this.twentyOne1 = this.$route.query.activityContent);
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#content {
  margin-top: 0.4rem;
  padding: 0.1rem;
}
h4 {
  color: #333333;
  line-height: 0.25rem;
}
</style>
