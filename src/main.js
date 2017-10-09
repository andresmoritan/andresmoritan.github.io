// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Icon from 'vue-awesome/components/Icon'
Icon.register({
  fab_linkedin: {
    width: 448,
    height: 512,
    d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
  },
  fab_twitter: {
    width: 512,
    height: 512,
    d: 'M443.8 159.7c.3 4.2.3 8.4.3 12.6 0 128.1-97.5 275.7-275.7 275.7-54.9 0-105.9-15.9-148.8-43.5 7.8.9 15.3 1.2 23.4 1.2 45.3 0 87-15.3 120.3-41.4-42.6-.9-78.3-28.8-90.6-67.2 6 .9 12 1.5 18.3 1.5 8.7 0 17.4-1.2 25.5-3.3-44.4-9-77.7-48-77.7-95.1V199c12.9 7.2 27.9 11.7 43.8 12.3-26.1-17.4-43.2-47.1-43.2-80.7 0-18 4.8-34.5 13.2-48.9 47.7 58.8 119.4 97.2 199.8 101.4-1.5-7.2-2.4-14.7-2.4-22.2 0-53.4 43.2-96.9 96.9-96.9 27.9 0 53.1 11.7 70.8 30.6 21.9-4.2 42.9-12.3 61.5-23.4-7.2 22.5-22.5 41.4-42.6 53.4 19.5-2.1 38.4-7.5 55.8-15-13.2 19.2-29.7 36.3-48.6 50.1z'
  }
})
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
