<style lang="less">
@import '../../main';
</style>

<style lang="less" scoped>
@import (reference) '../../main';

.content-wrapper {
  & when (@debug = true) { border: 1px solid black; }

  width            : 100vw;
  height           : 90vh;
  background-color : @black;

  .loader-wrapper {
    height          : 80vh;
    display         : flex;
    align-items     : center;
    justify-content : center;
  }

  .houses-wrapper {
    position           : relative;
    height             : 100%;
    overflow-x         : hidden;
    overflow-y         : hidden;
    -webkit-transition : filter 0.3s linear;
    -moz-transition    : filter 0.3s linear;
    -o-transition      : filter 0.3s linear;
    transition         : filter 0.3s linear;

    &.fade { filter: blur(10px); }

    .bullet {
      & when (@debug = true) { border: 1px solid red; }

      position           : absolute;
      top                : 5%;
      width              : 13%;
      display            : flex;
      align-items        : center;
      flex-direction     : column;
      cursor             : pointer;
      opacity            : 0;
      -webkit-transition : opacity 0.3s linear;
      -moz-transition    : opacity 0.3s linear;
      -o-transition      : opacity 0.3s linear;
      transition         : opacity 0.3s linear;

      &.fade  { opacity: 1; }

      .icon-wrapper {
        & when (@debug = true) { border: 1px solid blue; }

        padding         : 1.5vh 0;
        display         : flex;
        justify-content : center;

        .icon {
          & when (@debug = true) { border: 1px solid green; }
        }
      }

      .title {
        & when (@debug = true) { border: 1px solid red; }

        width        : 100%;
        font-family  : @regular-font;
        text-align   : center;

        .breakpoint-gte-2048( { font-size: 34px; });
        .breakpoint-1920-2048({ font-size: 28px; });
        .breakpoint-1680-1920({ font-size: 24px; });
        .breakpoint-1440-1680({ font-size: 20px; });
        .breakpoint-1280-1440({ font-size: 16px; });
        .breakpoint-lt-1280(  { font-size: 16px; });
      }

      &:hover {
        .icon  { color: @purple; }
        .title { color: @purple; }
      }
    }

    .houses { max-height: 100%; }
  }

  .details-dialog-wrapper {
    position         : absolute;
    left             : 50%;
    top              : 50%;
    transform        : translate(-50%, -50%);
    padding          : 6vh 2vw;
    display          : flex;
    justify-content  : center;
    flex-direction   : column;
    background-color : @black;
    border           : 2px solid @white;

    .details-dialog-item {
      & when (@debug = true) { border: 1px solid red; }

      max-width : 70%;
      margin    : 0 auto;

      .icon-title {
        margin-bottom : 5%;
        display       : flex;

        .icon { color: @white; }

        .title {
          padding-left : 25px;
          display      : flex;
          align-items  : center;
          font-family  : @regular-font;
          color        : @white;

          .breakpoint-gte-2048( { font-size: 45px; });
          .breakpoint-1920-2048({ font-size: 40px; });
          .breakpoint-1680-1920({ font-size: 35px; });
          .breakpoint-1440-1680({ font-size: 30px; });
          .breakpoint-1280-1440({ font-size: 25px; });
          .breakpoint-lt-1280(  { font-size: 20px; });
        }
      }

      .text {
        color       : @gray;
        font-family : @light-font;
        text-align  : justify;

        .breakpoint-gte-2048( { font-size: 32px; });
        .breakpoint-1920-2048({ font-size: 29px; });
        .breakpoint-1680-1920({ font-size: 26px; });
        .breakpoint-1440-1680({ font-size: 23px; });
        .breakpoint-1280-1440({ font-size: 20px; });
        .breakpoint-lt-1280(  { font-size: 17px; });
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

        &:hover { filter: brightness(150%); }
      }
    }
  }
}

.hl {
  & when (@debug = true) { border: 1px solid blue; }

  position         : absolute;
  top              : 0;
  height           : 100%;
}

