export default{
    //通过store。commit('方法名'，附加参数)调用
    //创建方法 increAdd,第一个参数：接收state状态属性，第二个参数在之后，是组件中调用该方法时，传递的参数
    increAdd(state,a){
      //state.count += a;
      //或者
      this.state.count += a;
    },
    reduce(stade,n=1){//参数n默认值为1
      stade.count -= n;
    },
    QjSjXq(state,v){
      this.state.QJ=v;
    },
    cunId(state,v){
      this.state.selfId=v;
    },
    getUsers(state,a){
      state.userMsg = a;
      console.log(a)
  },
  getCity(state,b){
      state.cityInfo=b;
      console.log(b);
  },
  getsum(state,c){
      state.sum=c;
      console.log(c);
  },
  getavater(state,d){
      state.imagavater=d
  }
}