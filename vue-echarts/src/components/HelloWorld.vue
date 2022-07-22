<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="line" class="line"></div>
    <div class="map" id="map"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    this.$charts.line("line"),
    this.$charts.chinaMap("map")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line{
  width:100%;
  height: 400px;
}
.map{
  width:100%;
  height: 400px;
}
</style>
