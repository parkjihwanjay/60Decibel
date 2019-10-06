<template>
	<div class="profile">
		<navbar class="nav" />
		<ProfUpload class="body" />
	</div>
</template>
<script>
import Navbar from '../components/homePage/Navbar.vue';
import ProfUpload from '../components/profileUploadPage/Container.vue';

export default {
	components: {
		Navbar,
		ProfUpload,
	},
	mounted() {
		this.$store.commit('SET_LOADING', false);
	},
};
</script>
<style scoped>
.body1 {
	background-color: white;
	border-bottom: 1px solid rgb(158, 158, 158);
	width: 100%;
	height: 10rem;
}
.body2 {
	background-color: #ebebeb;
	width: 100%;
	height: 14rem;
}
.body3 {
	background: white;
	width: 100%;
	height: 14rem;
}
</style>
