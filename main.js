import Vue from 'vue'
import App from './App.vue'
import Echart from './charts/components/Echart'
import FullScreen from 'vue-fullscreen'
import router from './router'
import './charts/view/vendor'

Vue.component(Echart.name, Echart)
Vue.use(FullScreen)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App)
})
