<template>
	<div class="nav">
		<div class="navhead">
			<div class="navhead-brand">
				<router-link :to="{ name: 'home' }">
					<img class="navhead-brand-logo" src="../../assets/logo.png" />
				</router-link>
			</div>
			<div class="navhead-btns">
				<div class="navhead-start" v-if="this.$store.state.isLogin === 'true'">
					<router-link to="/survey">
						<div class="start-btn">시작하기</div>
					</router-link>
				</div>
				<div class="navhead-icon" @click="expanded = !expanded">
					<i class="fas fa-bars fa-lg"></i>
				</div>
			</div>
		</div>
		<transition-expand v-if="this.$store.state.isLogin === 'true'">
			<div class="navexpand" v-if="expanded">
				<a class="nav-menu">
					<router-link to="/profiles">{{ this.$store.state.userInfo }}님 프로필보기</router-link>
				</a>
				<br />
				<a class="nav-menu">
					<a @click.prevent="onClickLogout">로그아웃</a>
				</a>
				<br />
				<a class="nav-menu">
					<router-link to="/about">About 60dB</router-link>
				</a>
			</div>
		</transition-expand>

		<transition-expand v-else>
			<div class="navexpand" v-if="expanded">
				<a class="nav-menu">
					<router-link to="/login">로그인</router-link>
				</a>
				<br />
				<a class="nav-menu">
					<router-link to="/signup">회원가입</router-link>
				</a>
				<br />
				<a class="nav-menu">
					<router-link to="/about">About 60dB</router-link>
				</a>
			</div>
		</transition-expand>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TransitionExpand from './NavEffect.vue';
import { store } from '../../store/store.js';
export default {
	name: `Nav`,
	components: {
		TransitionExpand,
	},
	data() {
		return {
			expanded: false,
		};
	},
	computed: {
		...mapState(['isLogin', 'isLoginError']),
	},
	methods: {
		...mapActions(['getMemberInfo', 'logout']),
		onClickLogout() {
			// logout 변이 실행 후 리다이렉트
			this.$store.dispatch('logout');
			// .then(() => this.$router.push("/"));
		},
	},
};
</script>

<style scope>
/* nav bar */
a:link {
	color: rgb(53, 53, 53);
}
a:visited {
	color: rgb(53, 53, 53);
}
.navhead {
	display: flex;
	background-color: transparent;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid rgba(192, 192, 192, 0.562);
	padding: 0 0.8rem;
	height: 8.5vh;
}
.navhead-brand-logo {
	width: 10rem;
	height: 3rem;
	vertical-align: middle;
}
.navhead-btns {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 10rem;
}
.start-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	width: 5.2rem;
	height: 32px;
	border-radius: 5px;
	padding: 1px;
	margin-right: 1rem;
	background: linear-gradient(135deg, #94e2f0, #185dac);
	color: white;
	font-size: 1rem;
	font-weight: 700;
}
.navhead-icon {
	display: flex;
	justify-content: center;
	background-color: transparent;
	border: 1px solid rgba(128, 128, 128, 0.24);
	border-radius: 3px;
	width: 44px;
	height: 34px;
	padding: 0.1rem;
}
.navhead-icon:hover {
	background-color: rgb(233, 232, 232);
	transition: 0.4s;
}
.navhead-icon:focus {
	background-color: rgb(233, 232, 232);
}
.fa-bars {
	color: gray;
	margin: 0.25rem auto;
	font-size: 1.5rem;
}
.navexpand {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-bottom: 1px solid rgba(192, 192, 192, 0.63);
	color: rgb(77, 77, 77);
	line-height: 1px;
	font-weight: 500;
}
.nav-menu {
	font-size: 0.9rem;
	width: 100%;
	padding: 20px 20px;
}
.expand-enter-active,
.expand-leave-active {
	transition-property: opacity, height;
}
.expand-enter,
.expand-leave-to {
	opacity: 0;
}
@media (min-width: 768px) {
	.navhead {
		margin: 0 auto;
		border-bottom: none;
	}
	.nav {
		width: 700px;
		margin: 0 auto;
	}
	.navexpand {
		border-bottom: none;
	}
}
</style>
