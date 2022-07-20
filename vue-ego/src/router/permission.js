import router from "./index";
import store from '../store'

router.beforeEach((to, from ,next) => {
    if (to.matched.some(record => record.meta.requiresAuth)){
        const  token =store.state.loginModules.token;
        return token ? next():next({path:'/login'})
    }else{
        next()
    }
})
