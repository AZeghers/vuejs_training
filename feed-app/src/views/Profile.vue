<template>
	<div id="app">
		<h1>Profile</h1>
		<h3>{{ user }}</h3>
	</div>
</template>

<script>
export default {
	name: 'Profile',
	props: {
		user: {
			type: String,
			required: true,
		},
	},
	data() {
		return {}
	},
}
</script>

<style>
#app {
	margin-left: 60px;
	margin-top: 60px;
}
</style>
