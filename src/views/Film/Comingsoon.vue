<template>
  <div>
    <ul>
      <li v-for="data in dataList"
          :key="data.filmId"
          @click="toDetail(data.filmId)">
        <img :src="data.poster">
        <div class="content">
          <p>{{data.name}}</p>
          <p>观众评分{{data.grade}}</p>
          <p>主演:{{data.actors | actorfilter}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getComingsoon } from '@/network/film/comingsoon'
export default {
  name: 'Comingsoon',
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    getComingsoon().then(res => {
      console.log(res.data.data.films)
      this.dataList = res.data.data.films
    })
  }
}
</script>
<style lang="scss" scoped>
div {
  padding-top: 44px;
  padding-bottom: 50px;
}
ul {
  li {
    padding: 10px;
    overflow: hidden;
    img {
      float: left;
      width: 66px;
    }
    .content {
      float: left;
      width: 200px;
      padding: 0 10px;
    }
  }
}
</style>
