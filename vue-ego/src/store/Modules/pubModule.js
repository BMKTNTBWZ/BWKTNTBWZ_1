export default {
    namespaced:true,//作用域
    state:{
        search:"",
    },
    mutations:{
        setSearch(state,search){
            state.search=search
        },

    }
}