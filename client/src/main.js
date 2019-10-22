import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './http';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import jwt_decode from "jwt-decode";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios=axios;
Vue.prototype.$jwt_decode=jwt_decode;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
