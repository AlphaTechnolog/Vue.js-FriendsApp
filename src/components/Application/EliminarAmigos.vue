<template>
	<div class="container pt-5">
		<ul class="list-group">
			<h1 v-if="friends.length === 0" class="text-center text-danger">
				¡There are no friends created!
			</h1>
			<li v-for="(item, index) of friends" class="list-group-item d-flex justify-content-between align-items-center">
				{{index+1}} - {{item}}
				<button class="btn btn-danger" @click="eliminarAmigos(item)">
					Delete {{item}}
				</button>
			</li>
  		</ul>
  		<button v-if="friends.length !== 0" @click="eliminarTodos" class="btn btn-danger mt-2 btn-lg btn-block">
  			Delete All Friends
  		</button>
	</div>
</template>

<script type="text/javascript">
	import { mapState, mapMutations } from 'vuex'

	export default {
		name: "EliminarAmigos",
		computed: {
			...mapState([
				'friends'
			])
		},
		methods: {
			...mapMutations([
				'eliminarAmigos',
				'eliminarTodos'
			])
		}
	}
</script>

<style type="text/css" scoped>
	
</style>