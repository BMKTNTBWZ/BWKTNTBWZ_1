<template>
  <div>
    <h1>疫情期间出行防疫政策</h1>
    <div>
      <h3>{{ getFormInfo.name }}疫情政策</h3>
      <p>{{ getFormInfo.info }}</p>
      <h3>{{ getToInfo.name }}疫情政策</h3>
      <p>{{ getToInfo.info }}</p>
    </div>
  </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {

    };
  },
  methods:{
    getFormInfo(){},
    getToInfo(){}
  },
  mounted() {
    api
      .getInfoNcov({
        from: getFormInfo.city_id,
        to: getToInfo.city_id,
        key: "0dc68e0d3b31e72782735824357761dc",
      })
      .then((res) => {
        var getFormInfo = []
        var getToInfo = []
        this.getFormInfo = {
          name: res.data.result.from_info.city_name,
          city_id: res.data.result.from_info.city_id,
          info: res.data.result.from_info.out_desc,
        };
        getFormInfo.push(getFormInfo)
        this.getToInfo = {
          name: res.data.result.to_info.city_name,
          city_id: res.data.result.to_info.city_id,
          info: res.data.result.to_info.out_desc,
        };
        getToInfo.push(getToInfo)
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>