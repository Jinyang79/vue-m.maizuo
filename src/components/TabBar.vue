<template>
  <div>
    <ul>
      <router-link to="/film"
                   tag="li"
                   active-class='active'>
        <i class="iconfont icondianying"></i>
        <span>电影</span>
      </router-link>
      <router-link to="/cinema"
                   tag="li"
                   active-class='active'>
        <i class="iconfont iconhuaban"></i>
        <span>影院</span>
      </router-link>
      <router-link to="/center"
                   tag="li"
                   active-class='active'>
        <i class="iconfont iconself"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
div {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  ul {
    display: flex;
    li {
      position: relative;
      flex: 1;
      line-height: 50px;
      text-align: center;
      i {
        font-size: 20px;
      }
      span {
        position: absolute;

        font-size: 10px;
        line-height: 12px;
        color: #797d82;
        top: 38px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.active {
  color: orangered;
  border-bottom: 2px solid orangered;
  span {
    color: orangered;
  }
}
</style>
