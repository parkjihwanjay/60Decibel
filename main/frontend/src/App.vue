<template>
	<div class="root">
		<spinner :loading="loading" margin="200px"></spinner>
		<router-view />
	</div>
</template>

<script>
// import Navbar from "./components/homePage/Navbar.vue";
import Spinner from './components/Spinner.vue';
export default {
	name: 'App',
	components: {
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
