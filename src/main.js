import Vue from 'vue'
import App from './components/desktop/App.vue'
import AppMobile from './components/mobile/App.vue'
import './utils/vueHelpers'

let screenWidth = document.documentElement.clientWidth
let screenHeight = document.documentElement.clientHeight
let rootComponent = App
// phones, tablets
if (screenWidth <= 1024 && screenHeight > screenWidth) {
    rootComponent = AppMobile
}

new Vue({
  el: '#app',
  render: (h) => h(rootComponent)
})
