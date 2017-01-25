// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Currency from "./components/Currency"
import VueRouter from "vue-router"
import VueResource from "vue-resource"

Vue.use(VueResource)
Vue.use(VueRouter)


const routes = [
  {path: '', component: Currency},
  {path: '/:id', component: Currency}
]

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes
   // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app" class='container'>
    <router-view></router-view>
  </div>`

}).$mount('#app')
