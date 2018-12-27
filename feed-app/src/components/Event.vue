<template>
	<div class="ui feed">
		<div class="event">
			<div class="label">
				<img
					:src="image"
					@click="$emit('clickProfile')"
				/>
			</div>
			<div class="content">
				<div class="summary">
					<a
						class="user"
						@click="$emit('clickProfile')"
						v-text="displayName"
					/>
					<slot></slot>
					<div
						class="date"
						v-text="datefy(date)"
					/>
				</div>
				<div
					class="meta"
					@click="$emit('clickLike')"
				>
					<a class="like">
						<i class="like icon" />
						{{ $tc('message.like', likes, {count: likes})}}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import fr from 'javascript-time-ago/locale/fr'

TimeAgo.addLocale(en)
TimeAgo.addLocale(fr)
const timeAgo = new TimeAgo('en-US')

export default {
	name: 'Event',
	props: {
		date: {
			type: Date,
			required: true,
		},
		displayName: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		likes: {
			type: Number,
			required: true,
		},
	},
	methods: {
		datefy(date) {
			return timeAgo.format(date)
		},
	},
}
</script>

<style scoped>
img {
	cursor: pointer;
}
</style>
