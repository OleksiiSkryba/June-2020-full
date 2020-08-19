PUT NAME OF THE COMPONENTS INTO THE main.js

like:
import Vue from 'vue'
import Events from './Events.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Events),
}).$mount('#app')
 