<template>
  <div>
    <MainNav/>
    <router-view class="main-container"></router-view>
  </div>
</template>

<script>
import MainNav from "../components/MainNav"
export default {
  components:{
    MainNav
  }
}
</script>

<style scoped>
.main-container{
  margin: 10px 10px 0 210px;
}
</style>