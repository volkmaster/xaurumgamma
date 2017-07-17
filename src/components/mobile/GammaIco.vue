<style lang="less">
// @import '../../main';
</style>

<style lang="less" scoped>
@import (reference) '../../main';

.content-wrapper {
  & when (@debug = true) { border: 1px solid blue; }

  width                      : 100vw;
  color                      : @black;
  background-color           : @white;
  background-size            : 100vw;
  background-image           : url('/assets/images/gammaico.png');
  background-repeat          : no-repeat;
  background-size            : cover;
  overflow-y                 : scroll;
  -webkit-overflow-scrolling : touch;

  .content-wrapper-inner {
    padding: 30px 30px 350px 30px;

    .page-title {
      font-size   : 50px;
      font-family : @bold-font;
    }

    .page-content {
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
        Gamma ICO
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
