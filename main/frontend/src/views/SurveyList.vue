<template>
	<div class="survey-history">
		<Navbar />
		<ul>
			<router-link :to="`/stomach/${item.id}`" v-for="item in survey_history" :key="item.id">
				증상 : {{ item.symptom }} / <small>작성일 : {{ item.created_at }}</small>
				<br />
				<br />
			</router-link>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';
// import bus from '../utils/bus.js';
import Navbar from '../components/homePage/Navbar.vue';

export default {
	computed: {
		...mapState(['survey_history']),
	},
	mounted() {
		this.$store.commit('SET_LOADING', false);
		// bus.$emit('off:progress');
	},
	components: {
		Navbar,
	},
};
</script>

<style></style>
