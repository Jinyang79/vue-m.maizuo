<template>
  <div class="mz-center">
    <div class="main">
      <router-link tag="div"
                   to="/login"
                   class="avatar">
        <img src="@/assets/img/avatar.png"
             alt="">
        <div class="login">立即登录</div>
      </router-link>
      <ul class="order">
        <router-link tag="li"
                     to="/login">
          <img src="@/assets/img/dianyingdingdan.png"
               alt="">
          <div>电影订单</div>
        </router-link>
        <router-link tag="li"
                     to="/login">
          <img src="@/assets/img/shanpingdingdan.png"
               alt="">
          <div>商品订单</div>
        </router-link>
      </ul>
      <router-link tag="div"
                   to="/login"
                   class="card">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAIVBMVEVHcEz/iGT/hWL/hGL/hWL/hGL/hGL/hGP/hWP/jGn/hGISk7EWAAAACnRSTlMAHOamtu21p7QdUXNikQAAAFtJREFUKM9jYKAFENdahQIWGTIwMEatQgNLBRiYlwig6mT0MmBgWohu3iwFBq4F6IJAEZoIrsIAuATp5qTBI8i2atUybIIraGU7ZmKQUsCebLAmMMykWEiTFA8AIQBrdTyC6ekAAAAASUVORK5CYII="
             width="20px"
             height="20px"
             alt="">
        <span>卖座卷</span>
        <i class="iconfont iconarrow-small"></i>
      </router-link>
      <router-link tag="div"
                   to="/login"
                   class="card">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEVHcEy6onu6onq7ony6onu6onq7o3q/o3+7onq6onu6onq6onq6onq6onq7o3q6o33////Bo3rUqn+6o3q6onq6onq6o3q6o3u/pHq9o3z/qqq7pX3Gqo27onq6o3q/p3+9pHu6o3q6onr49fHOvaH////RwCj0AAAAInRSTlMAttxxne1iHKbmksH443VDARkG6avv9J8wJwM5CdzvIB+3XPrbDQAAAMhJREFUOMvt1MkOgkAQBNAGZJV939UC/v8XRSEwA0Iw8WJCnZrMSwaKpIm+iqrp2IiuqYyTsRN5lhoEdfMyAdr0oEPdeS3o0wx429ADGCjet9xN5CCs7LPLLHDwiiCdq5orSYP+iIXlA1HBVDVWUkQQSg6SHyJ2hqrapmmHSpwYoU88pDyBaSuKUqPpugZ1P9omkpyWkFxj/BNvOMRwaQ2JpEufari6es0Se7oY+Y/Zg3w9e3CVE57w3+HhbXZ4Px7euId3+E/zBNmqKziBGBK3AAAAAElFTkSuQmCC"
             width="20px"
             height="20px"
             alt="">
        <span>组合红包</span>
        <i class="iconfont iconarrow-small"></i>
      </router-link>
      <router-link tag="div"
                   to="/login"
                   class="card">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABmFBMVEVHcEz/sjL/sjL/sjL/tDT/tkj/sjL/sjL/sjL/sjL/tTX/szT/sjL/tDL/tDz/////sjL/sjL/tjz/uUX/xjj/tjP/szP/szL/uzP/sjL/sjL/szP/sjT/tjb/sjT/sjL/sjL/tDL/sjL/sjT/sjL/vz//sjL/szL/sjP/szL/tDX/sjP/vz//sjL/szP/tTL/sjP/sjP/vz//sjL/sjL/szP/szL/sjL/sjL/szP/szT/uTn/sjL/tDP/tjL/sjL/sjP/sjL/vDf/sjP/tTP/sjL/szL/uDT/sjT/tDf/uzX/sjL/szP/tzT/sjL/sjP/tDn/sjP/szP/szL/sjL/uTb/sjP/szP/sjP/tDL/sjL/szP/sjL/sjL/sjP/szP/sjL/szf/sjP/sjP/szL/sjL/szL/tjb/szP/sjP/sjL/zDP/sjL/szP/szb/sjL/sjP//1X/sjL/szL/sjL/sjP/sjL/szL/sjL/sjP/szL/szP/uDj/sjP/sjL/szL/tzP/sjL/ujr/szP/sjL/szP/sjP/sjKQA/lwAAAAh3RSTlMA7v6IUgfL+O2TJljzYBEB/PsVCwkjbMYP6fGvUyo/8tlW6k3iBOPK+qgwMgj0uUwouAzQ5Da8kvdeYhaJTzicluAXri3eeh1dKRPUwyfVCh8Upax+Icfhn2b9dqHa8H23JbRQnnTADtepugXYmy/PhgPWl+y99lvByHDrEubbbxn5GpXvX4UZrulbAAACJ0lEQVQYGXXBg2LrAAAF0Nt2SbPa1mxbb7Zt89k272+/pmu6JM3OQUH9Byt13r1tRZG5chp4E4Hee4Yj0Jn7yBnolVGsgk5VmDPQ+/KVW5vQ2NziZxeK1G8zZoeKPcbtBhhwrZM7fuS175DrLhjbIDMTyJnIkBu4x26MTVMB5ASmmhjbhRH/GhmfRsF0nFzzo8jKEh12aNgdXFqBjq2S84vQWZxnpQ0as1EuRFAkssDoLFR8k2xbhoHlNk76UCCEWROAoUANwwIUgxwdwz3GRjmIvC6P5wFyqp7XvUSO++kTP3IeeDxdyHF30IJb7lccQc4LVj7GLQs73JANsVNA3qnET8hy0vEMeUInhyATGUJB6udeBZCq3WtBQYg1yGqlJODOXzrqbRK/406jxFYAlzyA2j9Wf+NvqB3wEkAzE1DUSZJkYtYfSZLqoEiwDcANk1CcWWWkVXYGRZI3ANK8hpbJDK1rpgE42A4tkxla7XQAyPAUimCJrIklsiAUNmYAXDEFRTVVqqFI8QrABfehKCuVWVkqK4NinxcAzilCy2SGlshzAI1p2qBhMkPDxnQjsobZDA2TGRrNHIZsQGIf1ExmqPVRGkBOP3sroPLwEVQqetmPvB56nbiH08seFFjI7iQMJLtJC1Sc5fSOJwRoCIlxL8ud0HC9riWPTiz2hqBPEHzBBrvl5IisHXFBbzUkUkcMrcLQr5bjuHgYtVqjh2L8uOUHVP4D4AiVhBhUn0MAAAAASUVORK5CYII="
             width="20px"
             height="20px"
             alt="">
        <span>余额</span>
        <i class="iconfont iconarrow-small"></i>
      </router-link>
      <router-link tag="div"
                   to="/login"
                   class="card">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAB+FBMVEVHcEy5zVK5zFHBzFG4y1DE12K4y1D//3+5y1G4y1C4y1C4y1D//1W71lC4y1DMzGa4zFC4y1C4y1C7zFW8zFG4zFC4zVG4y1C5zVK4zlO5y1C5y1DMzGa5y1G5y1C4y1G5zFC7zlK4y1C4y1C4y1C5zFG4zFG5y1C4y1C4y1C4y1C4zFC4zFC7zVC7zFW4y1C5y1C7y1C4zFG4zFK4y1C5zFC5y1C4y1C4zFC4zVC5zFC4y1G/1FW4zFG80li50Fy5zVDD0lq4zFC5y1C/z1e5y1DI2lvG4lW4y1C4zFC50FG4zlHCzlX///+6zFG4zFG5zVC9zFC9zVK4zFG/1FW4zVK5y1C401e4zFC5zFC6zFK4y1G5zFC//3+4y1C4zFK4zVW4y1C4y1C4y1G6zVi5zFG5zFC4zFC4y1G4zFK5zFK4zFC4zFC7zlG4zFC4y1G9z1O4y1C4zFC4y1C4zVK5zFDa2m28zlW5y1C4zFC4y1C4zFC70lK70FC4y1C6y1C4y1C5y1C4zFC41FW4y1C4zFC4y1C4y1C4y1C4zFC/0VG5y1C5zFC4zFG4y1G4y1G4y1C6zFC6zVC4y1C4zFG4y1C50FW4y1G5y1G5zVG4y1G6y1K6zFG5zFG4zFC5y1G6zFC5y1G5y1C5y1K/31+5zFC4y1C4y1CSREpgAAAAp3RSTlMATUIZwg3zAoHg/s8DE4UF8O78HjL6Yd4+OuLQCoDFd4hE/fH4faae9+rBzfU5D/t8T3RB04yZx2lioakYqhcLXBF/7SCoDgny6ywvFQFV3GYjH3AMV7cdm3VH7F8EylAk45S2GoSSkaNzYJzINYmGK+TSe1PXByqLePS1Iia8WfmPvxK9xN+fsY4cpL6N2ZA2VimysK4hrVRYXko4h7Szb2fMdgily0s2q2oAAAJESURBVDjLnZVVd9tAEEbHMVMMsQMOMzNTk4aZqczMzMzMzHj/Zh8MklK5Pqd6mu/bu5rdmdGRyP88geY003BUXCy+FAdrvAlQOhlWa+wUdAd0sK5O8D6ZquJliohIvp3pMuisWc3l91N2YkgkaRT/9Za9pyDH3ZU3QtohLdfu5/hRERFJuVMEcCzXJSIDBwnu14CtdJyOxu78md5qVzj2HKBVA+4hV/+GuezW6Aby9ME8GjR6F9n6YB/JGp3DFn2wnhy1TMeXpQ9m+UhX1FyI4nhtrSM0Fwk9qeWYXNEFs81psTht5qh2VVCe6hER91IVfI75SXYAsCfFdn6BqiW3fMNRuWiNcQ5MBqPRYMIRI62LlQ5mZIWvyoHMdpKtIiLWZOxmxZ9nRb6ToRg2TJGXW03YFD+D3xJiWTEyMURDA07FXyYkFhYUw4IxGhqxKP4CFgniSQz+pEzKmUicepZpeczzxJdJp0Je8CxRecY/VfBL+mg6t1b+UfD7DwF+yNMgFKZK3BYG+hm9N/XRJeKu3wF1SnZbpnoobtzmrpJwY61jfZwpu8YtVflkHU363LCPMbXetE3dcVE3uVJrbGdeF3xHidbYx1ld8C1vtIZN3QfVM0bapMa4TLsu6Erjg8a4wPlI0Xdmb97gdTZvDav3I6u+z55SKFkjIm1F4c4UZFtFJgahZGhVkiuFXO0IHIHBRndNdYufB+OlRRT2/n2c2W4/EDwZGSwvUPDqte7JUw77aIsNbq330UDc30LWGdW2Hs3SH1zVp5KSEJ1eAAAAAElFTkSuQmCC"
             width="20px"
             height="20px"
             alt="">
        <span>设置</span>
        <i class="iconfont iconarrow-small"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'center',

  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },

  methods: {
    ...mapActions({
      handleLogout: 'user/actionsLogout'
    })
  }
}
</script>

<style lang="scss" scoped>
.mz-center {
  height: 100%;
}
.main {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  font-size: 15px;
  background: #f4f4f4;
  margin-bottom: 59px;
  .avatar {
    text-align: center;
    margin-top: -44px;
    height: 200px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
    img {
      height: 63px;
      width: 63px;
      border-radius: 35px;
      margin-right: 20px;
      border: 2px solid #fff;
    }
    .login {
      font-size: 16px;
    }
  }
  .order {
    width: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background: #fff;
    margin-bottom: 10px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    li {
      position: relative;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      list-style: none;
      img {
        height: 26px;
        width: 26px;
      }
      & > div {
        color: #797d82;
        margin-top: 5px;
      }
    }
  }
  .card {
    background: #fff;
    padding: 0 15px;
    height: 49px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    span {
      margin-left: 15px;
      color: #191a1b;
      -webkit-box-flex: 1;
      flex: 1;
    }
    i {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
