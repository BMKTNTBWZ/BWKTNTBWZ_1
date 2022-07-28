const base = {
    baseUrl:"http://localhost:3000",//根路径
    login:"/api/login",      //登陆
    register:"/api/register", //注册
    selectTbItemAllByPage:"/api/backend/item/selectTbItemAllByPage",  //商品列表
    total:"/api/total",//分页数据总条数
    search:"/api/search",//商品查询
    selectItemCategoryByParentId:"/api/backend/itemCategory/selectItemCategoryByParentId",//类目选择
    insertTbItem:"/api/backend/item/insertTbItem",//添加数据
    deleteItemById:"/api/backend/item/deleteItemById",//商品删除
    preUpdateItem:"/api/backend/item/preUpdateItem",//预更新
    updateTbItem:"/api/backend/item/updateTbItem",//修改商品
    selectItemParamAll:"/api/backend/itemParam/selectItemParamAll",//规格参数
    ParamsSearch:"/api/params/search",//商品模糊查询
    insertItemParam:"/api/backend/itemParam/insertItemParam",//添加规格参数
    ParamsDelete:"/api/params/delete",//删除规格参数
    contentTitle:"/api/content/title",//内容分类-标题
    contentDelete:"/api/content/delete",//内容分类-标题删除
    contentAdd:"/api/content/add",//内容分类-标题添加
    contentList:"/api/content/list"//内容分类-列表
}

export default base