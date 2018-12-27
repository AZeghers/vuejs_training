// ext
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import 'es6-promise/auto'

// app
import App from './App.vue'

// int
import router from './router'
import store from './store/'

Vue.config.productionTip = false

Vue.use(VueI18n)

const messages = {
	en: {
		message: {
			follow: 'is now following',
			hello: 'says hi to',
			like: 'no likes | 1 like | {count} likes',
		},
	},
	fr: {
		message: {
			follow: 'suit maintenant',
			hello: 'dit bonjour à',
			like: "pas de j'aime | 1 j'aime | {count} j'aime",
		},
	},
}

const i18n = new VueI18n({
	locale: 'en',
	messages,
})

new Vue({
	i18n,
	router,
	store,
	render: h => h(App),
}).$mount('#app')
