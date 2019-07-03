import Vue from 'vue'
import Vuex from 'vuex'
//导入状态state
import state from './state'
import createPersistedState from "vuex-persistedstate"
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
Vue.use(Vuex)
// store存储器用来存储组件之间共享的数据以及共同调用的方法
const store = new Vuex.Store({
    //共享状态：类似组件中的data数据源
    state,
    plugins: [createPersistedState()],
    //修改状态的方法：类似于组件methods方法
      mutations,//(原型：mutations：mutations,    因为上面第五行的名字和下面的名字一样，所以用前面的省略写法)
    // getters 类似于组件中的计算属性，用来处理state状态值的
    getters,
    // actions 类似于 mutations 用来创建方法，只不过不处理状态值，调用mutations中的方法；action可以处理异步操作，mutations不行
    actions
  
  })

  //到处存储的store对象,给main.js使用
  export default store;