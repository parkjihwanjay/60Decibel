<template>
	<div class="profile">
		<navbar class="nav" />
		<div class="wrap">
			<prof-header class="header" />
			<prof-body2 class="body2" />
			<prof-body3 class="body3" />
			<prof-footer class="footer" />
		</div>
	</div>
</template>
<script>
import Navbar from '../components/homePage/Navbar.vue';
import ProfHeader from '../components/profilePage/ProfileHeader.vue';
import ProfBody2 from '../components/profilePage/ProfileBody2.vue';
import ProfBody3 from '../components/profilePage/ProfileBody3.vue';
import ProfFooter from '../components/profilePage/ProfileFooter.vue';

// import bus from '../utils/bus.js';
export default {
	components: {
		Navbar,
		ProfHeader,
		ProfBody2,
		ProfBody3,
		ProfFooter,
	},
	data() {
		return {
			check: 0,
		};
	},
	mounted() {
		this.$store.commit('SET_LOADING', false);
	},
};
</script>
<style scoped>
/* nav */

.nav /deep/ .navhead {
	padding: 0 1rem;
	padding-top: 1rem;
	border-bottom: none;
}
.nav /deep/ .navhead-icon:hover {
	background-color: transparent;
}
.nav /deep/ .fa-bars {
	color: rgb(255, 255, 255);
}
.nav /deep/ .navhead-brand-logo {
	content: url('../assets/home.png');
	width: 1.5rem;
	height: 1.5rem;
	margin-left: 0.6rem;
}

/* layout */
.profile {
	background: linear-gradient(-45deg, #ea5455, #feb692);
}

.header {
	background-color: transparent;
	width: 100%;
}
.body1 {
	background-color: white;
	border-bottom: 1px solid rgb(158, 158, 158);
	width: 100%;
}
.body2 {
	background-color: #ffffff;
	width: 100%;
}
.body3 {
	background: white;
	width: 100%;
	padding: 1rem auto;
}
.footer {
	background: white;
	padding: 1.5rem;
}
</style>
