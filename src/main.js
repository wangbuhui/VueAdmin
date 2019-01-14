import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import './theme/index.less';
import '@/assets/icons/iconfont.css'

Vue.config.productionTip = false

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
