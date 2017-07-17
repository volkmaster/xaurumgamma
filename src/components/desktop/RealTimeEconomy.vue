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
    position           : relative;
    width              : 100vw;
    height             : 90vh;
    background-size    : 100vw 90vh;
    background-image   : url('/assets/images/realtimeeconomy.png');
    background-repeat  : no-repeat;
    opacity            : 0.9;
    -webkit-transition : filter 0.2s ease-in;
    -moz-transition    : filter 0.2s ease-in;
    -o-transition      : filter 0.2s ease-in;
    transition         : filter 0.2s ease-in;

    &.fade { filter: blur(3px); }
  }

  .real-time-economy {
    position           : absolute;
    left               : 49.3%;
    top                : 44.7%;
    transform          : translate(-50%, -50%);
    width              : 20%;
    margin             : 10px auto 25px auto;
    padding-bottom     : 10px;
    border-top         : 1px solid @white;
    border-bottom      : 1px solid @white;
    display            : flex;
    align-items        : center;
    flex-direction     : column;
    cursor             : pointer;
    -webkit-transition : width 0.2s ease-in;
    -moz-transition    : width 0.2s ease-in;
    -o-transition      : width 0.2s ease-in;
    transition         : width 0.2s ease-in;

    .icon-wrapper {
      & when (@debug = true) { border: 1px solid red; }

      width           : 100%;
      height          : 100%;
      padding         : 2vh 0;
      display         : flex;
      justify-content : center;

      .icon {
          width  : 20%;
          height : 20%;
          color  : @white;
      }
    }

    .title {
      & when (@debug = true) { border: 1px solid red; }

      width       : 100%;
      font-family : @regular-font;
      text-align  : center;
      color       : @white;

      .breakpoint-gte-2048( { font-size: 34px; });
      .breakpoint-1920-2048({ font-size: 28px; });
      .breakpoint-1680-1920({ font-size: 24px; });
      .breakpoint-1440-1680({ font-size: 20px; });
      .breakpoint-1280-1440({ font-size: 16px; });
      .breakpoint-lt-1280(  { font-size: 16px; });
    }

    &:hover { width: 25%; }
  }

  .real-time-economy-dialog-wrapper {
    position         : absolute;
    left             : 50%;
    transform        : translate(-50%, -45%);
    padding          : 2vh 2vw 1vh 2.5vw;
    background-color : @black;
    color            : @white;
    border           : 2px solid @white;

    .page-title {
      font-family: @bold-font;

      .breakpoint-gte-2048( { font-size: 45px; });
      .breakpoint-1920-2048({ font-size: 39px; });
      .breakpoint-1680-1920({ font-size: 36px; });
      .breakpoint-1440-1680({ font-size: 33px; });
      .breakpoint-1280-1440({ font-size: 30px; });
      .breakpoint-lt-1280(  { font-size: 27px; });
    }

    .page-content {
      width: 85%;

      p {
        text-align: justify;
        color       : @gray;

        .breakpoint-gte-2048({
          font-size   : 27px;
          line-height : 36px;
        });
        .breakpoint-1920-2048({
          font-size   : 22px;
          line-height : 32px;
        });
        .breakpoint-1680-1920({
          font-size   : 19px;
          line-height : 28px;
        });
        .breakpoint-1440-1680({
          font-size   : 17px;
          line-height : 24px;
        });
        .breakpoint-1280-1440({
          font-size   : 15px;
          line-height : 20px;
        });
        .breakpoint-lt-1280({
          font-size   : 13px;
          line-height : 16px;
        });
      }

      .content-title {
        margin      : 2vh 0;
        font-family : @regular-font;
        color       : @white;

        .breakpoint-gte-2048( { font-size: 35px; });
        .breakpoint-1920-2048({ font-size: 29px; });
        .breakpoint-1680-1920({ font-size: 26px; });
        .breakpoint-1440-1680({ font-size: 23px; });
        .breakpoint-1280-1440({ font-size: 20px; });
        .breakpoint-lt-1280(  { font-size: 17px; });
      }

      .item-list {
        list-style-type : square;
        color           : @gray;

        .item {
          .breakpoint-gte-2048({
            padding-bottom : 2vh;
            font-size      : 27px;
            line-height    : 36px;
          });
          .breakpoint-1920-2048({
            padding-bottom : 2vh;
            font-size      : 22px;
            line-height    : 32px;
          });
          .breakpoint-1680-1920({
            padding-bottom : 2vh;
            font-size      : 19px;
            line-height    : 28px;
          });
          .breakpoint-1440-1680({
            padding-bottom : 2vh;
            font-size      : 17px;
            line-height    : 24px;
          });
          .breakpoint-1280-1440({
            padding-bottom : 2vh;
            font-size      : 15px;
            line-height    : 20px;
          });
          .breakpoint-lt-1280({
            padding-bottom : 2vh;
            font-size      : 13px;
            line-height    : 16px;
          });

          &:last-child { padding-bottom: 0; }
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
        width  : 60%;
        height : 60%;

        &:hover { filter: brightness(150%); }
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
    <div class="content-wrapper-inner" :class="{ fade: realTimeEconomyHovered || realTimeEconomyDialogOpened }" v-show="!loading"></div>
    <div class="real-time-economy no-select" @mouseenter="realTimeEconomyHovered = true" @mouseleave="realTimeEconomyHovered = false" @click="openRealTimeEconomyDialog()" v-show="!loading">
      <div class="icon-wrapper">
        <img class="icon" src="/assets/images/xaurum-icon.svg"/>
      </div>
      <div class="title">REAL TIME ECONOMY</div>
    </div>
    <transition name="fade">
      <div class="real-time-economy-dialog-wrapper" v-show="realTimeEconomyDialogOpened">
        <div class="page-title">
          Real Time Economy
        </div>
        <div class="page-content">
          <p>
            Xaurum Gamma shows how enhanced transparency of business, investments and even large cooporations, can be done using the blockchain and latest technology.
          <p>
          <div class="content-title">
            Gamma Platform Details
          </div>
          <ul class="item-list">
            <li class="item">all economic transactions will be visible in real time</li>
            <li class="item">the web platform will be developed during ICO</li>
            <li class="item">the platform will be developed into a Gamma DAPP after Ethereum Metropolis release and connected to Xaurum DAPP</li>
            <li class="item">controlling of the house and spending will be controlled by a tablet</li>
            <li class="item">all objects will be represented on the blockchain</li>
            <li class="item">powered by Xaurum</li>
            <li class="item">rental will be transparently done on a user-friendly platform where users will be able to rent villas and services</li>
          </ul>
        </div>
        <div class="btn-close">
          <img class="image" src="/assets/images/btn-close.png" @click="closeRealTimeEconomyDialog()"/>
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
      realTimeEconomyHovered: false,
      realTimeEconomyDialogOpened: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      $('.content-wrapper').waitForImages(() => {
        setTimeout(() => { this.loading = false }, 1000)
      })
      window.addEventListener('resize', () => this.resize())
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => this.resize())
  },
  methods: {
    resize () {
      this.positionRealTimeEconomyDialog()
    },
    positionRealTimeEconomyDialog () {
      let dialog = $('.real-time-economy-dialog-wrapper')
      if (dialog.length) {
        let scrollTop = $(window).scrollTop()
        let screenHeight = document.documentElement.clientHeight
        dialog[0].style.top = `${scrollTop + (screenHeight / 2)}px`
      }
    },
    openRealTimeEconomyDialog () {
      this.realTimeEconomyDialogOpened = true
      this.positionRealTimeEconomyDialog()
    },
    closeRealTimeEconomyDialog () {
      this.realTimeEconomyDialogOpened = false
    }
  }
}
</script>
