<template>
	<div class="body3">
		<div class="content4">
			<div class="txt-head">사회력</div>
			<!-- 흡연 -->
			<div class="profileinfo">
				<div class="profiletitle">음주습관</div>
				<div v-if="profile.drinking_per_week" class="profiledetail">
					일주일 {{ profile.drinking_per_week }}병
				</div>
			</div>
			<!-- 음주 -->
			<div class="profileinfo">
				<div class="profiletitle">흡연습관</div>
				<div v-if="`${profile.how_long_smoking}`" class="profiledetail">
					{{ profile.how_long_smoking }}년 /
				</div>
				<div v-if="profile.how_much_smoking" class="profiledetail2">
					일주일 {{ profile.how_much_smoking }}갑
				</div>
			</div>
			<!-- 직업 -->
			<div class="profileinfo">
				<div class="profiletitle">직업</div>
				<div v-if="profile.job" class="profiledetail">{{ profile.job }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['profile']),
	},
	// updated() {
	// 	this.$emit('body3');
	// },
};
</script>

<style scoped>
.txt-head {
	color: #397979;
	margin-bottom: 20px;
	font-size: 1.5rem;
	font-weight: 800;
}
.content4 {
	padding: 2rem;
	max-width: 700px;
	height: 210px;
	margin: 0 auto;
}
.profileinfo {
	font-size: 1.05rem;
	display: flex;
	line-height: 150%;
	padding-left: 2rem;
}
.profiletitle {
	color: rgb(80, 80, 80);
	font-weight: 800;
	width: 40%;
	border-right: 2px solid rgba(197, 197, 197, 0.507);
}
.profiledetail {
	padding-left: 3rem;
}
.button {
	color: white;
}
.profileplus {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 1rem auto;
}
</style>
