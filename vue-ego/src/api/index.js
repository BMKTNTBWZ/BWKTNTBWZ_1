import axios from "axios";
import base from "./base"

const api = {
    // 登录接口
    login(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    register(params){
        return axios.post(base.baseUrl + base.register,params)
    },
    selectTbItemAllByPage(params){
        return axios.get(base.baseUrl + base.selectTbItemAllByPage,{
            params
        })
    },
    total(){
        return axios.get(base.baseUrl + base.total)
    },
    search(params){
        return axios.get(base.baseUrl + base.search,{
            params
        })
    },
    selectItemCategoryByParentId(params){
        return axios.get(base.baseUrl + base.selectItemCategoryByParentId,{
            params
        })
    },
    insertTbItem(params){
        return axios.get(base.baseUrl + base.insertTbItem,{
            params
        })
    },
    deleteItemById(params){
        return axios.get(base.baseUrl + base.deleteItemById,{
            params
        })
    },
    preUpdateItem(params){
        return axios.get(base.baseUrl + base.preUpdateItem,{
            params
        })
    },
    updateTbItem(params){
        return axios.get(base.baseUrl + base.updateTbItem ,{
            params
        })
    },
    //规格参数
    selectItemParamAll(params){
        return axios.get(base.baseUrl + base.selectItemParamAll ,{
            params
        })
    },
    //规格参数模糊查询
    ParamsSearch(params){
        return axios.get(base.baseUrl + base.ParamsSearch ,{
            params
        })
    },
    //添加规格参数
    insertItemParam(params){
        return axios.get(base.baseUrl + base.insertItemParam ,{
            params
        })
    },
    //删除规格参数
    ParamsDelete(params){
        return axios.get(base.baseUrl + base.ParamsDelete ,{
            params
        })
    },
    //内容分类标题
    contentTitle(){
        return axios.get(base.baseUrl + base.contentTitle)
    },
    contentDelete(params){
        return axios.get(base.baseUrl + base.contentDelete,{
            params
        })
    },
    contentAdd(params){
        return axios.get(base.baseUrl + base.contentAdd,{
            params
        })
    },
    contentList(params){
        return axios.get(base.baseUrl + base.contentList,{
            params
        })
    },
    
}


export default api