<template>
  <div id="app">
    <h1>Profile</h1>
    <h3 v-text="profileUser"/>
  </div>
</template>

<script>
export default {
	name: 'Profile',
	props: {
		profileUser: {
			type: String,
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
