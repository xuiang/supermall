import { createApp } from 'vue'
import router from 'router'
import App from './App.vue'

new createApp({
  el: '#app',
  router,
  render: h => h(App)
})