.fade-enter, .fade-leave-to { opacity: 0; }
.fade-enter-active {
  -webkit-transition : opacity 0.3s linear;
  -moz-transition    : opacity 0.3s linear;
  -o-transition      : opacity 0.3s linear;
  transition         : opacity 0.3s linear;
}
.fade-leave-active {
  -webkit-transition : opacity 0.3s linear;
  -moz-transition    : opacity 0.3s linear;
  -o-transition      : opacity 0.3s linear;
  transition         : opacity 0.3s linear;
}
</style>

<template>
  <div class="content-wrapper">
    <div class="loader-wrapper" v-show="loading">
      <img src="/assets/images/loader.svg"/>
    </div>
    <div class="houses-wrapper" :class="{ fade: detailsDialogOpened }" v-show="!loading">
        <div class="bullet no-select" :class="{ fade: showBullet(bullet) }" v-for="bullet in bullets" @click="openDetailsDialog(bullet)">
          <div class="icon-wrapper">
            <span>
              <i :class="'icon fa fa-' + bullet.data.image + ' fa-' + iconSize"></i>
            </span>
          </div>
          <div class="title">{{ bullet.data.title }}</div>
        </div>
      <img class="houses" src="/assets/images/houses.png"/>
      <div class="hl" :style="{ left: n * 6.25 * 2.0734375 + '%' }" v-for="n in 15"></div>
    </div>
    <transition name="fade">
      <div class="details-dialog-wrapper" v-if="detailsDialogOpened">
        <div class="details-dialog-item">
          <div class="icon-title">
            <div class="icon-wrapper">
              <span>
                <i :class="'icon fa fa-' + selectedBullet.data.image + ' fa-' + iconSize"></i>
              </span>
            </div>
            <div class="title">{{ selectedBullet.data.title }}</div>
          </div>
          <div class="text">{{ selectedBullet.data.text }}</div>
        </div>
        <div class="btn-close">
          <img class="image" src="/assets/images/btn-close.png" @click="closeDetailsDialog()"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      loading: true,
      bullets: [
        {
          position: { min: 0, max: 0, actual: 3.8 },
          data: { title: 'First crypto smart-street commonwealth', text: 'A private Xaurum street of rentable smart-houses.', image: 'home' }
        },
        {
          position: { min: 0, max: 0, actual: 10.1 },
          data: { title: 'Crypto-asset', text: 'Connecting crypto with real-estate assets.', image: 'link' }
        },
        {
          position: { min: 0, max: 0, actual: 16.35 },
          data: { title: 'Gamma platform', text: 'All economic activity will be transparently visible on the blockchain in real time. All objects will be represented on the blockchain.', image: 'pie-chart' }
        },
        {
          position: { min: 0, max: 0, actual: 22.5 },
          data: { title: 'Increasing Gamma value', text: 'Half of all the profit is transfered to Xaurum Gamma commonwealth, therefore increasing gamma (XGM) value with xaurum (XAUR).', image: 'bar-chart' }
        },
        {
          position: { min: 0, max: 0, actual: 28.75 },
          data: { title: 'Gamma growth', text: 'Second part of the profit is reinvested in new real-estate properties, therefore creating new sources of profit.', image: 'line-chart' }
        },
        {
          position: { min: 0, max: 0, actual: 35 },
          data: { title: 'Gamma guaranteed value', text: 'Gamma is always usable for renting at ICO price or higher, when its ratio is increased. Gamma used in this way is destroyed, increasing the ratio of remaining gamma tokens. Gamma (XGM) can be melted (or directly exchanged and provably destroyed) for a villa on the Xaurum smart-street, for a value determined by the number of XGM at the start of the project.', image: 'check' }
        },
        {
          position: { min: 0, max: 0, actual: 41.35 },
          data: { title: 'Recapitalization', text: 'When the project will be recapitalized, gamma market price will be used for its valuation, increasing the ratio of all gamma tokens. New gamma (XGM) will be issued based on the market price, using the Xaurum growth concept.', image: 'exchange' }
        },
        {
          position: { min: 6, max: 0, actual: 47.5 },
          data: { title: 'Increasing Xaurum value', text: 'All economic activity of the Xaurum smart-street is increasing the gold base of Xaurum. Even the smallest purchase increases the Xaurum Gamma valuation per token and adds new gold to Xaurum.', image: 'line-chart' }
        },
        {
          position: { min: 12, max: 0, actual: 53.75 },
          data: { title: 'Xaurum economy', text: 'Xaurum smart-street accepts only xaurum as payment for all services. It makes use of the benefits of all technological innovation, with an emphasis on crypto.', image: 'money' }
        },
        {
          position: { min: 18, max: 0, actual: 60.15 },
          data: { title: 'Luxury crypto village', text: 'All the smart-houses are modern luxury villas in a prime tourist location with supreme infrastructure.', image: 'building' }
        },
        {
          position: { min: 24, max: 0, actual: 66.36 },
          data: { title: 'Automated services', text: 'Drone and robot delivery of goods and services.', image: 'android' }
        },
        {
          position: { min: 30, max: 0, actual: 72.45 },
          data: { title: 'Extravagant services', text: 'High-end cars, yachts and boats.', image: 'car' }
        },
        {
          position: { min: 37, max: 0, actual: 78.9 },
          data: { title: 'Events', text: 'Providing lodging for important guests and event organization.', image: 'calendar-o' }
        },
        {
          position: { min: 43, max: 0, actual: 85.14 },
          data: { title: 'Proof of development', text: 'Live streaming of the construction.', image: 'video-camera' }
        },
        {
          position: { min: 49, max: 0, actual: 91.3 },
          data: { title: 'Private street', text: 'First crypto smart-street with private access.', image: 'user' }
        }
      ],
      scrollRatio: 0,
      selectedBullet: null,
      iconSize: 'lg'
    }
  },
  mounted () {
    this.$nextTick(() => {
      $('.houses-wrapper').scroll(this.scroll)
      $('.houses-wrapper')[0].addEventListener('wheel', function (event) {
        this.scrollLeft += event.deltaX
        this.scrollLeft += event.deltaY
        event.preventDefault()
      })
      $('.content-wrapper').waitForImages(() => {
        setTimeout(() => {
          this.loading = false
          setTimeout(() => {
            this.sizeIcons()
            this.positionBullets()
          }, 100)
        }, 1000)
      })
      window.addEventListener('resize', () => this.resize())
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
    },
    resize () {
      this.sizeIcons()
      this.positionBullets()
    },
    sizeIcons () {
      let width = document.documentElement.clientWidth
      if (width >= 2048) {
        this.iconSize = '5x'
      } else if (width < 2048 && width >= 1920) {
        this.iconSize = '4x'
      } else if (width < 1920 && width >= 1680) {
        this.iconSize = '4x'
      } else if (width < 1680 && width >= 1440) {
        this.iconSize = '4x'
      } else if (width < 1440 && width >= 1280) {
        this.iconSize = '3x'
      } else if (width < 1280) {
        this.iconSize = '3x'
      }
    },
    positionBullets () {
      let houses = $('.houses')[0]
      if (houses) {
        let imageWidth = houses.clientWidth
        let screenWidth = document.documentElement.clientWidth
        let ratio = imageWidth / screenWidth

        let bullets = $('.bullet')
        for (let i = 0; i < bullets.length; i++) {
          bullets[i].style.left = `${ratio * this.bullets[i].position.actual}%`
        }
      }
    },
    showBullet (bullet) {
      let ratio = this.scrollRatio * 100
      return ratio >= bullet.position.min && ratio < (bullet.position.actual - 1.5)
    },
    openDetailsDialog (bullet) {
      if (!this.detailsDialogOpened) {
        this.selectedBullet = bullet
      }
    },
    closeDetailsDialog () {
      this.selectedBullet = null
    }
  }
}
</script>
