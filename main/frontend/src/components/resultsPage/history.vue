<template>
	<div class="cont">
		<div class="head">사회력 과거력</div>
		<div class="underline"></div>
		<br />
		<div class="main">
			<p v-show="!profile.had_checkup">
				{{ profile.had_checkup_true }} 전에 건강검진을 받았습니다.
			</p>
			<p>이전에 {{ profile.diagnosed_disease }} 을 진단받았습니다.</p>
			<p v-show="profile.taking_medicine">{{ profile.what_medicine }}을 복용중입니다.</p>
			<p>
				<span class="s">{{ profile.family_history }}</span
				>와(과) 같은 가족력이 있습니다.
			</p>
			<p v-show="profile.drinking">매주 {{ profile.drinking_per_week }}병의 술을 마십니다.</p>
			<p v-show="profile.smoking">
				담배를 {{ profile.how_long_smoking }}년 동안 {{ profile.how_long_smoking }}갑씩 피우고
				있습니다.
			</p>
			<p v-show="profile.relevant_data">기타 특이사항 : {{ profile.relevant_data }}</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['profile']),
	},
};
</script>
<style scoped>
p {
	margin-bottom: 10px;
}
.cont {
	padding: 0 1.5rem;
	padding-top: 20px;
}
.head {
	width: 200px;
	font-size: 1.5rem;
	font-weight: 700;
}
.underline {
	border-bottom: 1px solid rgb(133, 133, 133);
	padding-bottom: 0.5rem;
	width: 150px;
}
.main {
	line-height: 1.3rem;
	display: inline;
}
</style>
