<template>
  <div>
    <ul>
      <router-link to="/film/nowplaying"
                   active-class='active'
                   tag="li">正在热映</router-link>
      <router-link to="/film/comingsoon"
                   activeClass='active'
                   tag="li">即将上映</router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
div {
  width: 100%;
  height: 49px;
  background: #fff;
  z-index: 1000;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      height: 100%;
      line-height: 49px;
      margin: 0 60px;
      font-size: 14px;
      box-sizing: border-box;
    }
  }
  .active {
    color: #ff5f16;
    border-bottom: 2px solid #ff5f16;
  }
}
</style>
