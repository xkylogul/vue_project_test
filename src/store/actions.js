import {getAppnum} from '@/api/app'
const actions = {
getNum(context){
getAppnum().then(res=>{
    console.log(res)
    context.commit('SET_ADD_NUM',res.code)
})
}
}
export default actions