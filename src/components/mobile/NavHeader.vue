<style lang="less">
// @import '../../main';
</style>

<style lang="less" scoped>
@import (reference) '../../main';

.header-wrapper {
  width            : 100vw;
  background-color : @black;

  nav {
    padding-bottom: 1vh;

    .nav-header {
      display         : flex;
      align-items     : center;
      justify-content : space-between;

      .logo-wrapper {
        width           : 60%;
        padding         : 2vh 3vw;
        display         : flex;
        justify-content : flex-start;

        .logo {
          width  : 100%;
          height : 100%;
        }
      }

      #toggle {
        margin-right    : 4vh;
        display         : flex;
        justify-content : flex-end;
        font-size       : 70px;
        color           : @white;
        cursor          : pointer;
      }
    }

    a { text-decoration: none; }

    .nav-list {
      margin-left     : 2vw;
      padding         : 0;
      display         : none;
      list-style-type : none;

      .nav-item {
        margin : 2vh 0;
        cursor : pointer;

        .nav-text {
          font-size : 40px;
          color     : @white;

          &.active { color: @purple; }
        }
      }
    }
  }
}
</style>

<template>
  <div class="header-wrapper">
    <nav role="navigation">
      <div class="nav-header">
        <div class="logo-wrapper">
          <img class="logo" src="/assets/images/logo.png" @click="selectNavItem('home')"/>
        </div>
        <a href="#" id="toggle" @click="slideNavList()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <ul class="nav-list">
        <li class="nav-item" v-for="navItem in navItems" @click="selectNavItem(navItem.label)">
          <a class="nav-text" :class="{ active: navItem.active }" href="#">{{ navItem.label | uppercase}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      navItems: [
        { label: 'project overview', active: false },
        { label: 'gamma ico', active: false },
        { label: 'gamma surveillance', active: false },
        { label: 'real time economy', active: false },
        { label: 'team', active: false }
      ]
    }
  },
  methods: {
    selectNavItem (navItemLabel) {
      for (let i = 0; i < this.navItems.length; i++) {
        if (this.navItems[i].label === navItemLabel) {
          this.navItems[i].active = true
        } else {
          this.navItems[i].active = false
        }
      }
      this.$emit('change-page', navItemLabel)

      this.slideNavList()
    },
    slideNavList () {
      $('.nav-list').slideToggle(200, () => {})
    }
  }
}
</script>
