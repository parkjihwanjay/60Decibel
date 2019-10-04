<template>
	<div class="section">
		<p class="question-header">증상의 지속시간</p>
		<div class="question-body">
			<v-expansion-panels v-model="expand" accordion class="expansion">
				<v-expansion-panel class="q1-2">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q1.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">통증이 얼마나 지속되나요?</p>
						<br />
						<div class="answers">
							<div v-for="item in duration" :key="item.id">
								<button
									value="lest_than_10m"
									@click="
										button_click('pain_duration', item);
										single_button_toggle();
									"
									class="answer animate fadeInRightBig three"
									:class="{ on: on }"
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
						Q2.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">통증이 주기적으로 있나요?</p>
						<br />
						<br />
						<br />
						<div class="answers">
							<div v-for="item in repeated" :key="item.id">
								<button
									value=item[1]
									@click="button_click('pain_repeated', item[0])"
									class="answer animate fadeInRightBig three"
								>
									{{item[0]}}
								</button>
								<br />
							</div>
						</div>
						<br />
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-1">
					<v-expansion-panel-header
						class="header animate fadeInDown two"
						v-if="survey_data.pain_repeated === '반복됩니다'"
					>
						&nbsp;&nbsp;Q2-1.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">반복되는 통증의 빈도는 어느정도 인가요?</p>
						<br />
						<br />
						<div class="pain-frequency animate fadeInRightBig three">
							&nbsp;&nbsp;통증의 빈도는
							<select class="select" v-model="survey_data.pain_how_often_day" name="job">
								<option value selected disabled hidden>선택</option>
									<option value="하루에">{{"하루에"}}</option>
									<option value="일주일에">{{"일주일에"}}</option>
							</select>

							<select class="select" v-model="survey_data.pain_how_often_many" name="job">
								<option value selected disabled hidden>선택</option>
	
									<option value="0-1회">{{"0-1회"}}</option>
									<option value="2-3회">{{"2-3회"}}</option>
									<option value="4-5회">{{"4-5회"}}</option>
									<option value="6회이상">{{"6회이상"}}</option>
			

							</select>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-2">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q3
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">증상 후 통증이 심화되나요?</p>
						<br />

						<div class="answers-box animate fadeInRightBig three">
							<div v-for="item in worse" :key="item.id">
								<button
									value="after meal"
									@click="button_click_multiple('factor', item)"
									class="answer-box"
								>
									{{item}}
								</button>
								<br />
							</div>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-3">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q4
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">기타 요인이 있나요?</p>
						<br />
						<br />
						<br />
						<br />
						<div class="answers">
							<div class="answer animate fadeInRightBig three">
								<input
									class="ans-txt"
									type="text"
									v-model="survey_data.other_factor"
									placeholder="여기에 입력해주세요"
								/>
							</div>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</div>

		<div class="buttons">
			<router-link :to="{ name: 'sec2' }">이전</router-link>
			<router-link :to="{ name: 'sec4' }" @click.native="send(survey_data)">다음</router-link>
		</div>
	</div>
</template>

<script>
import surveyMixin from '../../mixin/surveyMixin.js';

export default {
	mixins: [surveyMixin],
	data() {
		return {
			repeated:[["반복됩니다","True"],["단발성입니다","False"]],
			duration:['10분 미만', '10분-1시간', '1시간이상', '하루종일'],
			worse:['식사후 심화', '공복에 심화', '음주후 심화', '자세변화시 심화', '배뇨시 심화', '배변시 심화', '완화되는 중', '해당사항 없음'],
			on: false,
			off: true,
			expand: 0,
			survey_data: {
				factor: [],
				pain_repeated: '',
				pain_how_often_day: '',
				pain_how_often_many: '',
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
	padding: 0 1rem;
	/* padding-top: 1rem; */
}
.v-expansion-panel-header {
	font-weight: 700;
	font-size: 1.1rem;
	color: #125b7f;
}

.v-expansion-panel-content {
	height: 260px;
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
	line-height: 0.5em;
	width: 100%;
}
.answers {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 0.3em;
}
.answer-box {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #2592c9;
	font-size: 0.9rem;
	border-radius: 7px;
	width: 7rem;
	height: 2.7rem;
	margin: 0.1rem;

	color: rgb(255, 255, 255);
}

.answer {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #2592c9;
	border-radius: 7px;
	width: 13rem;
	height: 2.7rem;
	line-height: 0.2rem;

	color: rgb(255, 255, 255);
}
.answer input::placeholder {
	color: rgba(88, 88, 88, 0.5);
}
.ans {
	margin: 0 0.5rem;
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
	line-height: 0;
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
.select {
	width: 70px;
	height: 25px;
	border: 1px solid #125b7f;
	margin-right: 0.5rem;
}
.on {
	border: 3px solid seagreen;
}
</style>
