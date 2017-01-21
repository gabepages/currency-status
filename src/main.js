// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from "vue-resource"
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App :data="conversionData"/>',
  components: { App },
  data(){
    return {
      conversionData: undefined
    }
  },
  created: function() {
    this.$http.get('http://api.fixer.io/latest?base=USD').then((response) => {
      this.$data.conversionData = response.body;
    }, (response) => {
      alert("error", response);
    });
  }
})
