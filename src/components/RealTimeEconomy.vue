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
    height            : calc(100vw * 1.3184);
    padding           : 50px;
    background-size   : 100vw;
    background-image  : url('/assets/images/gammasurveillance.png'); // change to realtimeeconomy.png
    background-repeat : no-repeat;

    .page-title { font-size: 35px; }

    .page-content {
      .content-title {
        margin-top : 30px;
        font-size  : 20px;
      }

      ul { list-style-type: square; }
    }
  }
}
</style>

<template>
  <div class="content-wrapper">
    <div class="content-wrapper-inner">
      <div class="page-title">
        Real Time Economy
      </div>
      <div class="page-content">
        <div class="content-title">
          Xaurum Gamma shows how enhanced transparency of business, investments and even large cooporations, can be done using the blockchain and latest technology
        </div>
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
          <li>anonimnost</li>
        </ul>
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
