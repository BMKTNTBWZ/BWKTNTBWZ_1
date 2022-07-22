<template>
  <div>
    <p class="title"><i></i>疫情地图</p>
    <tabs :currentIndex="currentIndex" @onIndex="getIndexHandle">
      <tab index="chinaMap" label="中国地图"
        ><div class="map" id="map"></div
      ></tab>
      <tab index="worldMap" label="世界地图"
        ><div class="map" id="worldMap"></div
      ></tab>
    </tabs>
  </div>
</template>
 
<script>
import api from "../api";

export default {
  data() {
    return {
      currentIndex: "chinaMap",
    };
  },
  methods: {
    getIndexHandle(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    // 国内
    api
      .getProvinceNcov()
      .then((res) => {
        let allCitys = [];
        if (res.data.message == "操作成功!") {
          for (let i = 0; i < res.data.retdata.length; i++) {
            var temp = {
              name: res.data.retdata[i].xArea,
              value: res.data.retdata[i].curConfirm,
            };
            allCitys.push(temp);
          }
          this.$charts.chinaMap("map", allCitys);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // 世界
    api
      .getWorldNcov()
      .then((res) => {
        // console.log(res.data);
        let allCitys = [];
        if (res.data.message == "操作成功!") {
          for (let i = 0; i < res.data.retdata.length; i++) {
            var temp = {
              name: res.data.retdata[i].xArea,
              value: res.data.retdata[i].curConfirm,
            };
            allCitys.push(temp);
          }
          this.$charts.worldMap("worldMap", allCitys);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.map {
  widows: 375px;
  height: 400px;
}
.title {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 2.5rem;
  padding: 0 0.86rem;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 0.44rem;
  background: #fff;
}
.title::before {
  content: "";
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
</style>