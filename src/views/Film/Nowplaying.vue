<template>
  <div>
    <ul>
      <li v-for="data in nowPlayingList"
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
import Vue from 'vue'
// import { getNowplaying } from '@/api/film/nowplaying'
import { mapState, mapActions } from 'vuex'
// 过滤器
Vue.filter('actorfilter', data => {
  if (data) {
    const newList = data.map(item => item.name)
    return newList.join(' ')
  }
})
export default {
  name: 'Nowplaying',
  data () {
    return {
      // dataList: []
    }
  },
  computed: {
    ...mapState({
      nowPlayingList: state => state.film.nowPlayingList
    })
  },
  mounted () {
    if (this.nowPlayingList.length === 0) {
      this.getNowPlayingList()
    } else {
      console.log('使用缓存数据')
    }
  },
  methods: {
    ...mapActions({
      getNowPlayingList: 'film/getNowPlayingList'
    }),
    toDetail (id) {
      this.$router.push({ path: `/detail/${id}` })
      // this.$router.push({ name: 'detail', params: { id: id } })
    }
  }
}
</script>
<style lang="scss" scoped>
div {
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
