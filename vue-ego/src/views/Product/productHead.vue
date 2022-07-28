<template>
  <div class="head">
    <el-form ref="serachForm" :model="search" @submit.native.prevent>
        <el-form-item>
            <el-input v-model="search.content" @keyup.enter.native="onSubmitSearch"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="onSubmitSearch">查询</el-button>
            <el-button type="primary" icon="el-icon-plus" @click="AddProductHandle">添加</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
    data(){
        return{
            search:{},
        }
    },
    methods:{
        ...mapMutations("pagerModules",["setSearch"]),
        onSubmitSearch(){
            this.setSearch(this.search.content)
        },
        AddProductHandle(){
            this.$bus.$emit("onAdd",true)
        },
    },

}
</script>

<style scoped lang="less">
.el-form {
    overflow: hidden;
    clear: both;
    display: flex;
    width: 100%;
    display: flex;
    .el-form-item {
        float: left;
        margin-right: 10px;
        // flex: 1;
        .el-input {
            .el-input__inner{
                flex: 1;
            }
            width: 1090px;
        }
    }
}
 
.head {
    margin-top: 20px;
    width: 100%;
}
</style>