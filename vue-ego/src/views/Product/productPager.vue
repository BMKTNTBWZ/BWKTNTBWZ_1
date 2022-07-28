<template>
  <div class="pagination">
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import api from '../../api'
export default {
    data(){
        return{
            total:0
        }
    },
    methods:{
        ...mapMutations("pagerModules",["setPage"]),
        handleCurrentChange(val){
            this.setPage(val)
        }
    },
    mounted(){
        api.total().then(res=>{
            if(res.data.status === 200){
                this.total = res.data.result[0]["count(*)"]
            }
        }).catch(error=>{
            console.log(error);
        })
    }
};
</script>

<style scoped>
.pagination {
  margin-top: 50px;
}
</style>