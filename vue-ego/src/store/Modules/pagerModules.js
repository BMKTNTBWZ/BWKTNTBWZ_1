export default {
    namespaced:true,//作用域
    state:{
        page:1,
        search:"",
        flag:true
    },
    mutations:{
        setPage(state,page){
            state.page=page
        },
        setSearch(state,search){
            state.search=search
        },
        setAdd(state,flag){
            state.flag = flag
        }
    }
}