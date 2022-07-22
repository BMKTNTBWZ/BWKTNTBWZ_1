<template>
  <div class="info">
    <p class="title">
        <i></i>
        病毒信息
    </p>
    <div class="content">
      <p> {{ covidInfo.note1 }} </p>
      <p> {{ covidInfo.note2 }} </p>
    </div>
  </div>
</template>

<script>



export default {
  props:{
    covidInfo:{
      type:Object,
      dafault:()=>{
        return {}
      }
    }
  }
}
</script>

<style scoped lang='less'>
    .info{
      padding: 1.3rem;
      background:#fff;
      border-bottom: 1px solid #f1f1f1;
      .title{
        font-size: 1.4rem;
        i{
          display: inline-block;
          width: 0.4rem;
          height: 1.6rem;
          margin-right: 0.3rem;
          vertical-align: middle;
          background:#4169e2;
        }
      }
    }
    .content{
      padding: 0.6rem 1.6rem;
      p{
        font-size: 15px;
        margin: 5px 0;
      }
    }
</style>