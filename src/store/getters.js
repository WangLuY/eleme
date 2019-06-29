export default {
    //筛选vip用户
    // vipTodos(state){
    //   return state.todos.filter(function(todo){
    //     return todo.vip;
    //   });
    // }
    // 或者第二种方法
    vipTodos(state){
      return state.todos.filter(todo=>todo.vip);
    }
  }