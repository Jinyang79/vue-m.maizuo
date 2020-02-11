<template>
  <div class="page-city">
    <div class="header">
      <div @click="isCity"
           class="header_left">
        <i class="iconfont iconchazi"></i>
      </div>
      <div class="header_title">当前城市 - {{ cityName  && cityName.name }}</div>
    </div>
    <div class="hot-city">
      <div class="city-index-title">热门城市</div>
      <ul class="city-index-detail">
        <li class="city-item-detail"
            v-for="city in hotCity"
            :key="city.cityId"
            @click="handleClick(city.cityId)">
          <div class="city-item-text">{{ city.name }}</div>
        </li>
      </ul>
    </div>
    <mt-index-list>
      <mt-index-section :index="data.index"
                        v-for="data in cityList"
                        :key="data.index">
        <div v-for="city in data.list"
             :key="city.index"
             @click="handleClick(city.cityId)">
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      cityList: 'city/cityListGetter',
      hotCity: 'city/hotCity',
      cityName: 'city/cityName'
    })
  },
  activated () {
    this.$store.commit('city/hideTabbar', false)
  },
  mounted () {
    // this.dataList = this.getCityList(res.data.data.cities)
    this.getCityList()
  },
  deactivated () {
    this.$store.commit('city/showTabbar', true)
  },
  methods: {
    isCity () {
      MessageBox({
        message: '请选择您所在城市哦',
        showCancelButton: true
      })
    },
    ...mapActions({
      getCityList: 'city/getCityList'
    }),
    ...mapMutations({
      changeCity: 'city/changeCity'
    }),
    handleClick (id) {
      // 修改存储的数据
      this.changeCity(id)
      // 将选中ID存储在本地
      localStorage.setItem('cityId', id)

      this.$router.go(-1)
    }

  }
}
</script>
<style lang="scss" scoped>
.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    position: relative;
    width: 100%;
    height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 300;
    background: #fff;
    & > div {
      float: left;
      height: 44px;
    }
    &_left {
      width: 14%;
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      i {
        display: block;
        font-size: 19px;
        margin-left: 10px;
        color: #191a1b;
      }
    }
    .header_title {
      width: 72%;
      text-align: center;
      font-size: 17px;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      color: #191a1b;
    }
  }

  .city-index-title {
    font-size: 13px;
    color: #797d82;
    margin-bottom: 10px;
  }

  .city-index-detail {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .city-item-detail {
      width: 33.33%;
      text-align: center;
      padding-bottom: 15px;
      box-sizing: border-box;
      float: left;

      .city-item-text {
        height: 30px;
        line-height: 30px;
        background-color: #f4f4f4;
        border-radius: 3px;
        box-sizing: border-box;
        margin: 0 7.5px;
        font-size: 14px;
        color: #191a1b;
      }
    }
  }
}
.hot-city {
  padding: 15px;
}
</style>
