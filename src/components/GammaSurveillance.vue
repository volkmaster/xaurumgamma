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
    height            : calc(100vw * 1.3184);
    width             : 100vw;
    padding           : 50px;
    background-size   : 100vw;
    background-image  : url('/assets/images/gammasurveillance.png');
    background-repeat : no-repeat;

    .page-title {
      font-size      : 35px;
      padding-bottom : 30px;

      .live-streaming-text { font-size: 20px; }
    }

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
        Gamma Surveillance
        <div class="live-streaming-text">Live streaming of the construction</div>
      </div>
      <div class="page-content">
        Cam 1
        <br/>
        Cam 2

        <div class="content-title">Xaurum Street Details</div>
        <ul>
          <li>it will be a smart-street of luxury villas, with all the services payable in xaurum</li>
          <li>usability and renting only in xaurum (XAUR) and gamma (XGM)</li>
          <li>Xaurum street will be located on the south-west of the island Krk, Croatia</li>
          <li>the street will be private, accessible only to residents</li>
          <li>one villa has already been built, and will be opened during ICO, the rest will be built in the next year</li>
          <li>building will be finished on the 1st of May 2018 and opened for the summer season of 2018 the construction starts during ICO and will be broadcasted live</li>
          <li>legal documentation, Terms of Agreement and proof of investment</li>
          <li>extras: users will have the option of renting luxury cars, boats and drone delivery services</li>
        </ul>
        <div class="content-title">Gamma Project risk mitigation</div>
        <ul>
          <li>selected company controlling the actual building procedure and quality assurance</li>
          <li>we have performed market analysis on investors interest</li>
          <li>we’re expecting a court approved valuation of the Xaurum smart-street higher than the initial investment</li>
          <li>building plot and plans have been reviewed and approved by our advisory council in Slovenia and Lichtenstein</li>
          <li>request for insurance estimates has already been referred to insurance companies in the region</li>
          <li>building will be finished on the 1st of May 2018 and opened for the summer season of 2018 the construction starts during ICO and will be broadcasted live</li>
          <li>we have selected crucial managing and oversight partners to become board members of the project</li>
          <li>if the project does not succeed, the real-estates will be sold and distributed to gamma users in xaurum</li>
        </ul>
        <div class="content-title">Legal</div>
        <div class="content-title">Gamma Documentation</div>
        <div class="content-title">Gamma Companies</div>
        <p>
          Gamma gradnje d. o. o.
          <br/>
          Xaurum Gamma trust A. G.
        </p>
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
