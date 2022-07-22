<template>
  <div>
    <van-field
      v-model="city"
      is-link
      readonly
      :label="label"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      city: "",
      show: false,
      cascaderValue: "",
    };
  },
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    label:{
        type:String,
        default:""
    }
  },
  methods: {
    onFinish({ selectedOptions }) {
      this.show = false;
      this.city = selectedOptions.map((option) => option.text).join("/");
      this.$emit("onValue",selectedOptions[1])
    },
  },
};
</script>
 
<style>
</style>