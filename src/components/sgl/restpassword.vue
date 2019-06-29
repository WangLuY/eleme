<template>
<!-- 头部 -->
    <div class="landing">
        <div class="landingTop">
            <p>密码登陆</p>
            <img @click="fanhui" src="../../assets/back.png" alt="">
        </div>
         <!-- 内容部分 -->
        <div class="landingCenter">
      <input v-model="username" placeholder="账号" type="text">
      <input v-model="old" placeholder="旧密码" type="text">
      <input v-model="newpassWord" placeholder="请输入新密码" type="text">
      <input v-model="password" placeholder="请确认密码" type="text">
      <input v-model="codeNumber" placeholder="验证码" type="text">
      <img class="landingImg" :src="code&&code" alt="">
      <button class="landingBt1" @click="getCode()">看不清</button><br>
      <button class="landingBt2" @click="getCode()">换一张</button><br>
      <button class="landingBt3" @click="login()">确认修改</button>
        </div>
         <!-- 错误提示框 -->
        <div v-if="show">
            <img src="../../assets/叹号.png" alt="">
            <p>{{loginMsg}}</p>
            <button @click="show= !show">确认</button>
        </div>
    </div>
</template>
<script>
export default {
    nsme:"restpassword",
    data() {
        return {
            code:"",//存储验证码图片
            username:"",
            password:"",
            codeNumber:"",//存储验证码输入框的值
            old:"",//旧密码
            loginMsg: "",
            newpassWord:"",
            show: false

        };
    },
    created(){
        //首先，获取验证码
        this.getCode();
    },
    methods: {
         fanhui(){
            this.$router.back();
        },
        getCode(){
            const api = "https://elm.cangdu.org/v1/captchas";
            this.$http({
                url:api,
                method:"post",
                //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据 
                withCredentials:true
            }).then(res => {
                this.code = res.data.code;
            });
        },
        login(){
            const api = "https://elm.cangdu.org/v2/changepassword";
            this.$http({
                url:api,
                method:"post",
                //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据 
                withCredentials:true,
                data:{
                    username:this.username,
                    oldpassWord:this.old,
                    newpassword:this.newpassword,
                    password:this.password,
                    captcha_code:this.codeNumber
                }
            }).then(res => {
                if (res.data.success) {
                    this.loginMsg = res.data.success;//登陆失败
                    this.show = !this.show;
                }else{
                    console.log("修改成功");
                    //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
                    this.$router.push({
                        name:"restpassword",
                        query:res.data,
                        params:{pID:res.data.id}
                    })
                }
            })
        }
    },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.landing{
  background-color: #f5f5f5;  
}
.landingTop {
  width: 100%;
  height: 0.45rem;
  background-color: #3190e8;
  position: fixed;
  top: 0;
}
.landingTop p{
     width: 3.75rem;
    color: white;
    font-size: 0.2rem;
    font-weight: bolder;
    line-height: 0.45rem;
    text-align: center;
}
.landingTop img{
  width: 0.12rem;
    position: absolute;
    top: 0.12rem;
    left: 0.1rem;
}
.landingCenter{
margin-top: 0.56rem;
}
.landingCenter input{
    box-sizing: border-box;
    width: 100%;
    height: 0.5rem;
    border-bottom:1px solid #F1F1F1; 
    padding: 0 0.2rem;
    font-size: 0.16rem;
}
.landingImg{
position: absolute;
right: 0.7rem;
top: 2.66rem;
}
.landingBt1{
position: absolute;
right: 0.2rem;
top: 2.59rem;
background-color: #fff;
border: 1px solid white;
}
.landingBt2{
position: absolute;
right: 0.2rem;
top: 2.79rem;
background-color: #fff;
border: 1px solid white;
color: blue;
}
.landingBt2:focus,
.landingBt2:active:focus,
.landingBt2.active:focus,
.landingBt2.focus,
.landingBt2:active.focus,
.landingBt2.active.focus {
    outline: none;
    border-color: transparent;
    box-shadow:none;
}
.landingBt1:focus,
.landingBt1:active:focus,
.landingBt1.active:focus,
.landingBt1.focus,
.landingBt1:active.focus,
.landingBt1.active.focus {
    outline: none;
    border-color: transparent;
    box-shadow:none;
}
.landingBt3:focus,
.landingBt3:active:focus,
.landingBt3.active:focus,
.landingBt3.focus,
.landingBt3:active.focus,
.landingBt3.active.focus {
    outline: none;
    border-color: transparent;
    box-shadow:none;
}
.landingBt3{
    width: 90%;
    background-color: #4CD964;
    color: white;
    line-height: 0.4rem;
    border: 1px solid white;
    font-size: 0.16rem;
    border-radius: 5px;
}
</style>
