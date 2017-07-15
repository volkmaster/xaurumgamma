<style lang="less">
@import '../main';
</style>

<style lang="less" scoped>
@import (reference) '../main';

.content-wrapper {
  & when (@debug = true) { border: 1px solid blue; }

  width            : 100vw;
  background-color : @black;

  .houses-wrapper {
    position   : relative;
    height     : 100%;
    overflow-x : scroll;
    overflow-y : hidden;

    .house {
      margin-bottom : 50px;
      width         : 100vw;
      height        : calc(100vw * 1.16);
    }

    .details-dialog-wrapper {
      position         : relative;
      margin-bottom    : 50px;
      width            : 100vw;
      height           : calc(100vw * 1.16);
      display          : flex;
      align-items      : center;
      justify-content  : center;
      flex-direction   : column;
      background-color : @black;
      color            : @white;

      .details-dialog-item {
        & when (@debug = true) { border: 1px solid red; }

        width         : 80%;
        margin-bottom : 2vh;

        .icon-title {
          margin-bottom : 1vh;
          display       : flex;

          .icon-wrapper {
            height: 100%;

            i {
              border        : 1px solid @white;
              border-radius : 50%;
              color         : @white;
            }

            .fa-stack-2x { opacity: 0; }
          }

          .title {
            padding-left : 10px;
            display      : flex;
            align-items  : center;
            font-family  : @regular-font;
            font-size    : 40px;
            color        : @white;
          }
        }

        .text {
          color       : @gray;
          font-family : @light-font;
          font-size   : 30px;
          text-align  : justify;
        }
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
        width                       : 80%;
        height                      : 80%;
        -webkit-tap-highlight-color : rgba(255, 255, 255, 0);

        &:hover, &:active { filter: brightness(150%); }
      }
    }
  }
}

.fade-enter, .fade-leave-to { opacity: 0; }
.fade-enter-active { transition: opacity 0.3s linear; }
.fade-leave-active { transition: opacity 0.3s linear; }
</style>

<template>
  <div class="content-wrapper">
    <div class="houses-wrapper">
      <div class="house-wrapper" v-for="n in 5">
        <transition name="fade">
          <div class="details-dialog-wrapper" v-show="selectedBulletGroup === n">
            <div class="details-dialog-item" v-for="bullet in bullets[n - 1].data">
              <div class="icon-title">
                <div class="icon-wrapper">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i :class="'fa fa-' + bullet.image + ' fa-stack-1x'"></i>
                  </span>
                </div>
                <div class="title">{{ bullet.title }}</div>
              </div>
              <div class="text">{{ bullet.text }}</div>
            </div>
            <div class="btn-close">
              <img class="image" src="/assets/images/btn-close.png" @click="closeDetailsDialog()"/>
            </div>
          </div>
        </transition>
        <img class="house" :src="'/assets/images/house' + n + '.png'" v-if="selectedBulletGroup !== n" @click="openDetailsDialog(n)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bullets: [
        {
          data: [
            { title: 'First crypto smart-street commonwealth', text: 'A private Xaurum street of rentable smart-houses.', image: 'home' },
            { title: 'Crypto-asset', text: 'Connecting crypto with real-estate assets.', image: 'link' },
            { title: 'Gamma platform', text: 'All economic activity will be transparently visible on the blockchain in real time. All objects will be represented on the blockchain.', image: 'pie-chart' }
          ]
        },
        {
          data: [
            { title: 'Increasing Gamma value', text: 'Half of all the profit is transfered to Xaurum Gamma commonwealth, therefore increasing gamma (XGM) value with xaurum (XAUR).', image: 'bar-chart' },
            { title: 'Gamma growth', text: 'Second part of the profit is reinvested in new real-estate properties, therefore creating new sources of profit.', image: 'line-chart' },
            { title: 'Gamma guaranteed value', text: 'Gamma is always usable for renting at ICO price or higher, when its ratio is increased. Gamma used in this way is destroyed, increasing the ratio of remaining gamma tokens.', image: 'check' },
          ]
        },
        {
          data: [
            { title: 'Recapitalization', text: 'When the project will be recapitalized, gamma market price will be used for its valuation, increasing the ratio of all gamma tokens. New gamma (XGM) will be issued based on the market price, using the Xaurum growth concept.', image: 'exchange' },
            { title: 'Increasing Xaurum value', text: 'All economic activity of the Xaurum smart-street is increasing the gold base of Xaurum. Even the smallest purchase increases the Xaurum Gamma valuation per token and adds new gold to Xaurum.', image: 'line-chart' },
            { title: 'Xaurum economy', text: 'Xaurum smart-street accepts only xaurum as payment for all services. It makes use of the benefits of all technological innovation, with an emphasis on crypto.', image: 'money' },
          ]
        },
        {
          data: [
            { title: 'Luxury crypto village', text: 'All the smart-houses are modern luxury villas in a prime tourist location with supreme infrastructure.', image: 'building' },
            { title: 'Automated services', text: 'Drone and robot delivery of goods and services.', image: 'android' },
            { title: 'Extravagant services', text: 'High-end cars, yachts and boats.', image: 'car' },
          ]
        },
        {
          data: [
            { title: 'Proof of development', text: 'Live streaming of the construction.', image: 'video-camera' },
            { title: 'Private street', text: 'First crypto smart-street with private access.', image: 'user' },
            { title: 'Events', text: 'Providing lodging for important guests and event organization.', image: 'calendar-o' },
          ]
        }
      ],
      selectedBulletGroup: -1
    }
  },
  methods: {
    openDetailsDialog (n) {
      this.selectedBulletGroup = n
    },
    closeDetailsDialog () {
      this.selectedBulletGroup = -1
    }
  }
}
</script>
