<template>
	<div class="btns">
		<div class="wrap">
			<div class="btn">
				<router-link :to="{ name: 'survey-history' }">지난 설문 이력</router-link>
			</div>
			<div class="btn2">
				<router-link :to="{ name: 'profileupdate' }">프로필 작성</router-link>
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
};
</script>

<style scoped>
.btns {
	display: flex;
	justify-content: center;
	align-content: center;
}
.wrap {
	width: 600px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.btn,
.btn2 {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
	/* box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.308); */
	width: 9rem;
	height: 3rem;
	color: rgb(54, 54, 54);
	font-size: 1.1rem;
	font-weight: 700;
}
.btn2 {
	background: rgb(255, 182, 47);
}
</style>
