<template>
	<div class="cont">
		<div class="head">동반증상</div>
		<div class="main">
			<br />
			<p>소화기와 관련하여 {{ associated_symptom_digestive }}와 같은 동반증상이 있습니다.</p>

			<p>
				(순환기/호흡기)와 관련하여 {{ associated_symptom_circulatory }}와 같은 동반증상이 있습니다.
			</p>

			<p>부인과와 관련하여 {{ associated_symptom_gynecology }}</p>

			<p>전신과 관련하여 {{ associated_symptom_whole_body }}와 같은 동반증상이 있습니다.</p>

			<p>비뇨기와 관련하여 {{ associated_symptom_urinary }}와 같은 동반증상이 있습니다.</p>

			<p>그 외 {{ associated_symptom_others }}와 같은 동반증상이 있습니다.</p>

			<p>통증이 {{ factor }}와 같은 상황에 심해지거나 완화됩니다.</p>

			<p>그 외 {{ stomach.other_factor }}와 같은 상황에도 통증이 심해지거나 완화됩니다.</p>

			<p>복부에 관한 과거이력 : {{ abdomen_relevant }}</p>
		</div>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
// import { store } from "../../store/store.js";
export default {
	computed: {
		...mapState(['stomach']),
		// associated_symptom_digestive: function() {
		// 	return this.$store.state.stomach.associated_symptom_digestive.slice(1, -1);
		// },
		// associated_symptom_circulatory: function() {
		// 	return this.$store.state.stomach.associated_symptom_circulatory.slice(1, -1);
		// },
		// associated_symptom_gynecology: function() {
		// 	return this.$store.state.stomach.associated_symptom_gynecology.slice(1, -1);
		// },
		// associated_symptom_whole_body: function() {
		// 	return this.$store.state.stomach.associated_symptom_whole_body.slice(1, -1);
		// },
		// associated_symptom_urinary: function() {
		// 	return this.$store.state.stomach.associated_symptom_urinary.slice(1, -1);
		// },
		// associated_symptom_others: function() {
		// 	return this.$store.state.stomach.associated_symptom_others.slice(1, -1);
		// },
		// factor: function() {
		// 	return this.$store.state.stomach.factor.slice(1, -1);
		// },
		// abdomen_relevant: function() {
		// 	return this.$store.state.stomach.abdomen_relevant.slice(1, -1);
		// },
	},
	created() {
		this.associated_symptom_digestive = this.$store.state.stomach.associated_symptom_digestive.slice(
			1,
			-1,
		);
	},
	data() {
		return {
			associated_symptom_digestive: '',
			associated_symptom_circulatory: '',
			associated_symptom_gynecology: '',
			associated_symptom_whole_body: '',
			associated_symptom_urinary: '',
			associated_symptom_others: '',
			factor: '',
			abdomen_relevant: '',
		};
	},
};
</script>
<style scoped>
.sick {
	margin-top: 20px;
}
p {
	margin-bottom: 10px;
}
.cont {
	padding: 0 1.5rem;
	padding-top: 20px;
}
.head {
	border-bottom: 1px solid rgb(133, 133, 133);
	padding-bottom: 0.5rem;
	width: 100px;
	font-size: 1.5rem;
	font-weight: 700;
}
.main {
	line-height: 1.3rem;
	display: inline;
}
</style>
