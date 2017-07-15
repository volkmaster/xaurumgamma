<style lang="less">
@import '../main';
</style>

<style lang="less" scoped>
@import (reference) '../main';

.wrapper {
  & when (@debug = true) { border: 1px solid black; }

  width  : 100vw;
  height : 100vh;
}

.header-wrapper {
  & when (@debug = true) { border: 1px solid green; }

  width            : 100vw;
  height           : 10vh;
  display          : flex;
  align-items      : center;
  justify-content  : flex-start;
  background-color : @black;

  .logo-wrapper {
    display         : flex;
    align-items     : center;
    justify-content : center;

    .logo {
      width  : 75%;
      height : 75%;
    }
  }

  .nav-item {
    margin-left : 30px;
    color       : @white;
    font-size   : 18px;
    cursor      : pointer;

    &:hover { color: @purple; }
  }
}

.content-wrapper {
  & when (@debug = true) { border: 1px solid blue; }

  width            : 100vw;
  min-height       : 90vh;
  // background-color : @black;


  .content-wrapper-inner {
    width             : 100vw;
    height            : calc(100vw * 1.3184);
    margin            : 0 auto;
    padding           : 50px;
    background-size   : 100vw;
    background-color  : @white;
    background-image  : url('/assets/images/projectoverview.png');
    background-repeat : no-repeat;

    .page-title {
      font-size      : 35px;
      padding-bottom : 30px;
    }

    .page-content {
      p { text-align: justify; }

      .img-gold {
        width  : 110px;
        height : auto;
      }

      .img-purple {
        width  : 200px;
        height : auto;
        margin : 20px 0 15px 10px;
      }
    }
  }
}
</style>

<template>
  <div class="content-wrapper">
    <div class="content-wrapper-inner">
      <div class="page-title">
        Project Overview
      </div>
      <div class="page-content">
        <img src="/assets/images/xaurum.svg" class="img-gold" />
        <p>
          Xaurum is a crypto-currency with a continuously growing gold base. It has appreciated from the initial 0.00625 $ per XAUR to the current 0.30 $ and has increased its common gold reserves from 1016 g to the current 129251 g. Xaurum Gamma is a commonwealth within the Xaurum commonwealth, that applies the concept of Xaurum within its established economic framework, and benefits both. Gamma increases the use of Xaurum and its coinage, and Xaurum enhances the value of Gamma.
        </p>
        <img src="/assets/images/logo.png" class="img-purple"/>
        <p>
          Xaurum Gamma is a commonwealth of the first crypto smart-street. It is composed of six luxury villas on the island Krk in Croatia, a prime tourist real-estate. The goal of Xaurum projects is to preserve and increase value. The investments must therefore be long-term, relatively safe, yield the most profit and be augmentable by speculation. Real-estate is a safe investment, especially in a touristic setting. However, the time required for profitability makes it infeasible for small investors and crypto can mitigate this downside. The creation of Xaurum Gamma, a crypto-asset that represents half of the profit (and accumulates it in xaurum), creates a way for investors to benefit from speculation. It avoids its potential downside by employing scarcity (the number of Xaurum Gamma tokens is limited), guaranteeing a minimal value through its use (Xaurum Gamma tokens can be used to rent a villa at the rate 1 XGM : 100 € or higher when recapitalized) and the growth of its xaurum reserves.
        </p>
        <p>
          The transparency and speed of crypto will enable the project owners to see all the economic activity in real time on the Gamma platform. Gamma project profits and the acquisition of new xaurum reserves will be visible in real time. All villas, smart fridges, drones, etc. will be represented on the blockchain, where Gamma owners will be able to monitor all the transactions and profit creation of each individual object.
        </p>
        <p>
          Half of the profit from the smart-street and its services will be reinvested in the growth of the project and the second half will be used to acquire xaurum (XAUR) for the Gamma commonwealth. The reserves of gamma (XGM) kept in xaurum will be increased as the project grows, and their value will grow as xaurum (XAUR) price increases. Gamma (XGM) itself is continuously increasing itself in value and size by the use of the crypto-smart street and its services. This increase will additionally speed up the process of acquisition of new.
        </p>
        <p>
          Xaurum Gamma will be recapitalized with additional funds when required, at the rate higher than the initial offer – the rate of issuing new XGM will be determined by the market, and the new funds will be used to grow the common real-estate assets. The ICO funds cap is determined by the costs required for the project, and all the funds will be used for this purpose only; once the development of the first Xaurum street is completed, the valuation of the land and the built objects will increase. The low ICO ratio, determined by costs, along with the absence of rewards for developers and marketing, make it an excellent opportunity for investment, that will benefit investors from the start of the project, and keep benefiting with the profits of the growth of the project and the gamma xaurum reserves.
        </p>
        <p>
          Xaurum street will consist of six luxury villas of modern designs, equipped with the latest smart-house and crypto accessories, their own pools and lounge areas. The villas will be built to the highest aesthetic standards, with functionality in mind. They will provide their guests with the highest rate of luxury and privacy, while still being accessible and connected to the infrastructure. The first street is built on a premium location, in the south-west of the Island of Krk and is connected with nice roads, markets, fine restaurants, beautiful beaches etc. The island itself is well connected, accessible via highway from EU and has its own airport and plenty of ports. The street will be private, accessible only to Xaurum users and will include the possibility of renting luxury cars, yachts, boats, and drone deliveries.
        </p>
        <p>
          The initial goal of the project is to secure enough funds to build the first private Xaurum luxury smart-street, and acquire the Croatian company that owns the plot with the first object already built. The completion of the building development is scheduled in May 2018, making it open for use and rent in the summer season of 2018. Because one object is already built, the profit from the already opened villa will start to accumulate soon after the ICO. After the final development of the initial buildings and infrastructure, half of the rent profits will accumulate, until the expansion of the street or a creation of a new street will be viable.
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
