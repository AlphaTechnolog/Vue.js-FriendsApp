<template>
	<div>
		<div class="container pt-3">
			<h1 class="text-primary text-center">Delete Friends</h1>
		</div>
		<div id="app">
			<EliminarAmigos/>
		</div>
	</div>
</template>

<script type="text/javascript">
	import EliminarAmigos from '@/components/Application/EliminarAmigos.vue';

	export default {
		name: "Delete",
		components: {
			EliminarAmigos
		}
	}
</script>

<style type="text/css" scoped>
	
</style>