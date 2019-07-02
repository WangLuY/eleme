<template>
  <div id="history">
    <p>搜索历史</p>
    <div>
      <ul class="resultlist" v-if="showClear">
        <li v-for="(v,i) in arrNameAf" :key="i">
          <router-link
            v-model="arrNameAf"
            :to="'/family?name='+v+'&address='+arrAddrAf[i]+'&latitude='+arrLaAf[i]+'&longitude='+arrLoAf[i]"
            tag="div"
          >
            <p class="res_1">{{v}}</p>
            <p class="res_2">{{arrAddrAf[i]}}</p>
          </router-link>
        </li>
        <button @click="clearHistory()" class="clear">清空历史</button>
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

      historyObj: {},
      showClear: true
    };
  },
  methods: {
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
        if (this.arrNameAf.indexOf(this.arrName[i]) == -1) {
          this.arrNameAf.push(this.arrName[i]);
        }
        if (this.arrAddrAf.indexOf(this.arrName[i] == 1)) {
          this.arrAddrAf.push(this.arrName[i]);
        }
        if (this.arrLaAf.indexOf(this.arrLa[i] == 1)) {
          this.arrLaAf.push(this.arrLa[i]);
        }
        if (this.arrLoAf.indexOf(this.arrLo[i] == 1)) {
          this.arrLoAf.push(this.arrLo[i]);
        }
      }
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
  padding: 0.05rem;
}
.clear {
  width: 100%;
  height: 0.4rem;
  font-size: 0.15rem;
  background-color: #fff;
  border: 1px solid #fff;
} 
ul{
  border-top:1px solid #e4e4e4e4; 
}
.resultlist li{
  background-color: white;
  padding: 0.1rem;
  border-bottom:1px solid #e4e4e4e4; 
}
.res_1 {
  font-size: 0.15rem;
}
.res_2 {
  font-size: 0.1rem !important;
  margin-top:0.05rem; 
}
</style>