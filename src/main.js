import Vue from 'vue'
import 'jquery.waitForImages'
import App from './components/desktop/App.vue'
import AppMobile from './components/mobile/App.vue'
import './utils/vueHelpers'

let screenWidth = document.documentElement.clientWidth
let rootComponent = screenWidth < 1280 ? AppMobile : App

new Vue({
  el: '#app',
  render: (h) => h(rootComponent)
})
