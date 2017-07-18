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
    width             : 100vw;
    height            : calc(100vw * 1.3184);
    padding           : 5vh 10vw 0 10vw;
    background-size   : 100vw;
    background-image  : url('/assets/images/gammaico.png');
    background-repeat : no-repeat;

    .page-title {
      font-family: @bold-font;

      .breakpoint-gte-2048( { font-size: 50px; });
      .breakpoint-1920-2048({ font-size: 44px; });
      .breakpoint-1680-1920({ font-size: 41px; });
      .breakpoint-1440-1680({ font-size: 38px; });
      .breakpoint-1280-1440({ font-size: 35px; });
      .breakpoint-lt-1280(  { font-size: 32px; });
    }

    .countdown-text-wrapper {
      width           : 25%;
      margin          : 2vh auto 5vh auto;
      padding         : 2vh 0;
      border-top      : 1px solid @black;
      border-bottom   : 1px solid @black;
      display         : flex;
      justify-content : center;

      .countdown-text {
        font-family: @regular-font;

        .breakpoint-gte-2048( { font-size: 38px; });
        .breakpoint-1920-2048({ font-size: 32px; });
        .breakpoint-1680-1920({ font-size: 29px; });
        .breakpoint-1440-1680({ font-size: 26px; });
        .breakpoint-1280-1440({ font-size: 23px; });
        .breakpoint-lt-1280(  { font-size: 20px; });
      }
    }

    .page-content {
      .content-title {
        margin      : 4vh 0;
        font-family : @regular-font;

        .breakpoint-gte-2048( {
          margin    : 5vh 0;
          font-size : 40px;
        });
        .breakpoint-1920-2048({ font-size: 34px; });
        .breakpoint-1680-1920({ font-size: 31px; });
        .breakpoint-1440-1680({ font-size: 28px; });
        .breakpoint-1280-1440({ font-size: 25px; });
        .breakpoint-lt-1280(  { font-size: 22px; });
      }

      .item-list {
        list-style-type: square;

        .item {
          .breakpoint-gte-2048({
            padding-bottom : 5vh;
            font-size      : 28px;
            line-height    : 34px;
          });
          .breakpoint-1920-2048({
            padding-bottom : 4.5vh;
            font-size      : 26px;
            line-height    : 34px;
          });
          .breakpoint-1680-1920({
            padding-bottom : 4vh;
            font-size      : 22px;
            line-height    : 30px;
          });
          .breakpoint-1440-1680({
            padding-bottom : 4vh;
            font-size      : 20px;
            line-height    : 26px;
          });
          .breakpoint-1280-1440({
            padding-bottom : 4vh;
            font-size      : 18px;
            line-height    : 20px;
          });
          .breakpoint-lt-1280({
            padding-bottom : 3vh;
            font-size      : 14px;
            line-height    : 16px;
          });

          &:last-child { padding-bottom: 0; }
        }
      }
    }
  }
}
</style>

<template>
  <div class="content-wrapper">
    <div class="loader-wrapper" v-show="loading">
      <img src="/assets/images/loader.svg"/>
    </div>
    <div class="content-wrapper-inner" v-show="!loading">
      <!-- <div class="page-title">
        Gamma ICO
      </div> -->
      <div class="countdown-text-wrapper">
        <div class="countdown-text">
          {{ days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's'}}
        </div>
      </div>
      <div class="page-content">
        <div class="content-title">Xaurum Gamma Details</div>
        <ul class="item-list">
          <li class="item">gamma (XGM) can be melted (or directly exchanged and provably destroyed) for a villa on the Xaurum smart-street, for a value determined by the number of XGM at the start of the project</li>
          <li class="item">every villa will be valued for an ammount of gamma tokens, that will continously decrease for melt or “direct exchange”</li>
          <li class="item">because gamma (XGM)’s value grows with reinvestment and recapitalization, the number of gamma (XGM) required to melt for an object, will decrease with the growth of the project</li>
          <li class="item">the same gamma tokens can be melted or “directly exchanged” for all additional real-estate the project will acquire</li>
          <li class="item">when gamma (XGM) is melted, the owner receives the ownership of the villa and the XAUR that it has accumulated</li>
          <li class="item">Croatian taxation will apply in case of transfer of ownership</li>
          <li class="item">implemented as a token on Ethereum network</li>
          <li class="item">Xaurum Gamma will be traded in pair with Xaurum and Bitcoin</li>
          <li class="item">ICO capped at 54800 XGM (5 480 000 €)</li>
          <li class="item">in case the goal is reached before the 2 month period, the gamma token distribution will start sooner</li>
          <li class="item">the initial price of 1 Xaurum Gamma (XGM) will be 100 €</li>
          <li class="item">recapitalization of Xaurum Gamma will be at 1 Xaurum Gamma to its market price</li>
          <li class="item">1 Xaurum Gamma can be used to rent a villa from Xaurum street, at the market rate or at 100 € per 1 XGM if lower (higher when recapitalized)</li>
          <li class="item">the supply of Xaurum Gamma tokens represents continuously growing xaurum reserves by investing half of the profits made by Xaurum Gamma project into xaurum</li>
          <li class="item">the second half of the profits are used to reinvest in the project (additional buildings, locations)</li>
          <li class="item">Gamma tokens (XGM) can be destroyed to receive XAUR & to use as payment for rent</li>
          <li class="item">gamma commonwealth xaurum reserves will increase soon after the end of the ICO (from the profit of the already built object)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      loading: true,
      countDownDate: null,
      interval: null,
      days: -1,
      hours: -1,
      minutes: -1,
      seconds: -1
    }
  },
  mounted () {
    this.$nextTick(() => {
      $('.content-wrapper').waitForImages(() => {
        setTimeout(() => { this.loading = false }, 1000)
      })

      this.countDownDate = new Date('Jul 22, 2017 00:00:00').getTime()
      this.interval = setInterval(() => {
        let now = new Date().getTime()
        let diff = this.countDownDate - now

        this.days = Math.floor(diff / (1000 * 60 * 60 * 24))
        this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        this.seconds = Math.floor((diff % (1000 * 60)) / 1000)

        // If the count down is finished, write some text 
        if (diff < 0) {
          clearInterval(this.interval)
          this.days = 0
          this.hours = 0
          this.minutes = 0
          this.seconds = 0
        }
      }, 1000)
    })
  }
}
</script>
