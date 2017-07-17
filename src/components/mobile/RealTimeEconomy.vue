<style lang="less">
// @import '../../main';
</style>

<style lang="less" scoped>
@import (reference) '../../main';

.content-wrapper {
  & when (@debug = true) { border: 1px solid blue; }

  width                      : 100vw;
  height                     : 90vh;
  color                      : @black;
  background-color           : @white;
  background-size            : 100vw;
  background-image           : url('/assets/images/projectoverview.png');
  background-repeat          : no-repeat;
  background-size            : cover;
  overflow-y                 : scroll;
  -webkit-overflow-scrolling : touch;

  .content-wrapper-inner {
    padding: 15px;

    .page-title {
      margin-bottom : 50px;
      font-size     : 50px;
      font-family   : @regular-font;
    }

    .page-content {
      .content-title {
        margin      : 40px 0;
        font-size   : 30px;
        font-family : @regular-font;
      }

      .item-list {
        list-style-type: square;

        .item {
          padding-bottom : 20px;
          font-size      : 20px;
        }
      }
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
          Xaurum Gamma shows how enhanced transparency of business and investments can be done using the blockchain and latest technology.
        </div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
