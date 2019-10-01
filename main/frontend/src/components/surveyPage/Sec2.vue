<template>
	<div class="section">
		<p class="question-header">증상의 위치</p>
		<div class="question-body">
			<v-expansion-panels v-model="expand" accordion class="expansion">
				<v-expansion-panel class="q1-1">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q1.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">배의 어느 부위가 아픈가요?</p>
						<br />

						<div class="answers-box animate fadeInRightBig three">
							<button
								value="whole abdomen"
								@click="button_click_multiple('symptom_location', '복부전체')"
								class="answer-box"
							>
								복부전체
							</button>

							<br />

							<button
								value="sternal"
								@click="button_click_multiple('symptom_location', '명치부위')"
								class="answer-box"
							>
								명치부위
							</button>

							<br />

							<button
								value="sternal"
								@click="button_click_multiple('symptom_location', '배꼽부위')"
								class="answer-box"
							>
								배꼽부위
							</button>

							<br />

							<button
								value="sternal"
								@click="button_click_multiple('symptom_location', '옆구리')"
								class="answer-box"
							>
								옆구리
							</button>

							<br />

							<button
								value="LUQ"
								@click="button_click_multiple('symptom_location', '왼쪽 위')"
								class="answer-box"
							>
								왼쪽 위
							</button>

							<br />

							<button
								value="LLQ"
								@click="button_click_multiple('symptom_location', '오른쪽 위')"
								class="answer-box"
							>
								오른쪽 위
							</button>

							<br />

							<button
								value="RUQ"
								@click="button_click_multiple('symptom_location', '왼쪽 아래')"
								class="answer-box"
							>
								왼쪽 아래
							</button>

							<br />

							<button
								value="RLQ"
								@click="button_click_multiple('symptom_location', '오른쪽 아래')"
								class="answer-box"
							>
								오른쪽 아래
							</button>

							<!-- 인우 : 뭔지 모르겠습니다.... -->
							<!-- <button
                value="RLQ"
                @click="button_click_multiple('symptom_location', '오른쪽 아래')"
                class="answer-box blank"
              >오른쪽 아래</button>-->
						</div>
						<br />
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-2">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q2.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">아픈 부위가 이동하나요?</p>
						<br />
						<br />
						<div class="answers">
							<button
								value="True"
								@click="button_click('location_move', '예')"
								class="answerTF animate fadeInRightBig three"
							>
								예
							</button>

							<br />

							<button
								value="False"
								@click="button_click('location_move', '아니오')"
								class="answerTF animate fadeInRightBig three"
							>
								아니오
							</button>
						</div>
						<br />
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-3">
					<v-expansion-panel-header
						class="header animate fadeInDown two"
						v-if="survey_data.location_move === '예'"
					>
						&nbsp;&nbsp;Q2-1.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">아픈 부위가 어떻게 이동하나요?</p>
						<br />
						<br />
						<div class="answers">
							<div class="answer animate fadeInRightBig three">
								<input
									v-model="survey_data.location_move_how"
									class="ans-txt"
									placeholder="예) 배꼽에서 아랫배로"
								/>
							</div>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>

				<v-expansion-panel class="q1-3">
					<v-expansion-panel-header class="header animate fadeInDown two">
						Q3.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">통증이 퍼지나요?</p>
						<br />
						<br />
						<div class="answers">
							<button
								value="True"
								@click="button_click('pain_spread', '예')"
								class="answerTF animate fadeInRightBig three"
							>
								예
							</button>

							<br />

							<button
								value="False"
								@click="button_click('pain_spread', '아니오')"
								class="answerTF animate fadeInRightBig three"
							>
								아니오
							</button>
						</div>
						<br />
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="q1-1">
					<v-expansion-panel-header
						class="header animate animate fadeInDown two"
						v-if="survey_data.pain_spread === '예'"
					>
						&nbsp;&nbsp;Q3-1.
						<template v-slot:actions></template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="content animate fadeInUp one">
						<p class="question">통증이 어디로 퍼지나요?</p>
						<br />
						<br />
						<div class="answers">
							<div class="answer animate fadeInRightBig three">
								<input
									type="text"
									v-model="survey_data.pain_spread_where"
									class="ans-txt"
									placeholder="예) 주변으로, "
								/>
							</div>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</div>
		<div class="buttons">
			<router-link :to="{ name: 'sec1' }">이전</router-link>
			<router-link :to="{ name: 'sec3' }" @click.native="send(survey_data)">다음</router-link>
		</div>
	</div>
</template>

<script>
import surveyMixin from '../../mixin/surveyMixin.js';
export default {
	mixins: [surveyMixin],
	data() {
		return {
			expand: 0,
			survey_data: {
				symptom_location: [],
				location_move: '',
				pain_spread: '',
			},
		};
	},
};
</script>
<style scoped>
/* question header */
.question-header {
	margin-top: 2rem;
	padding-left: 2.5rem;
	font-size: 1.7rem;
}
/* question body */
.v-expansion-panels {
	width: 100%;
	height: 100%;
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
	line-height: 0.5em;
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
	border-radius: 7px;
	width: 5.5rem;
	height: 2.7rem;
	margin: 0.1rem;

	color: rgb(255, 255, 255);
}
.answer {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #2592c9;
	border-radius: 7px;
	width: 15rem;
	height: 2.7rem;
	line-height: 1rem;

	color: rgb(255, 255, 255);
}
.answerTF {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #2592c9;
	border-radius: 7px;
	width: 13rem;
	height: 2.7rem;
	line-height: 1rem;
	color: white;
}
.blank {
	visibility: hidden;
}
.answer input::placeholder {
	color: rgba(88, 88, 88, 0.5);
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
</style>
