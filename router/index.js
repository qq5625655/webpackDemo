import Router from "vue-router"
import Vue from 'vue';
Vue.use(Router)
import index from '../app/test.vue';
// import index from "../pages/index.vue";
// import unauthorized from "../components/common/unauthorized.vue";
// import noPath from "../components/common/404.vue";

export default new Router({
	mode:"history",
	routes:[
  {
    path: "/",
    name: "首页",
    redirect: "/index",
  },
  {
    path:'/index',
    name:'index',
    component: index,
  },
 
	],
})