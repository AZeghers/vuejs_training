<template>
  <div id="app">
    <Event
      :date="new Date(new Date() - 3 * 24 * 60 * 60 * 1000)"
      displayName="Guy Pierce"
      image="https://semantic-ui.com/images/avatar/small/justen.jpg"
      :likes="likes[0]"
      @clickLike="addLike(0)"
      @clickProfile="profileClicked"
    >
      <!-- display: block -->
      says hi
      <router-link :to="{ name: 'Profile', params: { user: users[0] } }">{{ users[0] }}</router-link>
    </Event>
    <Event
      :date="new Date()"
      displayName="Agent Smith"
      image="https://semantic-ui.com/images/avatar/small/elliot.jpg"
      :likes="likes[1]"
      @clickLike="addLike(1)"
      @clickProfile="profileClicked"
    >
      <!-- display: block -->
      is now following
      <router-link :to="{ name: 'Profile', params: { user: users[1] } }">{{ users[1] }}</router-link>
    </Event>
  </div>
</template>

<script>
import Event from '../components/Event'
import { mapState } from 'vuex'

export default {
	name: 'FeedView',
	components: { Event },
	computed: mapState({
		likes: state => state.likes,
		users: state => state.users,
	}),
	methods: {
		addLike(id) {
			this.$store.commit('increment', id)
		},
		linkClicked() {
			console.log('Link clicked')
		},
		profileClicked() {
			console.log('User profile clicked')
		},
	},
}
</script>

<style>
#app {
	margin-left: 60px;
	margin-top: 60px;
}
</style>
