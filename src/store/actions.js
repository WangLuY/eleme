export default{
    //异步操作
    // contex 形参 接收store对象
    asyReduce(contex){
      //调用
      contex.commit("reduce",2);
    }
  }