<template>
	<div class="container pt-5">
		<input type="text" placeholder="Name of the to added friend" v-model="nombreNuevoAmigos" @keyup.enter="agregarAmigos(nombreNuevoAmigos)" class="form-control mb-2" maxlength="30">
		<button class="btn btn-success btn-lg btn-block" @click="agregarAmigos(nombreNuevoAmigos)">
			Add Friend {{nombreNuevoAmigos}}
		</button>
		<h1 class="mt-5 text-success h4 text-center">
			The name of the new friend is: <span class="text-primary">{{nombreNuevoAmigos}}</span>
		</h1>
	</div>
</template>

<script type="text/javascript">
	import { mapState, mapMutations } from 'vuex'

	export default {
		name: "AgregarAmigos",
		data() {
			return {
				nombreNuevoAmigos: ''
			}
		},
		computed: {
			...mapState([
				'friends'
			])
		},
		methods: {
			...mapMutations([
				'agregarAmigos'
			])
		}
	}
</script>

<style type="text/css" scoped>
	
</style>