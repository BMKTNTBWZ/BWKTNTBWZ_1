<template>
  <div>
    <div class="banner">易购商城后台系统</div>
    <el-card class="box-card">
      <el-tabs stretch v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录" name="login">
          <el-form
            :model="loginForm"
            status-icon
            ref="loginForm"
            label-width="100px"
          >
            <el-form-item label="用户名:">
              <el-input type="text" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitLoginForm('loginForm')"
                >登录</el-button
              >
              <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">注册</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import api from "../../api";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      activeName: "login",
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations("loginModules", ["updataUsername"]),
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitLoginForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.loginForm);
          api
            .login({
              username: this.loginForm.username,
              password: this.loginForm.password,
            })
            .then(res => {
              if (res.data.status === 200) {
                this.updataUsername(res.data.result[0].username);
                this.$router.push("/");
              }
              alert("登陆成功");
              console.log(res.data);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          console.log("用户名密码错误");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.banner {
  font-size: 30px;
  margin-top: 100px;
}
.box-card {
  width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #fff;
}
</style>