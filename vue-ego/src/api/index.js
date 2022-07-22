import axios from "axios";
import base from "./base"

const api = {
    // 登录接口
    login(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    register(params){
        return axios.post(base.baseUrl + base.register,params)
    }
}


export default api