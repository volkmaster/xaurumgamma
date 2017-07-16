<style lang="less">
@import '../../main';
</style>

<style lang="less" scoped>
@import (reference) '../../main';
.footer-wrapper {
  display          : flex;
  background-color : @black;
  color            : @white;

  .footer-item {
    padding: 20px 30px;

    &.left   { width: 30%; }
    &.center { width: 40%; }
    &.right  { width: 30%; }

    .title {
      padding-bottom : 10px;
      font-size      : 25px;
      font-family    : @regular-font;
    }

    .text {
      font-size   : 12px;
      text-align  : justify;
      line-height : 20px;

      .item-list {
        margin          : 0;
        padding-left    : 15px;
        list-style-type : square;

        .item { text-align: left; }
      }
    }
  }
}
</style>

<template>
  <div class="footer-wrapper">
    <div class="footer-item left">
      <div class="title">
        XAURUM GAMMA
      </div>
      <div class="text">
        Xaurum Gamma is a commonwealth of the first private crypto smart-street, composed of six luxury villas on the island Krk in Croatia. It is a part of the Xaurum commonwealth and a source of wealth both for gamma (XGM) investors and Xaurum as a whole.
      </div>
    </div>
    <div class="footer-item center">
      <div class="title">
        XAURUM
      </div>
      <div class="text">
        Xaurum is a crypto-currency with continuously growing gold base. It has appreciated from the initial 0.00625 $ per XAUR to the current 0.30 $ and increased its gold reserves from 1016 g to current 129251 g. Gamma increases the use of Xaurum and its coinage and Xaurum enhances the value of Gamma.
      </div>
    </div>
    <div class="footer-item right">
      <div class="title">
        COMPANIES
      </div>
      <div class="text">
        <ul class="item-list">
          <li class="item"Xaurum Gamma tokens: Xaurum Gamma Trust Reg. Liechtenstein</li>
          <li class="item">Xaurum CryptoCurrency: Auresco Foundation, Slovenia</li>
          <li class="item">Compliance: Torch Technology AG, Switzerland</li>
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
