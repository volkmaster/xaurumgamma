<style lang="less">
@import '../main';
</style>

<style lang="less" scoped>
@import (reference) '../main';

.wrapper {
  & when (@debug = true) { border: 1px solid black; }

  width            : 100vw;
  background-color : @black;
}

.header-wrapper {
  width            : 100vw;
  background-color : @black;

  .nav-header {
    display         : flex;
    align-items     : center;
    justify-content : space-between;

    .logo-wrapper {
      width           : 60%;
      padding         : 2vh 2vw;
      display         : flex;
      justify-content : flex-start;

      .logo {
        width  : 100%;
        height : 100%;
      }
    }

    #toggle {
      margin-right    : 30px;
      display         : flex;
      justify-content : flex-end;
      font-size       : 70px;
      color           : @white;
    }
  }

  a { text-decoration: none; }

  .list {
    margin-left     : 2vw;
    padding         : 0;
    display         : none;
    list-style-type : none;

    .item {
      margin: 15px 0;

      .text {
        font-size : 40px;
        color     : @white;

        &.active { color: @purple; }
      }
    }
  }
}

.content-wrapper {
  & when (@debug = true) { border: 1px solid blue; }

  width  : 100vw;
  height : auto;

  background-color: @black;

  .houses-wrapper {
    position   : relative;
    height     : 100%;
    overflow-x : scroll;
    overflow-y : hidden;

    .house {
      margin-bottom : 50px;
      width         : 100vw;
      height        : calc(100vw * 1.16)
    }
  }
}
</style>

<template>
  <div class="wrapper">
    <nav-header
      @change-page="changePage">
    </nav-header>
    <home
      v-if="currentPage === 'home'">
    </home>
  </div>
</template>

<script>
import NavHeaderMobile from '../components/NavHeaderMobile.vue'
import HomeMobile from '../components/HomeMobile.vue'

export default {
  data () {
    return {
      currentPage: 'home'
    }
  },
  mounted () {
    this.$nextTick(() => {})
  },
  methods: {
    changePage (navItemLabel) {
      this.currentPage = navItemLabel
    }
  },
  components: {
    navHeader: NavHeaderMobile,
    home: HomeMobile
  }
}
</script>
