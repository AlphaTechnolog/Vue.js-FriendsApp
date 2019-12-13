<template>
	<div>
		<div class="container pt-3">
			<h1 class="text-primary text-center">Add Friends</h1>
		</div>
		<div id="app">
			<AgregarAmigos/>
		</div>
	</div>
</template>

<script type="text/javascript">
	import AgregarAmigos from '@/components/Application/AgregarAmigos.vue';

	export default {
		name: "Agregar",
		components: {
			AgregarAmigos
		}
	}
</script>

<style type="text/css" scoped>
	
</style>