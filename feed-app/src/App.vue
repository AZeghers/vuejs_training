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
			says hi to
			<a @click="linkClicked">Mrs. Derring</a>
		</Event>
		<Event
			:date="new Date()"
			displayName="Agent Smith"
			image="https://semantic-ui.com/images/avatar/small/elliot.jpg"
			:likes="likes[1]"
			@clickLike="addLike(1)"
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
			likes: [0, 0],
		}
	},
	methods: {
		addLike(id) {
			// let tmp = [...this.likes]
			// tmp[id]++
			let tmp = this.likes.map((x, i) => (i === id ? x + 1 : x))
			this.likes = tmp
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
