const mutations = {
SET_ADD_NUM (state,payload){
    console.log(payload)
    state.add_num = state.add_num+payload
}
}
export default mutations