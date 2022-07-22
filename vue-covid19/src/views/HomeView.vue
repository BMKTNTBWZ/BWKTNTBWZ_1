<template>
  <div class="home">
    <Header/>
    <Covid19info :covidInfo="covidInfo"/>
    <CaseNum :caseNum="caseNum"/>
    <Map/>
    <Myswiper />
    <Trip />
    <News :news="news"/>
  </div>
</template>

<script>
import api from '../api'
import Covid19info from '../components/covid19info.vue'
import Header from '../components/Header.vue'
import CaseNum from '../components/CaseNum.vue'
import Map from '../components/Map.vue'
import Myswiper from '../components/Myswiper.vue'
import Trip from '../components/Trip.vue'
import News from '../components/News.vue'

export default {
  name: 'HomeView',
  data(){
    return{
      covidInfo:{},
      caseNum:{},
      news:{}
    }
  },
  components: {
    Header,
    Covid19info,
    CaseNum,
    Map,
    Myswiper,
    Trip,
    News,
  },
  mounted(){
    api.getNcov({
    }).then(res=>{
      if(res.data.msg === "success"){
        this.covidInfo={
          note1:res.data.newslist[0].news[0].summary,
          note2:res.data.newslist[0].news[1].summary,
        },
        this.caseNum = {
            // 更新时间戳
            modifyTime:res.data.newslist[0].desc.modifyTime,
            // 现存确诊人数
            currentConfirmedCount:res.data.newslist[0].desc.currentConfirmedCount,
            // 累计确诊人数
            confirmedCount:res.data.newslist[0].desc.confirmedCount,
            // 累计境外输入人数
            suspectedCount:res.data.newslist[0].desc.suspectedCount,
            // 累计治愈人数
            curedCount:res.data.newslist[0].desc.curedCount,
            // 累计死亡人数
            deadCount:res.data.newslist[0].desc.deadCount,
            // 现存无症状人数
            seriousCount:res.data.newslist[0].desc.seriousCount,
            // 新增境外输入人数
            suspectedIncr:res.data.newslist[0].desc.suspectedIncr,
            // 相比昨天现存确诊人数
            currentConfirmedIncr:res.data.newslist[0].desc.currentConfirmedIncr,
            // 相比昨天累计确诊人数
            confirmedIncr:res.data.newslist[0].desc.confirmedIncr,
            // 相比昨天新增治愈人数
            curedIncr:res.data.newslist[0].desc.curedIncr,
            // 相比昨天新增死亡人数
            deadIncr:res.data.newslist[0].desc.deadIncr,
            // 相比昨天现存无症状人数
            seriousIncr:res.data.newslist[0].desc.seriousIncr
          }
          this.news = res.data.newslist[0].news
      }
    }).catch(error=>{
      console.log(error);
    })
  }
}
</script>
