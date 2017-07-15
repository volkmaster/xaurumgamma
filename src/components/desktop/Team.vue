<style lang="less">
@import '../../main';
</style>

<style lang="less" scoped>
@import (reference) '../../main';

.content-wrapper {
  & when (@debug = true) { border: 1px solid blue; }

  width      : 100vw;
  min-height : 90vh;

  .content-wrapper-inner {
    width             : 100vw;
    height            : calc(100vw * 1.3184);
    padding           : 50px 150px 0 150px;
    background-size   : 100vw;
    background-image  : url('/assets/images/team.png');
    background-repeat : no-repeat;
  }

  .page-title {
    padding-bottom : 30px;
    font-size      : 35px;
    font-family    : @regular-font;
  }

  .page-content {
    .row {
      margin-bottom   : 40px;
      display         : flex;
      justify-content : center;

      .team-member {
        margin-left     : 30px;
        display         : flex;
        justify-content : center;

        .team-member-img {
          width        : 250px;
          height       : auto;
          margin-right : 20px;
        }

        .team-member-text {
          max-width: 200px;

          .team-member-name {
            margin-bottom : 10px;
            font-size     : 20px;
            font-family   : @regular-font;
          }
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
        Team
      </div>
      <div class="page-content">
        <div class="row">
          <div class="team-member">
            <img src="/assets/images/gasper_kenda.jpg" class="team-member-img"/>
            <div class="team-member-text">
              <div class="team-member-name">
                Gasper Kenda
              </div>
              <div class="team-member-position">
                Creator of Xaurum and the mastermind
                behind Xaurum economy.
              </div>
            </div>
          </div>
          <div class="team-member">
            <img src="/assets/images/jure_ristic.jpg" class="team-member-img"/>
            <div class="team-member-text">
              <div class="team-member-name">
                Jure Ristic
              </div>
              <div class="team-member-position">
                Sales and marketing expert.
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="team-member">
            <img src="/assets/images/andrej_kastelic.jpg" class="team-member-img"/>
            <div class="team-member-text">
              <div class="team-member-name">
                Andrej Kastelic
              </div>
              <div class="team-member-position">
                Market expert for crypto currencies.
              </div>
            </div>
          </div>
          <div class="team-member">
            <img src="/assets/images/klemen_smigovc.jpg" class="team-member-img"/>
            <div class="team-member-text">
              <div class="team-member-name">
                Klemen Smigovc
              </div>
              <div class="team-member-position">
                Technical support and research.
              </div>
            </div>
          </div>
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
