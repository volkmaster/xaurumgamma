<style lang="less">
@import '../../main';
</style>

<style lang="less" scoped>
@import (reference) '../../main';

.content-wrapper {
  & when (@debug = true) { border: 1px solid blue; }

  width            : 100vw;
  min-height       : 90vh;
  background-color : @black;

  .loader-wrapper {
    height          : 80vh;
    display         : flex;
    align-items     : center;
    justify-content : center;
  }

  .content-wrapper-inner {
    width             : 100vw;
    height            : calc(100vw * 0.57013);
    padding           : 50px 150px 0 150px;
    background-size   : 100vw;
    background-image  : url('/assets/images/team.png');
    background-repeat : no-repeat;
  }

  .page-title {
    font-size   : 35px;
    font-family : @bold-font;
  }

  .page-content {
    margin-top      : 40px;
    display         : flex;
    justify-content : center;

    .team-member {
      position        : relative;
      padding         : 0 5px;
      display         : flex;
      justify-content : center;

      &:first-child { padding-left: 0; }
      &:last-child  { padding-right: 0; }

      .team-member-img {
        width              : 250px;
        height             : auto;
        -webkit-transition : filter 0.1s ease-in;
        -moz-transition    : filter 0.1s ease-in;
        -o-transition      : filter 0.1s ease-in;
        transition         : filter 0.1s ease-in;

        &.fade { filter: blur(3px) brightness(70%); }
      }

      .team-member-text {
        position        : absolute;
        width           : 70%;
        height          : 100%;
        z-index         : 1;
        display         : flex;
        align-items     : center;
        justify-content : center;
        flex-direction  : column;
        color           : @white;

        .team-member-name {
          margin-bottom : 10px;
          font-size     : 20px;
          font-family   : @bold-font;
        }

        .team-member-position { text-align: center; }
      }
    }
  }
}
</style>

<template>
  <div class="content-wrapper">
    <div class="loader-wrapper" v-show="loading">
      <img src="/assets/images/loader.svg"/>
    </div>
    <div class="content-wrapper-inner" v-show="!loading">
      <div class="page-title">
        Team
      </div>
      <div class="page-content">
        <div class="team-member" v-for="teamMember in teamMembers" @mouseenter="teamMember.active = true" @mouseleave="teamMember.active = false">
          <img class="team-member-img" :class="{ fade: teamMember.active }" :src="'/assets/images/' + teamMember.image + '.jpg'" />
          <div class="team-member-text" v-show="!teamMember.active">
            <div class="team-member-name">
              {{ teamMember.name }}
            </div>
            <div class="team-member-position">
              {{ teamMember.position }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      loading: true,
      teamMembers: [
        { name: 'Gasper Kenda', position: 'Creator of Xaurum and the mastermind behind Xaurum economy.', image: 'gasper_kenda', active: false },
        { name: 'Jure Ristic', position: 'Sales and marketing expert.', image: 'jure_ristic', active: false },
        { name: 'Andrej Kastelic', position: 'Market expert for crypto currencies.', image: 'andrej_kastelic', active: false },
        { name: 'Klemen Smigovc', position: 'Technical support and research.', image: 'klemen_smigovc', active: false }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      $('.content-wrapper').waitForImages(() => {
        setTimeout(() => { this.loading = false }, 1000)
      })
    })
  }
}
</script>
