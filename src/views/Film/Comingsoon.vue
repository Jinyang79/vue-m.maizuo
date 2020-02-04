<template>
  <div>
    <ul>
      <li v-for="data in comingSoonList"
          :key="data.filmId"
          @click="toDetail(data.filmId,data.isPresale)">
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
import { MessageBox } from 'mint-ui'
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
    if (this.comingSoonList.length === 0) {
      this.$store.dispatch('getComingSoonList')
    } else {
      console.log('使用缓存数据')
    }
  },
  methods: {
    toDetail (id, data) {
      if (!data) {
        MessageBox({
          message: '该影片目前没有排期，到首页看其他电影吧',
          showCancelButton: true
        }).then(res => {
          if (res === 'confirm') {
            this.$router.push(`/film`)
          }
        })
      }
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
