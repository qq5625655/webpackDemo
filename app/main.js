// main.js
import App from './App';
import Vue from 'vue';
import router from '../router/index.js'
import store from '../store/index.js'


new Vue({
  el:'#root',
  router,
  store,
  components: {App},
  template:'<App/>'
})
