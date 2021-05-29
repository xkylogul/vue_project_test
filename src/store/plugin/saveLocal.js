export default store=> {
   // console.log('store初始化')
  if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))  //持久化存储
    store.subscribe((mutation,state)=>{
        console.log('提交mutation')//只要触发mutation就会触发里面的方法
        localStorage.state= JSON.stringify(state)
    })
}