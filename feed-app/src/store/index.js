import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		events: [
			{ likes: 0, relatedUser: 'Mrs. Derringer' },
			{ likes: 0, relatedUser: 'Neo' },
		],
	},
	mutations: {
		addLike(state, id) {
			state.events = state.events.map(function(event, i) {
				if (i === id) {
					event.likes++
				}
				return event
			})
		},
	},
	actions: {
		addLike({ commit }, id) {
			commit('addLike', id)
		},
	},
})
