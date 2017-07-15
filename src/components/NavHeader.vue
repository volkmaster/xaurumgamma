<style lang="less">
@import '../main';
</style>

<style lang="less" scoped>
@import (reference) '../main';

.header-wrapper {
  & when (@debug = true) { border: 1px solid green; }

  width            : 100vw;
  height           : 10vh;
  display          : flex;
  align-items      : center;
  justify-content  : flex-start;
  background-color : @black;

  .logo-wrapper {
    height: 100%;
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
    font-size   : 16px;
    cursor      : pointer;

    &:hover { color: @purple; }

    &.active { color: @purple; }
  }
}
</style>

<template>
  <div class="header-wrapper no-select">
    <div class="logo-wrapper">
      <img class="logo" src="/assets/images/logo.png" @click="selectNavItem('home')"/>
    </div>
    <div class="nav-item" :class="{ active: navItem.selected }" v-for="navItem in navItems" @click="selectNavItem(navItem.label)">{{ navItem.label | uppercase }}</div>
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
