<template>
  <div>
    <product-head/>
    <product-list/>
    <productPager/>
    <product-add/>
  </div>
</template>

<script>
import productHead from './productHead.vue'
import productList from './productList.vue'
import productPager from './productPager.vue'
import ProductAdd from './productAdd.vue'

export default {
  components: { 
    productHead,
    productList,
    productPager,
    ProductAdd
  },
}
</script>

<style>

</style>