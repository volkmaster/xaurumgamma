<style lang="less">
@import '../main';
</style>

<style lang="less" scoped>
@import (reference) '../main';

.wrapper {
  & when (@debug = true) { border: 1px solid black; }

  width  : 100vw;
  height : 100vh;
}

.header-wrapper {
  & when (@debug = true) { border: 1px solid green; }

  width            : 100vw;
  height           : 10vh;
  display          : flex;
  align-items      : center;
  justify-content  : flex-start;
  background-color : @black;

  .logo-wrapper {
    display         : flex;
    align-items     : center;
    justify-content : center;

    .logo {
      width  : 75%;
      height : 75%;
    }
  }

  .nav-item {
    margin-left : 30px;
    color       : @white;
    font-size   : 18px;
    cursor      : pointer;

    &:hover { color: @purple; }
  }
}

.content-wrapper {
  & when (@debug = true) { border: 1px solid blue; }

  width  : 100vw;
  height : 90vh;

  .houses-wrapper {
    position   : relative;
    height     : 100%;
    overflow-x : scroll;
    overflow-y : hidden;

    .bullet-group {
      & when (@debug = true) { border: 1px solid red; }

      position    : absolute;
      top         : 5%;
      display     : inline-block;
      white-space : nowrap;

      .bullet-wrapper {
        padding-top: 3.5vh;

        &:first-child { padding-top: 0; }

        .bullet {
          display : flex;
          cursor  : pointer;

          .icon-wrapper {
            height : 100%;

            i {
              border        : 1px solid @black;
              border-radius : 50%;
              color         : @black;
            }

            .fa-stack-2x { opacity: 0; }
          }

          .title {
            padding-left : 10px;
            display      : flex;
            align-items  : center;
            cursor       : pointer;
            font-family  : @regular-font;
            font-size    : 25px;
          }

          &:hover {
            i {
              border        : 1px solid @purple;
              border-radius : 50%;
              color         : @purple;
            }

            .title { color: @purple; }
          }
        }
      }
    }

    .hl {
      & when (@debug = true) { border: 1px solid blue; }

      position : absolute;
      top      : 0;
      height   : 100%;
      width    : 1px;
    }

    .houses { max-height: 100%; }
  }
}
</style>

<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <div class="logo-wrapper">
        <img class="logo" src="/assets/images/logo.png"/>
      </div>
      <div class="nav-item">PROJECT OVERVIEW</div>
      <div class="nav-item">GAMMA ICO</div>
      <div class="nav-item">GAMMA SURVEILLANCE</div>
      <div class="nav-item">REAL TIME ECONOMY</div>
      <div class="nav-item">TEAM</div>
    </div>
    <div class="content-wrapper">
      <div class="houses-wrapper">
        <div class="hl" :style="{ left: n * 10 * 2.2303571428571427 + '%' }" v-for="n in 9"></div>
        <div class="bullet-group" v-for="bulletGroup in bullets" v-show="showBulletGroup(bulletGroup)">
          <div class="bullet-wrapper" v-for="bullet in bulletGroup.data">
            <div class="bullet">
              <div class="icon-wrapper">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i :class="'fa fa-' + bullet.image + ' fa-stack-1x'"></i>
                </span>
              </div>
              <div class="title">{{ bullet.title }}</div>
            </div>
          </div>
        </div>
        <img class="houses" src="/assets/images/houses.png"/>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      bullets: [
        {
          position: { min: 0, max: 10, actual: 10 },
          data: [
            { title: 'First crypto smart-street commonwealth', text: '', image: 'home' },
            { title: 'Crypto-asset', text: '', image: 'link' },
            { title: 'Gamma platform', text: '', image: 'pie-chart' }
          ]
        },
        {
          position: { min: 10, max: 25, actual: 29 },
          data: [
            { title: 'Increasing Gamma value', text: '', image: 'bar-chart' },
            { title: 'Gamma growth', text: '', image: 'line-chart' },
            { title: 'Gamma guaranteed value', text: '', image: 'check' }
          ]
        },
        {
          position: { min: 25, max: 40, actual: 44 },
          data: [
            { title: 'Recapitalization', text: '', image: 'exchange' },
            { title: 'Increasing Xaurum value', text: '', image: 'line-chart' },
            { title: 'Xaurum economy', text: '', image: 'money' }
          ]
        },
        {
          position: { min: 40, max: 55, actual: 60 },
          data: [
            { title: 'Luxury crypto village', text: '', image: 'building' },
            { title: 'Automated services', text: '', image: 'android' },
            { title: 'Extravagant services', text: '', image: 'car' }
          ]
        },
        {
          position: { min: 55, max: 100, actual: 87 },
          data: [
            { title: 'Proof of development', text: '', image: 'video-camera' },
            { title: 'Private street', text: '', image: 'user' },
            { title: 'Events', text: '', image: 'calendar-o' }
          ]
        }
      ],
      scrollRatio: 0
    }
  },
  created () {
    50
  },
  mounted () {
    this.$nextTick(() => {
      $('.houses-wrapper').scroll(this.scroll)
      window.addEventListener('resize', () => this.positionBulletGroups())
      setTimeout(() => this.positionBulletGroups(), 100)
    })
  },
  computed: {
    
  },
  methods: {
    scroll () {
      let housesWrapper = $('.houses-wrapper')[0]
      let houses = $('.houses')[0]
      let scroll = housesWrapper.scrollLeft
      let imageWidth = houses.clientWidth
      this.scrollRatio = scroll / imageWidth
    },
    positionBulletGroups () {
      let houses = $('.houses')[0]
      let imageWidth = houses.clientWidth
      let screenWidth = document.documentElement.clientWidth
      let ratio = imageWidth / screenWidth

      let bulletGroups = $('.bullet-group')
      for (let i = 0; i < bulletGroups.length; i++) {
        bulletGroups[i].style.left = `${ratio * this.bullets[i].position.actual}%`
      }
    },
    showBulletGroup (bulletGroup) {
      let ratio = this.scrollRatio * 100
      return ratio >= bulletGroup.position.min && ratio < bulletGroup.position.max
    }
  },
  components: {

  }
}
</script>
