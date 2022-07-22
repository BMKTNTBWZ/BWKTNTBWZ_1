<template>
  <div>
    <div class="header">
        <div class="login">
            <el-badge :value="12" class="item">
                <i class="el-icon-message-solid"></i>
            </el-badge>
            <span class="user-name">{{username}}</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    个人中心
                <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <!-- tag：router-link默认被渲染成a标签，我们可以选择渲染其他标签，使用tag -->
                        <router-link to="/user" tag="span">个人中心</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item><div @click="logout">退出</div></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
    <el-menu
        :default-active="currentIndex"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
    >
        <el-menu-item index="/product">
            <i class="el-icon-s-goods"></i>
            <span>商品管理</span>
        </el-menu-item>
        <el-menu-item index="/params">
            <i class="el-icon-s-order"></i>
            <span>规格参数</span>
        </el-menu-item>
        <el-menu-item index="/content">
            <i class="el-icon-printer"></i>
            <span>广告内容管理</span>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex"
export default {
    data(){
        return{
            currentIndex:"/product"
        }
    },
    computed:{
        ...mapState("loginModules",["username"])
    },
    methods:{
        ...mapMutations("loginModules",["clearToken"]),
        logout(){
            this.clearToken();
            localStorage.removeItem("ego-token");
            this.$router.push("/login")
        }
    }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  box-shadow: 0px 0px 5px 1px #999;
}
 
.header .user-name {
  color: #fff;
  margin-right: 10px;
  font-size: 15px;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  background: #999;
}
 
.header .login {
  height: 50px;
  float: right;
  margin-right: 20px;
}
 
.header .login .item {
  height: 25px;
  margin-right: 30px;
}
 
.header .login .item i {
  display: block;
  font-size: 25px;
}

.el-menu-vertical-demo{
    width: 200px;
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    text-align: left;
}
</style>