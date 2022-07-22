<template>
  <div class="news">
      <div class="card">
          <ul class="list">
              <li class="item" v-for="(item,index) in news" :key="index">
                  <div class="tag">{{ item.pubDateStr }}</div>
                  <div class="content">
                      <div class="title">{{ item.title }}</div>
                      <p>{{ item.summary }}</p>
                  </div>
                  <a :href="item.sourceUrl">></a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        news:{
            type:Array,
            default:() =>{
                return []
            }
        }
    }
};
</script>

<style scoped>
.news {
  padding: 1rem 1rem;
  font-size: 1.2rem;
  background-color: #fff;
}

.header {
  margin-bottom: 0.8rem;
  color: #333;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.225rem;
}
.card {
  border-radius: 0.4rem;
  border: 0.05rem solid #ebebeb;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 0.2rem 0.6rem 0 rgba(0, 0, 0, 0.05);
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.6rem;
  border-bottom: 1px solid #f1f1f1;
}

.tag {
  display: flex;
  flex: none;
  align-items: center;
  height: 1rem;
  margin-top: 0.2rem;
  padding: 0 0.4rem;
  border-radius: 0.2rem;
  background-color: #f74c31;
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
}
.content {
  display: flex;
  flex: auto;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.7rem;
}
.title {
  color: #333;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.225rem;
}
.content p {
  margin-top: 0.3rem;
  color: #999;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

img {
  flex: none;
  align-self: center;
  width: 1.2rem;
  height: 1.2rem;
}
</style>