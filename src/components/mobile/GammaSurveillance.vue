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
  background-image           : url('/assets/images/gammasurveillance.png');
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

      p {
        font-size   : 20px;
        text-align  : justify;
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
        Gamma Surveillance
      </div>
      <div class="page-content">
        <div class="content-title">Live streaming of the construction (coming soon...)</div>
        <div class="content-title">Xaurum Street Details</div>
        <ul class="item-list">
          <li class="item">it will be a smart-street of luxury villas, with all the services payable in xaurum</li>
          <li class="item">usability and renting only in xaurum (XAUR) and gamma (XGM)</li>
          <li class="item">Xaurum street will be located on the south-west of the island Krk, Croatia</li>
          <li class="item">the street will be private, accessible only to residents</li>
          <li class="item">one villa has already been built, and will be opened during ICO, the rest will be built in the next year</li>
          <li class="item">building will be finished on the 1st of May 2018 and opened for the summer season of 2018 the construction starts during ICO and will be broadcasted live</li>
          <li class="item">legal documentation, Terms of Agreement and proof of investment</li>
          <li class="item">extras: users will have the option of renting luxury cars, boats and drone delivery services</li>
        </ul>
        <div class="content-title">Gamma Project risk mitigation</div>
        <ul class="item-list">
          <li class="item">selected company controlling the actual building procedure and quality assurance</li>
          <li class="item">we have performed market analysis on investors interest</li>
          <li class="item">we’re expecting a court approved valuation of the Xaurum smart-street higher than the initial investment</li>
          <li class="item">building plot and plans have been reviewed and approved by our advisory council in Slovenia and Lichtenstein</li>
          <li class="item">request for insurance estimates has already been referred to insurance companies in the region</li>
          <li class="item">building will be finished on the 1st of May 2018 and opened for the summer season of 2018 the construction starts during ICO and will be broadcasted live</li>
          <li class="item">we have selected crucial managing and oversight partners to become board members of the project</li>
          <li class="item">if the project does not succeed, the real-estates will be sold and distributed to gamma users in xaurum</li>
        </ul>
        <!-- <div class="content-title">Legal</div>
        <div class="content-title">Gamma Documentation</div> -->
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
