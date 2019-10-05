<template>
	<div class="section">
		<p class="question-header">동반증상</p>
		<div class="question-body">
			<v-expansion-panels v-model="expand" accordion class="expansion">
				<v-expansion-panel class="q1-3">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q1.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content style="height:250px;" class="content animate fadeInUp one">
						<p class="question">
							소화기
							<span>(모두선택)</span>
						</p>
						<br />
						<div class="answers-box animate fadeInRightBig three">
							<div v-for="item in digestive" :key="item.id">
								<button 
									value="change of appetite"
									@click="button_click_multiple('associated_symptom_digestive', item)"
									class="answer animate fadeInRightBig three"
								>
									{{item}}
								</button>
								<br/>
							</div>
							
						</div>
						<br />
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-1">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q2.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">
							순환기/호흡기
							<span>(모두선택)</span>
						</p>
						<br />
						<br />
						<div class="answers-box animate fadeInRightBig three">
							<div v-for="item in res_cir" :key="item.id">
								<button
									value="chest pain"
									@click="button_click_multiple('associated_symptom_circulatory', item)"
									class="answer animate fadeInRightBig three"
								>
									{{item}}
								</button>
								<br/>
							</div>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-2">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q3.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">
							부인과
							<span>(모두선택)</span>
						</p>
						<br />
						<br />
						<div class="answers-box animate fadeInRightBig three">
							<div v-for="item in gynecology" :key="item.id">
								<button
									value="colporrhagia"
									@click="button_click_multiple('associated_symptom_gynecology', item)"
									class="answer animate fadeInRightBig three"
								>
									{{item}}
								</button>
								<br/>
							</div>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-3">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q4.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">
							전신증상
							<span>(모두선택)</span>
						</p>
						<br />
						<div class="answers-box animate fadeInRightBig three">
							<div v-for="item in whole_body" :key="item.id">
								<button
									value="fever"
									@click="button_click_multiple('associated_symptom_whole_body', item)"
									class="answer animate fadeInRightBig three"
								>
									{{item}}
								</button>
								<br />
							</div>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-1">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q5.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">
							비뇨기
							<span>(모두선택)</span>
						</p>
						<br />
						<br />
						<div class="answers-box animate fadeInRightBig three">
							<div v-for="item in urology" :key="item.id">
								<button
									value="painful urination"
									@click="button_click_multiple('associated_symptom_urinary', item)"
									class="answer animate fadeInRightBig three"
								>
									{{item}}
								</button>
								<br />
							</div>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-1">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q6
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">그외 동반되는 증상이 있나요?</p>
						<br />
						<br />
						<div class="answers">
							<div class="answer-box animate fadeInRightBig three">
								<input
									class="ans-txt"
									v-model="survey_data.associated_symptom_others"
									placeholder="여기에 입력해주세요"
								/>
							</div>
						</div>
						<br />
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</div>
		<div class="buttons">
			<router-link :to="{ name: 'sec4' }">이전</router-link>
			<router-link :to="{ name: 'sec6' }" @click.native="send(survey_data)">다음</router-link>
		</div>
	</div>
</template>

<script>
import surveyMixin from '../../mixin/surveyMixin.js';

