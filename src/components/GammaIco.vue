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
    padding           : 50px 150px 0 150px;
    background-size   : 100vw;
    background-image  : url('/assets/images/gammaico.png');
    background-repeat : no-repeat;

    .page-title {
      font-size      : 35px;
      font-family    : @regular-font;
    }

    .page-content {
      .content-title {
        margin      : 40px 0;
        font-size   : 25px;
        font-family : @regular-font;
      }

      ul { list-style-type: square; }
      li {
        font-size   : 18px;
        line-height : 40px;
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
        <ul>
          <li>gamma (XGM) can be melted (or directly exchanged and provably destroyed) for a villa on the Xaurum smart-street, for a value determined by the number of XGM at the start of the project</li>
          <li>every villa will be valued for an ammount of gamma tokens, that will continously decrease for melt or “direct exchange”</li>
          <li>because gamma (XGM)’s value grows with reinvestment and recapitalization, the number of gamma (XGM) required to melt for an object, will decrease with the growth of the project</li>
          <li>the same gamma tokens can be melted or “directly exchanged” for all additional real-estate the project will acquire</li>
          <li>when gamma (XGM) is melted, the owner receives the ownership of the villa and the XAUR that it has accumulated</li>
          <li>Croatian taxation will apply in case of transfer of ownership</li>
          <li>implemented as a token on Ethereum network</li>
          <li>Xaurum Gamma will be traded in pair with Xaurum and Bitcoin</li>
          <li>ICO capped at 54800 XGM (5 480 000 €)</li>
          <li>in case the goal is reached before the 2 month period, the gamma token distribution will start sooner</li>
          <li>the initial price of 1 Xaurum Gamma (XGM) will be 100 €</li>
          <li>recapitalization of Xaurum Gamma will be at 1 Xaurum Gamma to its market price</li>
          <li>1 Xaurum Gamma can be used to rent a villa from Xaurum street, at the market rate or at 100 € per 1 XGM if lower (higher when recapitalized)</li>
          <li>the supply of Xaurum Gamma tokens represents continuously growing xaurum reserves by investing half of the profits made by Xaurum Gamma project into xaurum</li>
          <li>the second half of the profits are used to reinvest in the project (additional buildings, locations)</li>
          <li>Gamma tokens (XGM) can be destroyed to receive XAUR & to use as payment for rent</li>
          <li>gamma commonwealth xaurum reserves will increase soon after the end of the ICO (from the profit of the already built object)</li>
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
