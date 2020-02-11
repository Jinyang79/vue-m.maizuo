<template>
  <div class="detail">
    <div class="goBack"
         @click="goBack">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
           alt="">
    </div>
    <div v-if="filmInfo">
      <img :src="filmInfo.poster"
           class="poster">
      <div class="film_conent">
        <div class="col">
          <div class="film_name">
            <span class="name">{{ filmInfo.name }}</span>
            <span class="item">{{ filmInfo.item.name }}</span>
          </div>
          <div class="grade">{{ filmInfo. grade }}{{ filmInfo.grade ? '分' : '&nbsp;'}}</div>
        </div>
        <div class="category text">{{ filmInfo.category }}</div>
        <div class="time text">{{filmInfo.premiereAt | dateFilter }}上映</div>
        <div class="runtime text">{{ filmInfo.nation }} | {{ filmInfo.runtime }} 分钟</div>
        <div class="hidde text">{{ filmInfo.synopsis }}</div>
      </div>
      <div class="film_actors">
        <div class="actors_title">演职人员</div>
        <actor-swiper class="actor-swiper"
                      :actors='filmInfo.actors'></actor-swiper>
      </div>
      <div class="photos-title">
        <div class="photos-title-text">剧照</div>
        <photo-swiper class="photo-swiper"
                      :photo='filmInfo.photos'></photo-swiper>
      </div>
      <div class="toBuyTicket">选座购票</div>
    </div>
  </div>
</template>
<script>
import { getDetail } from '@/api/film/detail'
import ActorSwiper from './Detail/ActorSwiper'
import PhotoSwiper from './Detail/PhotoSwiper'
import { Indicator } from 'mint-ui'
// import eventBus from '@/eventbus'
export default {
  name: 'Detail',
  components: {
    ActorSwiper,
    PhotoSwiper
  },
  props: ['id'],
  data () {
    return {
      filmInfo: null
    }
  },
  activated () {
    Indicator.open()
    this.$store.commit('city/hideTabbar', false)
    getDetail(this.id).then(res => {
      console.log(res.data)
      this.filmInfo = res.data.data.film
      Indicator.close()
    })
  },
  deactivated () {
    //   eventBus.$emit('maizuo', true)
    this.$store.commit('city/showTabbar', true)
    console.log('销毁事件')
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }

}
</script>
<style lang="scss" scoped>
div {
  box-sizing: border-box;
  display: block;
}
.poster {
  width: 100%;
}
.goBack {
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
  img {
    width: 30px;
  }
}
.film_conent {
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
  .col {
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    .film_name {
      width: 256px;
      span {
        vertical-align: middle;
      }
      .name {
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
      }
      .item {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
      }
    }
    .grade {
      width: calc(100% - 250px);
      text-align: right;
      color: #ffb232;
      font-size: 18px;
    }
  }
  .text {
    font-size: 13px;
    color: #797d82;
    margin-top: 7px;
  }
  .hidde {
    font: 13px/1.5 Tahoma, Helvetica, Arial, sans-serif;
    height: 38px !important;
    overflow: hidden;
    margin-top: 12px;
  }
}
.film_actors {
  margin-top: 10px;
  background-color: #fff;
  .actors_title {
    padding: 15px;
    width: 100%;
  }
  .actor-swiper {
    padding-left: 15px;
  }
}
.photos-title {
  margin-top: 10px;
  height: 62px;
  .photos-title-text {
    padding: 15px;
    height: 62px;
    width: 100%;
  }
  .photo-swiper {
    padding-left: 15px;
  }
}
.toBuyTicket {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
  z-index: 1000;
}
</style>
