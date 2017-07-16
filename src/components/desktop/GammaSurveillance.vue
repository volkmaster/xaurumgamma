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
    padding           : 50px 150px 0 150px;
    background-size   : 100vw;
    background-image  : url('/assets/images/gammasurveillance.png');
    background-repeat : no-repeat;

    .page-title {
      font-size   : 35px;
      font-family : @bold-font;

      .live-streaming-text {
        margin      : 30px 0;
        font-size   : 20px;
        font-family : @light-font;

        &.italic { font-style: italic; }
      }
    }

    .page-content {
      .content-title {
        margin      : 40px 0;
        font-size   : 25px;
        font-family : @regular-font;
      }

      .item-list {
        list-style-type: square;

        .item {
          padding-bottom : 30px;
          font-size      : 18px;
          line-height    : 22px;

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
      <div class="page-title">
        Gamma Surveillance
        <div class="live-streaming-text italic">Live streaming of the construction (coming soon...)</div>
      </div>
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
        <div class="content-title">Gamma Companies</div>
        <ul class="item-list">
          <li class="item">Gamma gradnje d. o. o.</li>
          <li class="item">Xaurum Gamma trust A. G.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import waitForImages from 'jquery.waitForImages'

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
