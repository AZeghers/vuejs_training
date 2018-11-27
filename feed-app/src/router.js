import Vue from 'vue'
import Router from 'vue-router'
import FeedView from './views/FeedView.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'FeedView',
			component: FeedView,
		},
		{
			path: '/profile/',
			name: 'Profile',
			component: Profile,
			props: true,
		},
	],
})
