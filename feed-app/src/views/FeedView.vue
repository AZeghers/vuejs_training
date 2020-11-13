<template>
  <div id="app">
    <Event
      :date="new Date(new Date() - 3 * 24 * 60 * 60 * 1000)"
      displayName="Guy Pierce"
      image="https://semantic-ui.com/images/avatar/small/justen.jpg"
      :likes="events[0].likes"
      @clickLike="addLike(0)"
      @clickProfile="profileClicked"
    >
      <!-- display: block -->
      {{ $t('message.hello') }}
      <router-link
        :to="{ name: 'Profile', params: { profileUser: events[0].relatedUser } }"
      >{{ events[0].relatedUser }}</router-link>
    </Event>
    <Event
      :date="new Date()"
      displayName="Agent Smith"
      image="https://semantic-ui.com/images/avatar/small/elliot.jpg"
      :likes="events[1].likes"
      @clickLike="addLike(1)"
      @clickProfile="profileClicked"
    >
      <!-- display: block -->
      {{ $t('message.follow') }}
      <router-link
        :to="{ name: 'Profile', params: { profileUser: events[1].relatedUser } }"
      >{{ events[1].relatedUser }}</router-link>
    </Event>
  </div>
</template>

<script>
import Event from '../components/Event'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'FeedView',
	components: { Event },
	computed: mapState(['events']),
	methods: {
		...mapActions(['addLike']),
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
