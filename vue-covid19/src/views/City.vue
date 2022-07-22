<template>
  <div>
    <div class="title">
      <h3>{{ cityName }}疫情数据</h3>
    </div>
    <div class="city" id="city"></div>
  </div>
</template>

<script>
import api from "../api";

export default {
  props: {
    cityName: {
      type: String,
      default: "北京",
    },
  },
  mounted() {
    api
      .getCityNcov({
        city: this.cityName,
      })
      .then((res) => {
        var citys = [];
        for (let i = 0; i < res.data.retdata.subList.length; i++) {
          var temp = {
            name: res.data.retdata.subList[i].city + "市",
            value: res.data.retdata.subList[i].curConfirm,
          };
          citys.push(temp);
        }
        this.$charts.cityMap("city", citys, this.cityName);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2828ff;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
.city {
  width: 375px;
  height: 500px;
}
</style>