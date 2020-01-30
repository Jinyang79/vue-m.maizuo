<template>
  <div>
    <ul>
      <li v-for="data in datalist"
          :key="data.filmId">
        <img :src="data.poster">
        <p>{{data.name}}</p>
        <p>观众评分{{data.grade}}</p>
        <p>主演:{{data.actors | actorfilter}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter('actorfilter', data => {
  const newList = data.map(item => item.name)
  return newList.join(' ')
})
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=394613',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1580019433369367191204","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  }
}
</script>
<style lang="scss" scoped>
ul {
  li {
    padding: 10px;
    overflow: hidden;
    img {
      float: left;
      width: 100px;
    }
  }
}
</style>
