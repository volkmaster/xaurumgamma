<style lang="less">
@import '../../main';
</style>

<style lang="less" scoped>
@import (reference) '../../main';

.content-wrapper {
  & when (@debug = true) { border: 1px solid blue; }

  width      : 100vw;
  min-height : 90vh;

  .content-wrapper-inner {
    width             : 100vw;
    height            : 90vh;
    background-size   : 100vw 90vh;
    background-image  : url('/assets/images/realtimeeconomy.png');
    background-repeat : no-repeat;

    .popup {
      opacity: 0;
      transition: opacity 0.3s linear;

      &.fade { opacity: 1; }

      .left {
        position : absolute;
        left     : 18%;
        top      : 30vh;
        width    : 27%;
        color    : @dark-gray;
      }

      .right {
        position : absolute;
        left     : 53%;
        top      : 33vh;
        width    : 27%;
        color    : @white;
      }
    }

    .page-title {
      position        : absolute;
      left            : 20%;
      top             : 42vh;
      z-index         : 1;
      font-size       : 35px;
      font-family     : @regular-font;
      text-align      : center;
      color           : @white;
      cursor          : pointer;
      transition      : color 0.1s linear;

      &:hover { text-decoration: underline; }
    }

    .page-content {
      .content-title {
        margin-top  : 12px;
        font-size   : 16px;
        font-family : @regular-font;
        text-align  : justify;
      }

      .item-list {
        margin-top      : 0.5vh;
        padding-left    : 15px;
        list-style-type : square;

        .item {
          font-size   : 12px;
          line-height : 15px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="content-wrapper">
    <div class="content-wrapper-inner">
      <div class="page-title" v-show="!popupOpened" @click="popupOpened = true">
        Real Time Economy
      </div>
      <div class="popup" :class="{ fade: popupOpened }">
        <div class="left">
          <div class="page-content">
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
        </div>
        <div class="right">
          <div class="page-content">
            <div class="content-title">
              Xaurum Gamma shows how enhanced transparency of business, investments and even large cooporations, can be done using the blockchain and latest technology.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popupOpened: false
    }
  }
}
</script>
