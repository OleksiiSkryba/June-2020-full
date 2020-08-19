import Vue from 'vue'
import Interpolation from './Interpolation.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Interpolation),
}).$mount('#app')
