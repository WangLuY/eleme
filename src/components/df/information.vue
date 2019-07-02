<template>
  <div>
    <div id="nav">
      <router-link to="/wode">
      <img src="../img/左箭头.png" alt>
      </router-link>
      <span>账户信息</span>
      <div></div>
    </div>
    <div id="content">
      <div id="headportrait">
        <p>头像</p>
        <div id="toux">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl"  :src="imageUrl" class="avatar">
           <img v-else  :src="'https://elm.cangdu.org/img/'+res.data.avatar" class="avatar">
          </el-upload>
          <img class="yjts1" src="../img/iconfontjiantou2.png" alt>
        </div>
      </div>
      <div id="username">
        <p>用户名</p>
        <div id="user">
          <span>{{$store.state.userMsg.username}}</span>
          <router-link to="/username"><img class="yjts" src="../img/iconfontjiantou2.png" alt></router-link>
        </div>
      </div>
      <div id="address">
        <p>收货地址</p>
        <router-link to="/add"><img class="yjt" src="../img/iconfontjiantou2.png" alt></router-link>
      </div>
      <p>账号绑定</p>
      <div>
        <img id="phone" src="../img/1.png" alt>
        <p>手机</p>
        <img class="yjt" src="../img/iconfontjiantou2.png" alt>
      </div>
      <p>安全设置</p>
      <div id="password">
        <p>登录密码</p>
        <span>修改</span>
       <router-link to="/resetpasswords"><img class="yjt" src="../img/iconfontjiantou2.png" alt></router-link>
      </div>
      <el-button v-if="value" @click="show=!show" class="but" type="danger">退出</el-button>
    </div>
      <!-- 提示框 -->
    <transition enter-active-class="animated bounceIn" leave-active-class="animated zoomOut">
      <div class="tishikuang" v-if="show">
      <img src="../img/5913bcc165c01.png" alt>
      <p>是否提出登录</p>
      <div >
        <el-button @click="show=!show" type="info">再等等</el-button>
      <el-button @click="getquit()" id="buttom" type="danger">确认退出</el-button>
      </div>
    </div>
    </transition>
    
  </div>
</template>
<script>
export default {
  name: "information",
  data() {
    return {
      imageUrl: "",
      show:false,
      value:true
    };
  },
  created() {
    //首先，获取验证码
    // this.getPath();
    this. getImg();
    this.img1=this.$store.state.imagavater
  },
  methods: {
    getImg(){
      const api = "https://elm.cangdu.org/v1/user/"+this.$store.state.userMsg.user_id;
      this.$http({
        url: api,
        method: "get",
      }).then(res => {
        console.log(res.data);
        this.imageUrl="https://elm.cangdu.org/img/"+res.data.avatar;
;
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      var file = file.raw;
      var formdata1 = new FormData(); // 创建form对象
      formdata1.append("file", file, file.name); // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('img',file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      }; //添加请求头
      this.axios.post(`https://elm.cangdu.org/eus/v1/users/${this.$store.state.userMsg.user_id}/avatar`, formdata1, config).then(response => {
        //这里的/xapi/upimage为接口
        console.log(response.data);
      });
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return  isLt2M;
    },
    getquit(){
     const api = "https://elm.cangdu.org/v2/signout";
      this.$http({
        url: api,
        method: "get",
      }).then(res => {
        this.$store.state.userMsg=""
          if($store.state.userMsg==null){
            this.value=!this.value;
          }
           this.$router.push({
            name: "wode",
            
          });
      });
    }
  }
};
</script>
<style scoped>
#content {
  margin-top: 0.5rem;
}
#content > div {
  background-color: white;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0.1rem;
  border-bottom: 1px solid #e4e4e4;
  overflow: hidden;
}

#portrait {
  width: 0.2rem;
  height: 0.2rem;
}
#content div p {
  float: left;
}
.yjt {
  width: 0.2rem;
  float: right;
  margin-top: 0.1rem;
}
.yjts,.yjts1{
  width: 0.2rem;
  margin-top: 0.1rem;
  float: right;
  margin-left: 0.2rem;
}
#phone {
  height: 0.2rem;
  margin-right: 0.05rem;
  float: left;
  margin-top: 0.1rem;
}
.avatar-uploader {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  float: left;
  text-align: center;
  overflow: hidden;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 0.1rem;
  color: #8c939d;
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.2rem;
  
}
.avatar {
  width:0.4rem;
  height: 0.4rem;
  display: block;
}
#toux,
#user {
  float: right;
}
#content>p{
  padding: 0.1rem;
}
.but{
    width: 94%;
    margin-left: 3%;
    margin-top: 0.3rem;
}
.tishikuang {
  width: 80%;
  text-align: center;
  background-color: white;
  overflow: hidden;
  position: absolute;
  left: 10%;
  top: 2rem;
}
.tishikuang img {
  width: 30%;
  margin-top: 0.2rem;
}
.tishikuang p {
  margin: 20px 0;
}
#bottom{
  margin-left: 0.2rem;
}
</style>
