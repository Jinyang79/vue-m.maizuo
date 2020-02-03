<template>
  <div>
    <ul>
      <li v-for="data in comingSoonList"
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
// import { getComingsoon } from '@/network/film/comingsoon'
import { mapState } from 'vuex'
export default {
  name: 'Comingsoon',
  data () {
    return {
      // dataList: []
    }
  },
  computed: {
    ...mapState(['comingSoonList'])
  },
  mounted () {
    // getComingsoon().then(res => {
    //   console.log(res.data.data.films)
    //   this.dataList = res.data.data.films
    // })
    if (this.$store.state.comingSoonList.length === 0) {
      this.$store.dispatch('getComingSoonList')
    } else {
      console.log('使用缓存数据')
    }
  },
  methods: {
    toDetail (id) {
      this.$router.push({ path: `/detail/${id}` })
      // this.$router.push({ name: 'detail', params: { id: id } })
    }
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
