<template>
	<div id="app">
		<Event
			:date="new Date(new Date() - 3 * 24 * 60 * 60 * 1000)"
			displayName="Guy Pierce"
			image="https://semantic-ui.com/images/avatar/small/justen.jpg"
			:likes="301"
			@clickLike="likeClicked"
			@clickProfile="profileClicked"
		>
			says hi to
			<a @click="linkClicked">Mrs. Derring</a>
		</Event>
		<Event
			:date="new Date()"
			displayName="Agent Smith"
			image="https://semantic-ui.com/images/avatar/small/elliot.jpg"
			:likes="1"
			@clickLike="likeClicked"
			@clickProfile="profileClicked"
		>
			is now following
			<a @click="linkClicked">you</a>
		</Event>
	</div>
</template>

<script>
import Event from './components/Event'

export default {
	name: 'FeedView',
	components: { Event },
	data() {
		return {
			message: '',
		}
	},
	methods: {
		likeClicked() {
			console.log('Like toggled')
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
