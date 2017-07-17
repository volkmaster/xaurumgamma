<style lang="less">
@import '../../main';
</style>

<style lang="less" scoped>
@import (reference) '../../main';

.content-wrapper {
  & when (@debug = true) { border: 1px solid blue; }

  width            : 100vw;
  min-height       : 90vh;
  background-color : @black;

  .loader-wrapper {
    height          : 80vh;
    display         : flex;
    align-items     : center;
    justify-content : center;
  }

  .content-wrapper-inner {
    position          : relative;
    width             : 100vw;
    height            : calc(100vw * 1.3184);
    padding           : 5vh 10vw 0 10vw;
    background-size   : 100vw;
    background-color  : @white;
    background-image  : url('/assets/images/projectoverview.png');
    background-repeat : no-repeat;

    .content {
      -webkit-transition : filter 0.3s linear;
      -moz-transition    : filter 0.3s linear;
      -o-transition      : filter 0.3s linear;
      transition         : filter 0.3s linear;

      &.fade { filter: blur(10px); }

      .page-title {
        font-family: @bold-font;

        .breakpoint-gte-2048( { font-size: 50px; });
        .breakpoint-1920-2048({ font-size: 44px; });
        .breakpoint-1680-1920({ font-size: 41px; });
        .breakpoint-1440-1680({ font-size: 38px; });
        .breakpoint-1280-1440({ font-size: 35px; });
        .breakpoint-lt-1280(  { font-size: 32px; });
      }

      .page-content {
        p {
          text-align: justify;

          .breakpoint-gte-2048({
            font-size   : 28px;
            line-height : 34px;
          });
          .breakpoint-1920-2048({
            font-size   : 26px;
            line-height : 34px;
          });
          .breakpoint-1680-1920({
            font-size   : 20px;
            line-height : 30px;
          });
          .breakpoint-1440-1680({
            font-size   : 18px;
            line-height : 26px;
          });
          .breakpoint-1280-1440({
            font-size   : 16px;
            line-height : 20px;
          });
          .breakpoint-lt-1280({
            font-size   : 12px;
            line-height : 16px;
          });
        }

        .xaurum {
          display         : flex;
          justify-content : center;

          .img-gold {
            .breakpoint-gte-2048( { height: 182.9px; });
            .breakpoint-1920-2048({ height: 164.61px; });
            .breakpoint-1680-1920({ height: 148.15px; });
            .breakpoint-1440-1680({ height: 133.33px; });
            .breakpoint-1280-1440({ height: 120px; });
            .breakpoint-lt-1280(  { height: 108px; });
          }
        }

        .xaurum-gamma {
          display         : flex;
          justify-content : center;

          .img-purple {
            margin: 15px 0;

            .breakpoint-gte-2048( { height: 109.74px; });
            .breakpoint-1920-2048({ height: 98.77px; });
            .breakpoint-1680-1920({ height: 88.89px; });
            .breakpoint-1440-1680({ height: 80px; });
            .breakpoint-1280-1440({ height: 72px; });
            .breakpoint-lt-1280(  { height: 64.8px; });
          }
        }

        .video {
          width              : 25%;
          margin             : 3vh auto 3vh auto;
          padding-bottom     : 10px;
          border-top         : 1px solid @purple;
          border-bottom      : 1px solid @purple;
          display            : flex;
          align-items        : center;
          flex-direction     : column;
          cursor             : pointer;
          -webkit-transition : width 0.3s ease-in;
          -moz-transition    : width 0.3s ease-in;
          -o-transition      : width 0.3s ease-in;
          transition         : width 0.3s ease-in;

          .icon-wrapper {
            padding         : 2vh 0;
            display         : flex;
            justify-content : center;

            .icon {
              font-size : 50px;
              color     : @purple;
            }
          }

          .title {
            & when (@debug = true) { border: 1px solid red; }

            width        : 20vw;
            font-family  : @regular-font;
            text-align   : center;
            color        : @purple;

            .breakpoint-gte-2048( { font-size: 28px; });
            .breakpoint-1920-2048({ font-size: 26px; });
            .breakpoint-1680-1920({ font-size: 20px; });
            .breakpoint-1440-1680({ font-size: 18px; });
            .breakpoint-1280-1440({ font-size: 16px; });
            .breakpoint-lt-1280(  { font-size: 12px; });
          }

          &:hover { width: 35%; }
        }
      }
    }

    .video-dialog-wrapper {
      position         : absolute;
      left             : 50%;
      transform        : translate(-50%, -62.5%);
      display          : flex;
      justify-content  : center;
      background-color : @black;
      border           : 2px solid @white;

      .breakpoint-gte-2048( { padding: 4%; });
      .breakpoint-1920-2048({ padding: 4%; });
      .breakpoint-1680-1920({ padding: 4.5%; });
      .breakpoint-1440-1680({ padding: 5.5%; });
      .breakpoint-1280-1440({ padding: 6%; });
      .breakpoint-lt-1280(  { padding: 8%; });

      .video-iframe {
        .breakpoint-gte-2048( {
          width  : 896px;
          height : 504px;
        });
        .breakpoint-1920-2048({
          width  : 840px;
          height : 472.5px;
        });
        .breakpoint-1680-1920({
          width  : 735px;
          height : 413.4375px;
        });
        .breakpoint-1440-1680({
          width  : 630px;
          height : 354.375px;
        });
        .breakpoint-1280-1440({
          width  : 560px;
          height : 315px;
        });
        .breakpoint-lt-1280({
          width  : 448px;
          height : 252px;
        });
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
    <div class="content-wrapper-inner" v-show="!loading">
      <div class="content" :class="{ fade: videoDialogOpened }">
        <div class="page-title">
          Project Overview
        </div>
        <div class="page-content">
          <div class="xaurum">
            <img src="/assets/images/xaurum.svg" class="img-gold" />
          </div>
          <p>
            Xaurum is a crypto-currency with a continuously growing gold base. It has appreciated from the initial 0.00625 $ per XAUR to the current 0.30 $ and has increased its common gold reserves from 1016 g to the current 129251 g. Xaurum Gamma is a commonwealth within the Xaurum commonwealth, that applies the concept of Xaurum within its established economic framework, and benefits both. Gamma increases the use of Xaurum and its coinage, and Xaurum enhances the value of Gamma.
          </p>
          <div class="xaurum-gamma">
            <img src="/assets/images/logo.png" class="img-purple"/>
          </div>
          <p>
            Xaurum Gamma is a commonwealth of the first crypto smart-street. It is composed of six luxury villas on the island Krk in Croatia, a prime tourist real-estate. The goal of Xaurum projects is to preserve and increase value. The investments must therefore be long-term, relatively safe, yield the most profit and be augmentable by speculation. Real-estate is a safe investment, especially in a touristic setting. However, the time required for profitability makes it infeasible for small investors and crypto can mitigate this downside. The creation of Xaurum Gamma, a crypto-asset that represents half of the profit (and accumulates it in xaurum), creates a way for investors to benefit from speculation. It avoids its potential downside by employing scarcity (the number of Xaurum Gamma tokens is limited), guaranteeing a minimal value through its use (Xaurum Gamma tokens can be used to rent a villa at the rate 1 XGM : 100 € or higher when recapitalized) and the growth of its xaurum reserves.
          </p>
          <div class="video no-select" @click="openVideoDialog()">
            <div class="icon-wrapper">
              <span>
                <i :class="'icon fa fa-play fa-' + iconSize"></i>
              </span>
            </div>
            <div class="title">XAURUM GAMMA the first crypto smart-street video</div>
          </div>
          <p>
            The transparency and speed of crypto will enable the project owners to see all the economic activity in real time on the Gamma platform. Gamma project profits and the acquisition of new xaurum reserves will be visible in real time. All villas, smart fridges, drones, etc. will be represented on the blockchain, where Gamma owners will be able to monitor all the transactions and profit creation of each individual object.
          </p>
          <p>
            Half of the profit from the smart-street and its services will be reinvested in the growth of the project and the second half will be used to acquire xaurum (XAUR) for the Gamma commonwealth. The reserves of gamma (XGM) kept in xaurum will be increased as the project grows, and their value will grow as xaurum (XAUR) price increases. Gamma (XGM) itself is continuously increasing itself in value and size by the use of the crypto-smart street and its services. This increase will additionally speed up the process of acquisition of new.
          </p>
          <p>
            Xaurum Gamma will be recapitalized with additional funds when required, at the rate higher than the initial offer – the rate of issuing new XGM will be determined by the market, and the new funds will be used to grow the common real-estate assets. The ICO funds cap is determined by the costs required for the project, and all the funds will be used for this purpose only; once the development of the first Xaurum street is completed, the valuation of the land and the built objects will increase. The low ICO ratio, determined by costs, along with the absence of rewards for developers and marketing, make it an excellent opportunity for investment, that will benefit investors from the start of the project, and keep benefiting with the profits of the growth of the project and the gamma xaurum reserves.
          </p>
          <p>
            Xaurum street will consist of six luxury villas of modern designs, equipped with the latest smart-house and crypto accessories, their own pools and lounge areas. The villas will be built to the highest aesthetic standards, with functionality in mind. They will provide their guests with the highest rate of luxury and privacy, while still being accessible and connected to the infrastructure. The first street is built on a premium location, in the south-west of the Island of Krk and is connected with nice roads, markets, fine restaurants, beautiful beaches etc. The island itself is well connected, accessible via highway from EU and has its own airport and plenty of ports. The street will be private, accessible only to Xaurum users and will include the possibility of renting luxury cars, yachts, boats, and drone deliveries.
          </p>
          <p>
            The initial goal of the project is to secure enough funds to build the first private Xaurum luxury smart-street, and acquire the Croatian company that owns the plot with the first object already built. The completion of the building development is scheduled in May 2018, making it open for use and rent in the summer season of 2018. Because one object is already built, the profit from the already opened villa will start to accumulate soon after the ICO. After the final development of the initial buildings and infrastructure, half of the rent profits will accumulate, until the expansion of the street or a creation of a new street will be viable.
          </p>
        </div>
      </div>
      <transition name="fade">
        <div class="video-dialog-wrapper" v-show="videoDialogOpened">
          <iframe class="video-iframe" src="https://www.youtube.com/embed/liZuIGZFY8o?rel=0" frameborder="0" allowfullscreen></iframe>
          <div class="btn-close">
            <img class="image" src="/assets/images/btn-close.png" @click="closeVideoDialog()"/>
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
      loading: true,
      iconSize: '',
      videoDialogOpened: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      $('.content-wrapper').waitForImages(() => {
        setTimeout(() => {
          this.loading = false
          this.sizeIcons()
        }, 1000)
      })
      window.addEventListener('resize', () => this.resize())
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => this.resize())
  },
  methods: {
    resize () {
      this.sizeIcons()
      this.positionVideoDialog()
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
        this.iconSize = '2x'
      }
    },
    positionVideoDialog () {
      let dialog = $('.video-dialog-wrapper')
      if (dialog.length) {
        let scrollTop = $(window).scrollTop()
        let screenHeight = document.documentElement.clientHeight
        dialog[0].style.top = `${scrollTop + (screenHeight / 2)}px`
      }
    },
    openVideoDialog () {
      this.videoDialogOpened = true
      this.positionVideoDialog()
    },
    closeVideoDialog () {
      this.videoDialogOpened = false
    }
  }
}
</script>
