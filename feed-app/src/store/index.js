import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		likes: [0, 0],
		users: ['Mrs. Derringer', 'you'],
	},
	mutations: {
		increment(state, id) {
			state.likes = state.likes.map((x, i) => (i === id ? x + 1 : x))
		},
	},
	actions: {
		increment(context) {
			context.commit('increment')
		},
	},
})
