// 修改用户名
<template>
  <div id="bc">
    <!-- 头部 -->
    <div id="nav">
      <img src="../img/左箭头.png" alt @click="goBack()">
      <span>修改用户名</span>
    </div>
    <!-- 中间输入框跟确认按钮 -->
    <div id="change_bottom">
      <input
        v-if="show2"
        id="inp1"
        type="text"
        placeholder="输入用户名"
        v-model="user"
        @input="changeInput()"
        ref="type"
      >
      <p v-if="show2" id="p1">用户名只能修改一次(5-24字符之间)</p>
      <input
        v-if="!show2"
        id="inp2"
        type="text"
        placeholder="输入用户名"
        v-model="user"
        @input="changeInput()"
        ref="type"
      >
      <p v-if="!show2" id="p2">用户名只能修改一次(5-24字符之间)</p>
      <button v-if="show" id="but1">确认修改</button>
      <button v-else id="but2" @click="changeUser()">确认修改</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "username",
  data() {
    return {
      user: "",
      show: true,
      show2: true,
      show3: true
    };
  },
  created() {},
  methods: {
    goBack() {
      this.$router.back();
    },
    changeUser() {
      this.$store.state.userMsg.username = this.user;
      this.$router.push({
        name: "wode"
      });
    },
    changeInput() {
      if (
        this.$refs.type.value.length < 5 ||
        this.$refs.type.value.length > 24
      ) {
        console.log("a");
        this.show2 = false;
        this.show = true;
      } else {
        this.show2 = true;
        this.show = false;
      }
    }
  },
  watch: {}
};
</script>
<style scoped>
#inp1,
#inp2 {
  margin-top: 0.45rem;
  width: 94%;
  padding: 0.05rem 0 0.05rem 0;
  font-size: 0.2rem;
  margin-left: 2%;
  border: 0.01rem solid #ddd;
  background-color: #f5f5f5;
}
#p1,
#p2 {
  margin: 0.1rem 0 0.1rem 0.1rem;
  font-size: 0.1rem;
}
#inp2 {
  border: 0.01rem solid red;
}
#p2 {
  color: red;
}
/* 底部 */
button {
  width: 94%;
  margin-left: 2%;
  background-color: #3190e8;
  font-size: 0.2rem;
  padding: 0.1rem 0.1rem;
  border: 0;
  border-radius: 0.05rem;
}
#but1 {
  color: #ddd;
}
#but2 {
  color: white;
}
</style>
