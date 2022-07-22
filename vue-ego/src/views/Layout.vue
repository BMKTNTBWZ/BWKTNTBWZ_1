<template>
  <div>
    <MainNav/>
    <router-view></router-view>
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

<style>

</style>