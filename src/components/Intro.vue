<template>
	<div>
		<div id="app" class="mt-4">
			<h1 class="text-center text-primary title">
				Friends App
			</h1>
			<hr>
			<h3 class="text-left text-info question">What is friends app?</h3>
			<p class="mt-2">
				Friends App, is a very simple application created in <a target="_blank" href="https:/vuejs.org">Vue.js</a>, Friends App aims to help remind people who are their friends, friends are not often easy to remember, well, there are people who have many contacts, but do not know who to talk to.
			</p>
			<h3 class="text-left text-info question">What is the Friends App for?</h3>
			<p class="mt-2">
				Friends App serves (as mentioned above) to be able to remember more easily the friends you want to contact more quickly.
			</p>
			<h3 class="text-left text-info question">How Start?</h3>
			<p>
				To start go to one next links:
			</p>
			<div class="container">
				<router-link class="btn btn-warning btn-lg btn-block" to="/saludarAmigos">Greet Friends</router-link>
				<router-link class="btn btn-success btn-lg btn-block" to="/agregarAmigos">Add Friends</router-link>
				<router-link class="btn btn-danger btn-lg btn-block" to="/eliminarAmigos">Delete Friends</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "Intro"
	}
</script>

<style type="text/css" scoped>
	h1.title, h3.question {
		text-transform: uppercase;
	}
</style>