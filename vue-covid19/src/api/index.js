import axios from "../utils/request";
import base from "./base";

const api ={
    getNcov(params){
        console.log(base.baseUrl + base.ncov);
        return axios.get(base.baseUrl + base.ncov,{
            params
        })
    },
    getProvinceNcov(){
        console.log(base.baseUrl + base.provinceNcov);
        return axios.get(base.baseUrl + base.provinceNcov)
    },
    getWorldNcov(){
        console.log(base.baseUrl + base.worldNcov);
        return axios.get(base.baseUrl + base.worldNcov)
    },
    getCityNcov(params){
        // console.log(base.baseUrl + base.ncov);
        return axios.get(base.baseUrl + base.cityNcov,{
            params
        })
    },
    getSwiperImg(){
        console.log(base.baseUrl + base.worldNcov);
        return axios.get(base.baseUrl + base.swiperImg)
    },
    getCitys(){       
        return axios.get(base.baseUrl + base.citys)
    },
    getInfoNcov(params){
        // console.log(base.baseUrl + base.ncov);
        return axios.get(base.baseUrl + base.info,{
            params
        })
    },
}

export default api;