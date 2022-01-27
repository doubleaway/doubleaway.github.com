import Vue from 'vue'
import App from './App.vue'

[
  {"id":1,"comment":"새로운 Todo 1","state":0},
  {"id":2,"comment":"새로운 Todo 2","state":0},
];


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

