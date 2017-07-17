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
  background-image           : url('/assets/images/team.png');
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
      .team-member {
        margin  : 0 0 30px 30px;
        display : flex;

        .team-member-img {
          width        : 250px;
          margin-right : 20px;
        }

        .team-member-text {
          max-width: 400px;

          .team-member-name {
            margin-bottom : 10px;
            font-size     : 30px;
            font-family   : @regular-font;
          }

          .team-member-position { font-size: 20px; }
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
