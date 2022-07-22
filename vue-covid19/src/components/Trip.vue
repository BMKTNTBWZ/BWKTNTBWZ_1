<template>
  <div class="spring">
    <h3 class="title">疫情期间出行防疫政策</h3>
    <Cascader label="出发城市" :options="options" @onValue="getFromCity"/>
    <Cascader label="到达城市" :options="options" @onValue="getToCity"/>
    <van-button type="info" block @click="watchHandle">查看政策</van-button>
  </div>
</template>

<script>
import api from "../api";
import Cascader from "./Cascader.vue";
export default {
  data() {
    return {
      options: [],
    };
  },
  components: {
    Cascader,
  },
  mounted() {
    api
      .getCitys()
      .then((res) => {
        if (res.data.reason === "success!") {
          var currentArray = [];
          for (var i = 0; i < res.data.result.length; i++) {
            var arr = [];
            for (var j = 0; j < res.data.result[i].citys.length; j++) {
              var temp1 = {
                text: res.data.result[i].citys[j].city,
                value: res.data.result[i].citys[j].city_id,
              };
              arr.push(temp1);
            }
            var temp = {
              text: res.data.result[i].province,
              value: res.data.result[i].province_id,
              children: arr,
            };
            currentArray.push(temp);
          }
          this.options = currentArray;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
    getFromCity(fromCity){
        console.log(fromCity)
    },
    getToCity(toCity){
        console.log(toCity)
    },
    watchHandle(){
        this.$router.push({path:'/info'})
    }
  }
};
</script>

<style scoped>
.spring {
  width: 100%;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}

.spring .title {
  font-size: 1.2rem;
  margin: 0 0 0.8rem 0.5rem;
}
</style>