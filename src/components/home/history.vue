<template>
  <div id="history">
    <p>搜索历史</p>
    <div>
      <ul class="resultlist" v-if="showClear">
        <li v-for="(v,i) in historyArr" :key="i" @click="hisDingwei(v)">
            <p class="res_1">{{v.name}}</p>
            <p class="res_2">{{v.address}}</p>
        </li>
        <p @click="clearHistory()" class="clear">清空所有</p>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "history",
  created() {
    this.getNameAndAddr();
  },
  data() {
    return {
      //去重前
      arrName: [],
      arrAddr: [],
      arrLa: [],
      arrLo: [],
      //去重后
      arrNameAf: [],
      arrAddrAf: [],
      arrLaAf: [],
      arrLoAf: [],

      historyArr:[],
      historyArrAf:[],
      
      showClear: true
    };
  },
  methods: {
    hisDingwei(v){
      this.$router.push({
        name: "family"
      });
      this.$store.commit("saveDingwei", v);
    },
    //字符串截取函数
    getNameAndAddr() {
      const arr1 = localStorage.name;
      const arr2 = localStorage.addr;
      const arr3 = localStorage.latitude;
      const arr4 = localStorage.longitude;
          this.arrName = arr1.split(",");
          this.arrAddr = arr2.split(",");
      this.arrLa = arr3.split(",");
      this.arrLo = arr4.split(",");
      //字符串去重
      //将数组中的元素去重
      
      for (var i = 0; i < this.arrName.length; i++) {
        const historyObj={};
        if (this.arrNameAf.indexOf(this.arrName[i]) == -1) {
          this.arrNameAf.push(this.arrName[i]);
          historyObj['name']=this.arrName[i];
        }
        if (this.arrAddrAf.indexOf(this.arrAddr[i]) == -1) {
          this.arrAddrAf.push(this.arrAddr[i]);
          historyObj['address']=this.arrAddr[i];
        }
        if (this.arrLaAf.indexOf(this.arrLa[i]) == -1) {
          this.arrLaAf.push(this.arrLa[i]);
          historyObj['latitude']=this.arrLa[i];
        }
        if (this.arrLoAf.indexOf(this.arrLo[i]) == -1) {
          this.arrLoAf.push(this.arrLo[i]);
          historyObj['longitude']=this.arrLo[i]; 
        }
        this.historyArr.push(historyObj);
      }
      
      //  console.log(this.historyObj); 
       console.log(this.historyArr);
    },
    //清除历史记录
    clearHistory() {
      localStorage.removeItem("addr");
      localStorage.removeItem("name");
      localStorage.removeItem("latitude");
      localStorage.removeItem("longitude");
      this.arrName = null;
      this.arrAddr = null;
      this.showClear = !this.showClear;
    }
  }
};
</script>

<style scoped>
#history>p{
  padding: 0.1rem;
  font-size: 0.05rem;
  background-color: #e4e4e4;
  border-top:1px solid #999999;
  border-bottom:1px solid #999999;  
}
.resultlist li{
  background-color: #fff;
  padding: 0.1rem;
  border-bottom: 1px solid #e4e4e4;
}
.clear {
  width: 100%;
  height: 0.4rem;
  font-size: 0.15rem;
  background-color: #fff;
  text-align: center;
  line-height: 0.4rem;
}
.res_1 {
  font-size: 0.15rem;
}
.res_2 {
  font-size: 0.1rem !important;
  color: #666666;
  margin-top:0.07rem; 
}
</style>