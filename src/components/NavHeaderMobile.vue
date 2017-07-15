<style lang="less">
@import '../main';
</style>

<style lang="less" scoped>
@import (reference) '../main';

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
        cursor          : pointer;
      }
    }

    a { text-decoration: none; }

    .list {
      margin-left     : 2vw;
      padding         : 0;
      display         : none;
      list-style-type : none;

      .item {
        margin : 15px 0;
        cursor : pointer;

        .text {
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
        <a href="#" id="toggle">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <ul class="list">
        <li class="item" v-for="navItem in navItems" @click="selectNavItem(navItem.label)">
          <a class="text" :class="{ active: navItem.selected }" href="#">{{ navItem.label | uppercase}}</a>
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
  mounted () {
    this.$nextTick(() => {
     $('nav a#toggle').click(function () {
       $('ul').slideToggle(200, function () {
         // Animation complete.
       })
     })
    })
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

      let list = $('.list')[0]
      list.style.display = 'none'
    }
  }
}
</script>
