<template>
	<div class="root">
		<!-- <Navbar /> -->
		<spinner :loading="loading" margin="200px"></spinner>
		<router-view />
	</div>
</template>

<script>
// import Navbar from "./components/homePage/Navbar.vue";
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
	name: 'App',
	components: {
		// Navbar
		Spinner,
	},
	data() {
		return {
			loading: false,
		};
	},
	methods: {
		onProgress() {
			console.log('시작');
			this.loading = true;
		},
		offProgress() {
			console.log('종료');
			this.loading = false;
		},
	},
	created() {
		bus.$on('on:progress', this.onProgress);
		bus.$on('off:progress', this.offProgress);
	},
};
</script>
<style>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

* {
	font-family: 'NanumSquare', sans-serif;
}
a {
	text-decoration: none;
}
</style>
