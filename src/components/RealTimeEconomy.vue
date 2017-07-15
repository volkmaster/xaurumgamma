<style lang="less">
@import '../main';
</style>

<style lang="less" scoped>
@import (reference) '../main';

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

    .left {
      position: absolute;
      left: 18%;
      top: 34vh;
      width: 27%;
    }

    .right {
      position: absolute;
      left: 52%;
      top: 28.5vh;
      width: 30%;
    }

    .page-title {
      font-size   : 28px;
      font-family : @regular-font;
    }

    .page-content {
      .content-title {
        margin-top : 20px;
        font-size  : 14px;
        font-family : @regular-font;
        text-align: justify;
      }

      ul {
        margin-top: 0.5vh;
        list-style-type: square;
      }
      li {
        font-size   : 12px;
        line-height : 15px;
      }
    }
  }
}
</style>

<template>
  <div class="content-wrapper">
    <div class="content-wrapper-inner">
      <div class="left">
        <div class="page-title">
          Real Time Economy
        </div>
        <div class="page-content">
          <div class="content-title">
            Xaurum Gamma shows how enhanced transparency of business, investments and even large cooporations, can be done using the blockchain and latest technology
          </div>
        </div>
      </div>
      <div class="right">
        <div class="page-content">
          <div class="content-title">
            Gamma Platform Details
          </div>
          <ul>
            <li>all economic transactions will be visible in real time</li>
            <li>the web platform will be developed during ICO</li>
            <li>the platform will be developed into a Gamma DAPP after Ethereum Metropolis release and connected to Xaurum DAPP</li>
            <li>controlling of the house and spending will be controlled by a tablet</li>
            <li>all objects will be represented on the blockchain</li>
            <li>powered by Xaurum</li>
            <li>rental will be transparently done on a user-friendly platform where users will be able to rent villas and services</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
