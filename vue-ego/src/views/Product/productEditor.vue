<template>
  <el-dialog
    title="修改商品"
    :visible.sync="dialogEditorVisible"
    width="70%"
    :before-close="handleClose"
  >
    <el-form label-width="70px" :model="editorForm" ref="editorForm">
      <el-form-item label="商品类目">
        <el-button class="CategorySelect" type="primary" @click="dialogCategoryHandle"
          >类目选择</el-button
        >
        <span class="CategorySelect1">{{ treeData.name }}</span>
        <el-dialog
          width="50%"
          title="类目选择"
          :visible.sync="dialogCategoryVisible"
          append-to-body
        >
          <ProductTree @onTree="getTreeData" />
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogCategoryVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogCategoryVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="editorForm.name"></el-input>
      </el-form-item>
      <el-form-item label="商品卖点">
        <el-input v-model="editorForm.sellPoint"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="editorForm.price"></el-input>
      </el-form-item>
      <el-form-item label="商品数量">
        <el-input v-model="editorForm.num"></el-input>
      </el-form-item>
      <el-form-item label="上传图片">
        <el-button type="primary" class="CategorySelect" @click="dialogUploadHandle">上传图片</el-button>
        <img class="image" :src="UploadData.url" alt="" />
        <el-dialog
          width="50%"
          title="上传图片"
          :visible.sync="dialogUploadVisible"
          append-to-body
        >
          <product-upload @onUpload="getonUploadData"/>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogUploadVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogUploadVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品描述">
        <!-- <BaiduUEditor /> -->
        <WangEditor @onEditor="getEditorData" :editorData="editorData" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogEditorVisible = false">取 消</el-button>
      <el-button type="primary" @click="editorHandle">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
// import BaiduUEditor from './BaiduUEditor.vue';
import productTree from "./productTree.vue";
import ProductUpload from "./productUpload.vue";
import WangEditor from "./wangEditor.vue";
// import { mapMutations } from "vuex"
import api from "../../api";
export default {
  components: { productTree, ProductUpload, WangEditor },
  data() {
    return {
      dialogEditorVisible: false,
      dialogCategoryVisible: false,
      dialogUploadVisible: false,
      editorForm: {},
      treeData: {},
      UploadData: {},
      editorData: "",
      currentRow: {},
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    dialogCategoryHandle() {
      this.dialogCategoryVisible = true;
    },
    dialogUploadHandle() {
      this.dialogUploadVisible = true;
    },
    getTreeData(data) {
      this.treeData = data;
    },
    // 修改按钮
    editorHandle() {
      api
        .updateTbItem({
          id: this.currentRow.id,
          title: this.editorForm.name,
          cid: this.treeData.cid,
          sellPoint: this.editorForm.sellPoint,
          price: this.editorForm.price,
          num: this.editorForm.num,
          desc: this.editorData,
          image: this.UploadData.url,
        })
        .then((res) => {
          if (res.data.status === 200) {
            this.$message({
              message: res.data.msg,
              type: "success",
            });
            this.dialogEditorVisible = false;
            this.$bus.$emit("onRefresh", true);
          } else {
            this.$message({
              message: res.data.msg,
              type: "error",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getonUploadData(data) {
      if (data.url) {
        data.url = data.url.replace("upload", "http://localhost:3000");
      }
      this.UploadData = data;
      console.log(data);
    },
    getEditorData(data) {
      this.editorData = data;
    },
  },
  props: {
    flag: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    // flag(newVal){
    //     this.dialogEditorVisible = newVal
    // }
  },
  mounted() {
    this.$bus.$on("onShowEditor", (row) => {
      this.dialogEditorVisible = true;
      this.currentRow = row;
      api
        .preUpdateItem({ id: row.id })
        .then((res) => {
          this.treeData = {
            cid: res.data.result.cid,
            name: res.data.result.cid,
          };
          this.editorForm = {
            name: res.data.result.title,
            price: res.data.result.price,
            num: res.data.result.num,
            sellPoint: res.data.result.sellPoint,
          };
          this.uploadData = {
            url: res.data.result.image,
          };
          this.editorData = res.data.result.descs;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};
</script>

<style scoped>
.CategorySelect {
  float: left;
}
.CategorySelect1 {
  float: left;
  margin-left: 10px;
  font-size: 20px;
}
.image {
  width: 300px;
  float: left;
  margin-left: 10px;
}
</style>