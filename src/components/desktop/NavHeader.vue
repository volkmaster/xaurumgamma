<style lang="less">
@import '../../main';
</style>

<style lang="less" scoped>
@import (reference) '../../main';

.header-wrapper {
  & when (@debug = true) { border: 1px solid green; }

  width            : 100vw;
  height           : 10vh;
  display          : flex;
  align-items      : center;
  justify-content  : flex-start;
  background-color : @black;

  .logo-wrapper {
    height          : 100%;
    display         : flex;
    align-items     : center;
    justify-content : center;

    .logo {
      max-width  : 85%;
      max-height : 85%;
      cursor     : pointer;
    }
  }

  .nav-item {
    margin-left : 30px;
    color       : @white;
    font-family : @regular-font;
    cursor      : pointer;
    -webkit-transition : color 0.2s linear;
    -moz-transition    : color 0.2s linear;
    -o-transition      : color 0.2s linear;
    transition         : color 0.2s linear;

    .breakpoint-gte-2048( { font-size: 30px; });
    .breakpoint-1920-2048({ font-size: 24px; });
    .breakpoint-1680-1920({ font-size: 22px; });
    .breakpoint-1440-1680({ font-size: 18px; });
    .breakpoint-1280-1440({ font-size: 16px; });
    .breakpoint-lt-1280(  { font-size: 14px; });

    &:hover  { color: @purple; }
    &.active { color: @purple; }
  }
}
</style>

<template>
  <div class="header-wrapper no-select">
    <div class="logo-wrapper">
      <img class="logo" src="/assets/images/logo.png" @click="selectNavItem('home')"/>
    </div>
    <div class="nav-item" :class="{ active: navItem.active }" v-for="navItem in navItems" @click="selectNavItem(navItem.label)">{{ navItem.label | uppercase }}</div>
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
    }
  }
}
</script>
