<template>
  <div>
    <ul>
      <router-link to="/film/nowplaying"
                   active-class='active'
                   tag="li">正在上映</router-link>
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
ul {
  display: flex;
  li {
    flex: 1;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
  }
}
.active {
  color: orangered;
  border-bottom: 2px solid orangered;
}
div {
  width: 100%;
  height: 49px;
}
</style>
