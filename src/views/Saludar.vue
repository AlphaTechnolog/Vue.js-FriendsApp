<template>
	<div>
		<div class="container pt-3">
			<h1 class="text-primary text-center">Greet Friends</h1>
		</div>
		<div id="app">
			<SaludarAmigos/>
		</div>
	</div>
</template>

<script type="text/javascript">
	import SaludarAmigos from '@/components/Application/SaludarAmigos.vue';

	export default {
		name: "Saludar",
		components: {
			SaludarAmigos
		}
	}
</script>

<style type="text/css" scoped>
	
</style>