export default {
	mixins: [surveyMixin],
	data() {
		return {
			digestive:['식욕감소', '구역질', '구토', '토혈', '복부팽만', '복부종괴', '변비', '설사', '혈변/흑변', '지방변', '황달', '해당없음'],
			res_cir:['가슴통증', '호흡곤란', '기침', '콧물', '해당없음'],
			gynecology:['질출혈', '질분비물', '생리변화', '임신가능성', '해당없음'],
			whole_body:['발열', '오한', '피로', '체중변화', '식은땀', '수면곤란', '두통', '해당없음'],
			urology:['배뇨통', '소변량변화', '혈뇨', '거품뇨', '잦은 소변', '해당없음'],
			multipleChoice: [
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
			expand: 0,
			survey_data: {
				associated_symptom_digestive: [],
				associated_symptom_circulatory: [],
				associated_symptom_gynecology: [],
				associated_symptom_urinary: [],
				associated_symptom_whole_body: [],
			},
		};
	},
};
</script>
<style scoped>
.question-header {
	margin-top: 2rem;
	padding-left: 2.5rem;
	font-size: 1.7rem;
}
/* question body */
.v-expansion-panels {
	width: 100%;
	height: 80%;
	padding: 0 1rem;
	padding-top: 1rem;
}
.v-expansion-panel-header {
	font-weight: 700;
	font-size: 1.1rem;
	color: #125b7f;
}
.v-expansion-panel-content {
	height: 220px;
}
.section {
	width: 100%;
	height: 100vh;
}

/* 1차 수정 01:07 */

.question {
	font-size: 1.2rem;
	line-height: 1.5rem;
}
.answers-box {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
}
.answers {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 0.5em;
}
.answer-box {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #2592c9;
	font-size: 0.9rem;
	border-radius: 7px;
	width: 13rem;
	height: 2.7rem;
	margin: 0.1rem 0.1rem;

	color: rgb(255, 255, 255);
}

.answer {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #2592c9;
	border-radius: 7px;
	width: 5.5rem;
	height: 2.7rem;
	margin: 0.1rem 0.1rem;

	color: rgb(255, 255, 255);
}
.answer input::placeholder {
	color: rgba(88, 88, 88, 0.5);
}
.ans {
	margin: 0 0.1rem;
}
.ans-txt {
	width: 100%;
	height: 100%;
	border: #1985bb solid 1px;
	border-radius: 7px;
	outline: none;
	background-color: white;
	padding-left: 1rem;
	color: rgb(56, 56, 56);
}
/* question footer */
.buttons {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	bottom: 0;
	box-shadow: 1px 0.8px 3px -0.5px rgb(128, 128, 128);
	background-color: #125b7f;
	width: 100%;
	height: 2.8rem;
	padding: 0 2.05rem;
}
a {
	color: white;
}
.blank {
	visibility: hidden;
}
span {
	font-size: 0.9rem;
	color: #125b7f;
}
button:focus {
	background-color: #055075;
	outline: none;
}
.animate {
	-webkit-animation-duration: 0.8s;
	animation-duration: 0.8s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
}
.one {
	-webkit-animation-delay: 0.2s;
	-moz-animation-delay: 0.2s;
	animation-delay: 0.2s;
}
.two {
	-webkit-animation-delay: 0.3s;
	-moz-animation-delay: 0.3s;
	animation-delay: 0.3s;
}
.three {
	-webkit-animation-delay: 0.35s;
	-moz-animation-delay: 0.35s;
	animation-delay: 0.35s;
}
.four {
	-webkit-animation-delay: 0.4s;
	-moz-animation-delay: 0.4s;
	animation-delay: 0.4s;
}
.five {
	-webkit-animation-delay: 0.45s;
	-moz-animation-delay: 0.45s;
	animation-delay: 0.45s;
}
.six {
	-webkit-animation-delay: 0.5s;
	-moz-animation-delay: 0.5s;
	animation-delay: 0.5s;
}

.animate {
	-webkit-animation-duration: 0.8s;
	animation-duration: 0.8s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
}
.one {
	-webkit-animation-delay: 0.2s;
	-moz-animation-delay: 0.2s;
	animation-delay: 0.2s;
}
.two {
	-webkit-animation-delay: 0.3s;
	-moz-animation-delay: 0.3s;
	animation-delay: 0.3s;
}
.three {
	-webkit-animation-delay: 0.35s;
	-moz-animation-delay: 0.35s;
	animation-delay: 0.35s;
}
.four {
	-webkit-animation-delay: 0.4s;
	-moz-animation-delay: 0.4s;
	animation-delay: 0.4s;
}
.five {
	-webkit-animation-delay: 0.45s;
	-moz-animation-delay: 0.45s;
	animation-delay: 0.45s;
}

@-webkit-keyframes fadeInUp {
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: none;
		transform: none;
	}
}
@keyframes fadeInUp {
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: none;
		transform: none;
	}
}
.fadeInUp {
	-webkit-animation-name: fadeInUp;
	animation-name: fadeInUp;
}
.fadeInDown {
	-webkit-animation-name: fadeInDown;
	animation-name: fadeInDown;
}
@-webkit-keyframes fadeInDown {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: none;
		transform: none;
	}
}
@keyframes fadeInDown {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: none;
		transform: none;
	}
}
.fadeInRightBig {
	-webkit-animation-name: fadeInRightBig;
	animation-name: fadeInRightBig;
}
@-webkit-keyframes fadeInRightBig {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(2000px, 0, 0);
		transform: translate3d(2000px, 0, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: none;
		transform: none;
	}
}
@keyframes fadeInRightBig {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(2000px, 0, 0);
		transform: translate3d(2000px, 0, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: none;
		transform: none;
	}
}
.clicked {
	background-color: #055075;
	outline: none;
}
</style>
