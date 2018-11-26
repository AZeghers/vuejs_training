// ext
import Vue from 'vue'
import 'es6-promise/auto'

// app
import App from './App.vue'

// int
import router from './router'
import store from './store/'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
