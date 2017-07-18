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
    height            : calc(100vw * 1.3184);
    width             : 100vw;
    padding           : 5vh 10vw 0 10vw;
    background-size   : 100vw;
    background-image  : url('/assets/images/gammasurveillance.png');
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

    .live-streaming-text {
      margin      : 2vh 0 5vh 0;
      font-family : @light-font;

      .breakpoint-gte-2048( { font-size: 34px; });
      .breakpoint-1920-2048({ font-size: 29px; });
      .breakpoint-1680-1920({ font-size: 26px; });
      .breakpoint-1440-1680({ font-size: 23px; });
      .breakpoint-1280-1440({ font-size: 20px; });
      .breakpoint-lt-1280(  { font-size: 17px; });

      &.italic { font-style: italic; }
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
        Gamma Surveillance
      </div> -->
      <div class="live-streaming-text italic">Live streaming of the construction (coming soon...)</div>
      <div class="page-content">
        <div class="content-title">Xaurum Street Details</div>
        <ul class="item-list">
          <li class="item">it will be a smart-street of luxury villas, with all the services payable in xaurum</li>
          <li class="item">usability and renting only in xaurum (XAUR) and gamma (XGM)</li>
          <li class="item">Xaurum street will be located on the south-west of the island Krk, Croatia</li>
          <li class="item">the street will be private, accessible only to residents</li>
          <li class="item">one villa has already been built, and will be opened during ICO, the rest will be built in the next year</li>
          <li class="item">building will be finished on the 1st of May 2018 and opened for the summer season of 2018 the construction starts during ICO and will be broadcasted live</li>
          <li class="item">legal documentation, Terms of Agreement and proof of investment</li>
          <li class="item">extras: users will have the option of renting luxury cars, boats and drone delivery services</li>
        </ul>
        <div class="content-title">Gamma Project risk mitigation</div>
        <ul class="item-list">
          <li class="item">selected company controlling the actual building procedure and quality assurance</li>
          <li class="item">we have performed market analysis on investors interest</li>
          <li class="item">we’re expecting a court approved valuation of the Xaurum smart-street higher than the initial investment</li>
          <li class="item">building plot and plans have been reviewed and approved by our advisory council in Slovenia and Lichtenstein</li>
          <li class="item">request for insurance estimates has already been referred to insurance companies in the region</li>
          <li class="item">building will be finished on the 1st of May 2018 and opened for the summer season of 2018 the construction starts during ICO and will be broadcasted live</li>
          <li class="item">we have selected crucial managing and oversight partners to become board members of the project</li>
          <li class="item">if the project does not succeed, the real-estates will be sold and distributed to gamma users in xaurum</li>
        </ul>
        <!--
        <div class="content-title">Legal</div>
        <div class="content-title">Gamma Documentation</div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      $('.content-wrapper').waitForImages(() => {
        setTimeout(() => { this.loading = false }, 1000)
      })
    })
  }
}
</script>
