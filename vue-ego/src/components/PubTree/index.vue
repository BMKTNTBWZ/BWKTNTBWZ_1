<template>
  <div>
    <el-tree :props="props" :load="loadNode" lazy @node-click="handleNodeClick"> </el-tree>
  </div>
</template>

<script>
import api from "../../api";
export default {
  data() {
    return {
      props: {
        label:"name"
      },
    };
  },
  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        api
          .selectItemCategoryByParentId()
          .then((res) => {
            if (res.data.status === 200) {
              return resolve(res.data.result);
            }
            return resolve([]);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (node.level >= 1) {
        api
          .selectItemCategoryByParentId(
            {id:node.data.cid}
          )
          .then((res) => {
            if (res.data.status === 200) {
              return resolve(res.data.result);
            }
            return resolve([]);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    handleNodeClick(data){
      this.$emit("onTree",data)
    }
  },
};
</script>

<style>
</style>