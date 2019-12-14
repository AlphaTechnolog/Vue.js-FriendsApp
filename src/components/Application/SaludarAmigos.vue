<template>
	<div class="container pt-5">
		<button v-if="friends.length !== 0" class="btn btn-warning btn-lg btn-block" @click="saludarAmigos">
			Greet All Friends
		</button>
		<div class="mt-3">
			<h1 v-if="friends.length === 0" class="text-center text-danger">
				¡There are no friends created!
			</h1>
			<li v-for="(item, index) of friends" class="list-group-item d-flex justify-content-between align-items-center">
				{{index+1}} - {{item}}
			</li>
		</div>
	</div>
</template>

<script type="text/javascript">
	import { mapState, mapMutations } from 'vuex';

	export default {
		name: "SaludarAmigos",
		computed: {
			...mapState([
				'friends'
			])
		},
		methods: {
			...mapMutations([
				'saludarAmigos'
			])
		}
	}
</script>

<style type="text/css" scoped>
	
</style>