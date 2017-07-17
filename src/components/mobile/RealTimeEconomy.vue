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
    padding: 30px 30px 650px 30px;

    .page-title {
      font-size   : 50px;
      font-family : @bold-font;
    }

    .page-content {
      p {
        font-size   : 30px;
        text-align  : justify;
        line-height : 35px;
      }

      .content-title {
        margin      : 40px 0;
        font-size   : 40px;
        font-family : @regular-font;
      }

      .item-list {
        list-style-type: square;

        .item {
          padding-bottom : 20px;
          font-size      : 30px;
          line-height    : 35px;
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
        <p>
          Xaurum Gamma shows how enhanced transparency of business and investments can be done using the blockchain and latest technology.
        </p>
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
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from './NavFooter.vue'

export default {
  data () {
    return {}
  },
  components: {
    navFooter: NavFooter
  }
}
</script>
