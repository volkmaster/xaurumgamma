import Vue from 'vue'
import App from './components/App.vue'
import AppMobile from './components/AppMobile.vue'
import './utils/vueHelpers'

let screenWidth = document.documentElement.clientWidth
let rootComponent = screenWidth < 1280 ? AppMobile : App

new Vue({
  el: '#app',
  render: (h) => h(rootComponent)
})
