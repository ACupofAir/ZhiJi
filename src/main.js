import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//
// Vue.use(ElementUI);
//
// new Vue({
//     el: '#app',
//     render: h => h(App)
// });

createApp(App).use(router).mount('#app')

