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
    height            : 90vh;
    background-size   : 100vw 90vh;
    background-image  : url('/assets/images/realtimeeconomy.png');
    background-repeat : no-repeat;
    opacity           : 0.9;
    transition        : filter 0.3s ease-in;

    &.fade { filter: blur(3px); }
  }

  .real-time-economy {
    position       : absolute;
    left           : 48.85%;
    top            : 44.7%;
    transform      : translate(-50%, -50%);
    width          : 20%;
    margin         : 10px auto 25px auto;
    padding-bottom : 10px;
    border-top     : 1px solid @white;
    border-bottom  : 1px solid @white;
    display        : flex;
    align-items    : center;
    flex-direction : column;
    cursor         : pointer;
    transition     : width 0.3s ease-in;

    .icon-wrapper {
      padding         : 2vh 0;
      display         : flex;
      justify-content : center;

      .icon {
        font-size : 50px;
        color     : @white;
      }
    }

    .title {
      & when (@debug = true) { border: 1px solid red; }

      width       : 100%;
      font-family : @regular-font;
      font-size   : 16px;
      text-align  : center;
      color       : @white;
    }

    &:hover { width: 25%; }
  }

  .real-time-economy-dialog-wrapper {
    position         : absolute;
    left             : 50%;
    transform        : translate(-50%, -45%);
    padding          : 15px 20px 0 20px;
    background-color : @black;
    color            : @white;
    border           : 2px solid @white;

    .page-title {
      font-size   : 30px;
      font-family : @bold-font;
    }

    .page-content {
      width: 85%;

      p {
        font-size   : 15px;
        text-align  : justify;
        line-height : 22px;
        color       : @gray;
      }

      .content-title {
        margin      : 15px 0;
        font-size   : 20px;
        font-family : @regular-font;
        color       : @white;
      }

      .item-list {
        list-style-type : square;
        color           : @gray;

        .item {
          padding-bottom : 10px;
          font-size      : 15px;
          line-height    : 22px;

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
.fade-enter-active { transition: opacity 0.3s linear; }
.fade-leave-active { transition: opacity 0.3s linear; }
</style>

<template>
  <div class="content-wrapper">
    <div class="loader-wrapper" v-show="loading">
      <img src="/assets/images/loader.svg"/>
    </div>
    <div class="content-wrapper-inner" :class="{ fade: realTimeEconomyHovered || realTimeEconomyDialogOpened }" v-show="!loading"></div>
    <div class="real-time-economy no-select" @mouseenter="realTimeEconomyHovered = true" @mouseleave="realTimeEconomyHovered = false" @click="openRealTimeEconomyDialog()" v-show="!loading">
      <div class="icon-wrapper">
        <span class="fa-stack fa-lg">
          <i class="icon fa fa-money fa-stack-1x"></i>
        </span>
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
