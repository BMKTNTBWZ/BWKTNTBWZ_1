export default {
    namespaced:true,//作用域
    state:{
        username:"",
    },
    mutations:{
        updataUsername(state,username){
            state.username = username
        },
        clearUsername(state){
            state.username = ""
        }
    }
}