<template>
	<div class="survey-history">
		<Navbar />
		<ul>
			<router-link :to="`/stomach/${item._id}`" v-for="item in survey_history" :key="item.id">
				증상 : 복통 / <small>작성일 : {{ item.createdAt }}</small>
				<br />
				<br />
			</router-link>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from '../components/homePage/Navbar.vue';

export default {
	computed: {
		...mapState(['survey_history']),
	},
	mounted() {
		this.$store.commit('SET_LOADING', false);
	},
	components: {
		Navbar,
	},
};
</script>

<style></style>
