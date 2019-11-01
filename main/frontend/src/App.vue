<template>
	<div class="root">
		<spinner margin="200px"></spinner>
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
