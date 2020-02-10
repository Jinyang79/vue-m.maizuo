<template>
  <div class="move">
    <ul>
      <li v-for="data in comingSoonList"
          :key="data.filmId"
          @click="toDetail(data.filmId,data.isPresale)">
        <img :src="data.poster">
        <div class="movie_datails">
          <div class="movie_datails_movieId">
            <span class="name">{{data.name}}</span>
            <span class="item">{{ data.filmType.name }}</span>
          </div>
          <div class="movie_datails_pingfen">
            <span>{{ data.grade ? '观众评分 ' : '&nbsp;'}}</span>
            <span class="number">{{ data.grade }}</span>
          </div>
          <div class="movie_datails_star">
            <span>主演：{{ data.actors | actorFilter}}</span>
          </div>
          <div class="movie_datails_time">
            <span>{{ data.nation }} | {{ data.runtime }}分钟</span>
          </div>
        </div>
        <div class="movie_buy">购票</div>
      </li>
    </ul>
  </div>
</template>
<script>
// import { getComingsoon } from '@/api/film/comingsoon'
import { mapState, mapActions } from 'vuex'
import { MessageBox } from 'mint-ui'
export default {
  name: 'Comingsoon',
  data () {
    return {
      // dataList: []
      prevCityId: -1
    }
  },
  computed: {
    ...mapState({
      comingSoonList: state => state.film.comingSoonList,
      cityId: state => state.city.cityId
    })
  },
  activated () {
    // 判断是否用缓存数据
    if (this.prevCityId === this.cityId) {
    } else {
      this.getComingSoonList()
      console.log(1)
      this.prevCityId = this.cityId
    }
  },
  methods: {
    ...mapActions({
      getComingSoonList: 'film/getComingSoonList'
    }),

    toDetail (id, Presale) {
      console.log(Presale)

      if (!Presale) {
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
.move {
  padding-bottom: 60px;
}
ul {
  li {
    display: flex;
    padding: 10px;
    overflow: hidden;
    align-items: center;
    img {
      float: left;
      width: 66px;
    }
    span {
      font-size: 13px;
      margin-top: 4px;
      color: #797d82;
    }
    .movie_datails {
      position: relative;
      float: left;
      width: calc(100% - 116px);
      padding: 0 10px;
      .movie_datails_movieId {
        span {
          display: inline-block;
          vertical-align: middle;
        }
        .name {
          max-width: calc(100% - 25px);
          color: #191a1b;
          font-size: 16px;
          height: 22px;
          line-height: 22px;
          margin-right: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
      .movie_datails_pingfen {
        visibility: visible;
        .number {
          color: #ffb232;
          font-size: 14px;
        }
      }
    }
    .movie_buy {
      line-height: 25px;
      float: right;
      top: 34px;
      height: 25px;
      width: 50px;
      color: #ff5f16;
      font-size: 13px;
      text-align: center;
      border-radius: 2px;
      float: right;
      border: 1px solid #ff5f16;
    }
  }
}
</style>
