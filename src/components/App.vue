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
      opacity     : 0;
      transition  : opacity 0.5s linear;

      &.fade  { opacity: 1; }

      .bullet-wrapper {
        padding-top: 3.5vh;

        &:first-child { padding-top: 0; }

        .bullet {
          display : flex;
          cursor  : pointer;

          .icon-wrapper {
            height: 100%;

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
            font-size    : 22px;
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

    .houses { max-height: 100%; }
  }

  .details-dialog-wrapper {
    position         : absolute;
    left             : 50%;
    top              : 50%;
    transform        : translate(-50%, -50%);
    width            : 700px;
    height           : 300px;
    display          : flex;
    justify-content  : center;
    flex-direction   : column;
    background-color : @white;

    .details-dialog {
      & when (@debug = true) { border: 1px solid red; }

      max-width : 70%;
      margin    : 0 auto;

      .icon-title {
        margin-bottom : 5%;
        display       : flex;

        .icon-wrapper {
          height: 100%;

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
          font-family  : @regular-font;
          font-size    : 25px;
        }
      }

      .text {
        color       : @gray;
        font-family : @light-font;
        font-size   : 20px;
        text-align  : justify;
      }
    }

    .btn-close {
      & when (@debug = true) { border: 1px solid red; }

      position   : absolute;
      top        : 30px;
      right      : 30px;
      text-align : right;
      cursor     : pointer;

      .image {
        width  : 60%;
        height : 60%;

        &:hover { filter: brightness(0%); }
      }
    }
  }
}

.fade-enter, .fade-leave-to { opacity: 0; }
.fade-enter-active { transition: opacity 0.5s ease-out; }
.fade-leave-active { transition: opacity 0.5s ease-in; }

.hl {
  & when (@debug = true) { border: 1px solid blue; }

  position : absolute;
  top      : 0;
  height   : 100%;
  width    : 1px;
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
        <div class="bullet-group" :class="{ fade: showBulletGroup(bulletGroup) }" v-for="bulletGroup in bullets">
          <div class="bullet-wrapper" v-for="bullet in bulletGroup.data">
            <div class="bullet" @click="openDetailsDialog(bullet)">
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
      <transition name="fade">
        <div class="details-dialog-wrapper" v-if="detailsDialogOpened">
          <div class="details-dialog">
            <div class="icon-title">
              <div class="icon-wrapper">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i :class="'fa fa-' + selectedBullet.image + ' fa-stack-1x'"></i>
                </span>
              </div>
              <div class="title">{{ selectedBullet.title }}</div>
            </div>
            <div class="text">{{ selectedBullet.text }}</div>
          </div>
          <div class="btn-close">
            <img class="image" src="/assets/images/btn-close.png" @click="closeDetailsDialog()"/>
          </div>
        </div>
      </transition>
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
            { title: 'First crypto smart-street commonwealth', text: 'A private Xaurum street of rentable smart-houses.', image: 'home' },
            { title: 'Crypto-asset', text: 'Connecting crypto with real-estate assets.', image: 'link' },
            { title: 'Gamma platform', text: 'All economic activity will be transparently visible on the blockchain in real time. All objects will be represented on the blockchain.', image: 'pie-chart' }
          ]
        },
        {
          position: { min: 10, max: 25, actual: 29 },
          data: [
            { title: 'Increasing Gamma value', text: 'Half of all the profit is transfered to Xaurum Gamma commonwealth, therefore increasing gamma (XGM) value with xaurum (XAUR).', image: 'bar-chart' },
            { title: 'Gamma growth', text: 'Second part of the profit is reinvested in new real-estate properties, therefore creating new sources of profit.', image: 'line-chart' },
            { title: 'Gamma guaranteed value', text: 'Gamma is always usable for renting at ICO price or higher, when its ratio is increased. Gamma used in this way is destroyed, increasing the ratio of remaining gamma tokens.', image: 'check' },
          ]
        },
        {
          position: { min: 25, max: 40, actual: 44 },
          data: [
            { title: 'Recapitalization', text: 'When the project will be recapitalized, gamma market price will be used for its valuation, increasing the ratio of all gamma tokens. New gamma (XGM) will be issued based on the market price, using the Xaurum growth concept.', image: 'exchange' },
            { title: 'Increasing Xaurum value', text: 'All economic activity of the Xaurum smart-street is increasing the gold base of Xaurum. Even the smallest purchase increases the Xaurum Gamma valuation per token and adds new gold to Xaurum.', image: 'line-chart' },
            { title: 'Xaurum economy', text: 'Xaurum smart-street accepts only xaurum as payment for all services. It makes use of the benefits of all technological innovation, with an emphasis on crypto.', image: 'money' },
          ]
        },
        {
          position: { min: 40, max: 50, actual: 60 },
          data: [
            { title: 'Luxury crypto village', text: 'All the smart-houses are modern luxury villas in a prime tourist location with supreme infrastructure.', image: 'building' },
            { title: 'Automated services', text: 'Drone and robot delivery of goods and services.', image: 'android' },
            { title: 'Extravagant services', text: 'High-end cars, yachts and boats.', image: 'car' },
          ]
        },
        {
          position: { min: 50, max: 100, actual: 87 },
          data: [
            { title: 'Proof of development', text: 'Live streaming of the construction.', image: 'video-camera' },
            { title: 'Private street', text: 'First crypto smart-street with private access.', image: 'user' },
            { title: 'Events', text: 'Providing lodging for important guests and event organization.', image: 'calendar-o' },
          ]
        }
      ],
      scrollRatio: 0,
      selectedBullet: null
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      $('.houses-wrapper').scroll(this.scroll)
      window.addEventListener('resize', () => this.resize())
      setTimeout(() => this.positionBulletGroups(), 100)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => this.resize())
  },
  computed: {
    detailsDialogOpened () {
      return this.selectedBullet !== null
    }
  },
  methods: {
    scroll () {
      let housesWrapper = $('.houses-wrapper')[0]
      let houses = $('.houses')[0]
      let scroll = housesWrapper.scrollLeft
      let imageWidth = houses.clientWidth
      this.scrollRatio = scroll / imageWidth

      this.closeDetailsDialog()
    },
    resize () {
      this.positionBulletGroups()
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
    },
    openDetailsDialog (bullet) {
      this.selectedBullet = bullet
    },
    closeDetailsDialog (bullet) {
      this.selectedBullet = null
    }
  },
  components: {

  }
}
</script>
