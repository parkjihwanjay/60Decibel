<template>
	<div class="form">
		<form method="put" enctype="multipart/form-data">
			<!-------- 기본 정보 -------->
			<div class="cont1">
				<div class="upload-title">기본 정보</div>
				<div class="upload-detail">
					<div class="upload-img">
						<div class="bold">프로필 이미지</div>
						<br />
						<img src="../../assets/user.png" alt="사용자 기본 프로필" class="img" />
					</div>
					<div class="upload-info">
						<span>이름</span>
						<input type="text" ref="name" v-model="update.name" />
						<br />
						<span>성별</span>
						<form>
							<label for="male">
								<input
									class="select"
									type="radio"
									ref="male"
									v-model="update.gender"
									name="gender"
									id="male"
									value="남성"
								/>남성
							</label>
							<label for="female">
								<input
									class="select"
									type="radio"
									ref="female"
									v-model="update.gender"
									name="gender"
									id="female"
									value="여성"
								/>여성
							</label>
						</form>
						<br />
						<span>생년월일</span>
						<input type="date" v-model="update.birth_date" class="input-birth" />
						<br />
						<span>신장</span>
						<input type="number" ref="height" v-model.number="update.height" />
						<br />
						<span>체중</span>
						<input type="number" ref="weight" v-model.number="update.weight" />
						<br />
					</div>
				</div>
			</div>
			<!-------- 과거력 -------->
			<div class="cont2">
				<div class="upload-title">과거력</div>
				<div class="upload-detail2">
					<span class="span2">건강검진 여부</span>
					<label for="yes">
						<input
							class="select"
							type="radio"
							v-model="update.had_checkup"
							name="had_checkup"
							id="yes"
							:value="true"
						/>있음
					</label>
					<label for="no">
						<input
							class="select"
							type="radio"
							v-model="update.had_checkup"
							name="had_checkup"
							id="no"
							:value="false"
						/>없음
					</label>
					<br />
					<span class="span2" for="had_long_before">건강검진 시기</span>
					<br />
					<input
						class="select selectline"
						type="radio"
						v-model="update.had_checkup_true"
						value="1년 이내"
					/>1년 이내
					<input
						class="select selectline"
						cd
						type="radio"
						v-model="update.had_checkup_true"
						value="1-3년"
					/>1~3년
					<input class="select" type="radio" v-model="update.had_checkup_true" value="3-5년" />3~5년
					<input
						class="select"
						type="radio"
						v-model="update.had_checkup_true"
						value="5-10년"
					/>5~10년
					<br />
					<span class="span2" for="disease_list">병 진단 이력</span>
					<br />
					<!-- <input type="checkbox" class="select selectline" v-model="update.diagnosed_disease" /> -->
					<!-- <input
						type="checkbox"
						class="select selectline"
						v-for="(element, index)  in update.diagnosed_disease"
						v-model="element.checked"
						:key="index"
					/>{{ element }} -->

					<!-- <template v-for="(disease, index) in update.diagnosed_disease">
						<input
							type="checkbox"
							class="select selectline"
							:key="index"
							@click="ClickDisease(label[index], index)"
							:value="label[index]"
						/>{{ label[index] }}
					</template> -->
					<!-- <template v-for="(disease, index) in update.diagnosed_disease">
						<input
							type="checkbox"
							:key="index"
							:value="disease"
							@click="clickDisease(disease)"
							class="select selectline"
						/>{{ disease }}
					</template> -->

					<span v-for="disease in diseaseLabel" :key="disease">
						<input
							type="checkbox"
							:name="disease"
							:value="disease"
							v-model="update.diagnosed_disease"
						/>
						<label :for="disease">{{ disease }}</label>
					</span>
					<template name="diseaseIF">
						<div v-if="update.diagnosed_disease.includes('고혈압')">
							고혈압
						</div>
						<div v-if="update.diagnosed_disease.includes('간염')">
							간염
						</div>
					</template>
					<!-- <input
						type="checkbox"
						class="select selectline"
						value="고혈압"
						v-model="update.diagnosed_disease"
					/>고혈압
					<input
						class="select selectline"
						value="간염"
						type="checkbox"
						v-model="update.diagnosed_disease"
					/>간염
					<input
						class="select selectline"
						value="결핵"
						type="checkbox"
						v-model="update.diagnosed_disease"
					/>결핵
					<input
						class="select selectline"
						value="없음"
						type="checkbox"
						v-model="update.diagnosed_disease"
					/>없음
					<input
						class="select selectline"
						value="기타"
						type="checkbox"
						v-model="update.diagnosed_disease"
					/>기타 -->
					<br />
					<!-- <input type="text" v-if="update.diagnosed_disease.indexOf('기타') >= 0" /> -->
					<!-- <input type="text" v-show="diagnosed_disease_rest" v-model="diagnosed_disease_restText" /> -->
					<span class="span2">복용중인 약</span>
					<br />
					<label for="yes">
						<input
							class="select selectline"
							type="radio"
							v-model="update.taking_medicine"
							name="taking_medicine"
							id="yes"
							:value="true"
						/>있음
					</label>
					<label for="no">
						<input
							class="select"
							type="radio"
							v-model="update.taking_medicine"
							name="taking_medicine"
							id="no"
							:value="false"
						/>없음
					</label>
					<br />
					<span>약 이름</span>
					<input type="text" ref="what_medicine" v-model="update.what_medicine" />

					<span for="family_disease">가족력</span>
					<br />
					<span v-for="(disease, index) in diseaseLabel" :key="index">
						<input
							type="checkbox"
							:name="disease"
							:value="disease"
							v-model="update.family_history"
						/>
						<label :for="disease">{{ disease }}</label>
					</span>
					<!-- <input
						class="select"
						type="checkbox"
						v-model="update.family_history"
						value="고혈압"
					/>고혈압
					<input class="select" type="checkbox" v-model="update.family_history" value="간염" />간염
					<input class="select" type="checkbox" v-model="update.family_history" value="결핵" />결핵
					<input class="select" type="checkbox" v-model="update.family_history" value="없음" />없음
					<input
						class="select"
						type="checkbox"
						v-model="update.family_history"
						value="기타"
						@click="familyRest"
					/>기타 -->
				</div>
			</div>
			<!-------- 사회력 -------->
			<div class="cont3">
				<div class="upload-title">사회력</div>
				<div class="upload-detail3">
					<span class="span3">음주 여부</span>
					<label for="yes">
						<input
							type="radio"
							v-model="update.drinking"
							name="drinking"
							id="yes"
							:value="true"
						/>네
					</label>
					<label for="no">
						<input
							type="radio"
							v-model="update.drinking"
							name="drinking"
							id="no"
							:value="false"
						/>아니오
					</label>
					<br />
					<span class="span3 spanlong">음주량(병)(일주일)</span>
					<input
						class="inputsmall"
						type="number"
						ref="drinking_per_week"
						v-model="update.drinking_per_week"
					/>
					<br />
					<span class="span3">흡연 여부</span>
					<label for="yes">
						<input type="radio" v-model="update.smoking" name="smoking" id="yes" :value="true" />네
					</label>
					<label for="no">
						<input
							type="radio"
							v-model="update.smoking"
							name="smoking"
							id="no"
							:value="false"
						/>아니오
					</label>
					<br />
					<span class="span3">흡연 기간(년)</span>
					<input
						class="inputsmall"
						type="number"
						ref="how_long_smoking"
						v-model.number="update.how_long_smoking"
					/>
					<br />
					<span class="span3 spanlong">흡연 양(갑)(일주일)</span>
					<input
						class="inputsmall"
						type="number"
						ref="how_much_smoking"
						v-model.number="update.how_much_smoking"
					/>
					<br />
					<span class="span3">직업</span>
					<input type="text" ref="job" v-model="update.job" class="inputsmall" />
					<br />
					<div class="habit-box">
						<label for="bad_habits" class="habit-head"
							>다음 중 해당되는 사항에 모두 체크해주세요</label
						>
						<br />
						<span v-for="factor in factorLabel" :key="factor">
							<input
								type="checkbox"
								:name="factor"
								:value="factor"
								v-model="update.relevant_data"
							/>
							<label :for="factor">{{ factor }}</label>
						</span>
						<!-- <input
							type="checkbox"
							v-model="update.relevant_data"
							value="스트레스를 많이 받는 편"
						/>스트레스를 많이 받음
						<input type="checkbox" v-model="update.relevant_data" value="식사 불규칙" />식사 불규칙
						<br />
						<input
							type="checkbox"
							v-model="update.relevant_data"
							value="기름진 음식을 많이 먹음"
						/>기름진 음식을 많이 먹음
						<input type="checkbox" v-model="update.relevant_data" value="수면시간 불규칙" />수면시간
						불규칙 -->
					</div>
					<br />
				</div>
			</div>
		</form>
		<div class="updatecomplete">
			<v-btn @click.native="updateProfileInfo()" class="button" color="#669999"
				>프로필 업데이트</v-btn
			>
			<div class="pluslist"></div>
		</div>
	</div>
</template>
<script>
export default {
	// computed: {
	// 	profile: function() {
	// 		return { ...this.$store.state.profile };
	// 	},
	// },
	created() {
		this.update = { ...this.$store.state.profile };
	},
	data() {
		return {
			update: {},
			diseaseLabel: ['고혈압', '간염', '결핵', '없음', '기타'],
			factorLabel: [
				'스트레스를 많이 받는 편',
				'식사 불규칙',
				'기름진 음식을 많이 먹음',
				'수면시간 불규칙',
			],
		};
	},
	methods: {
		updateProfileInfo() {
			for (let ans in this.update) {
				if (!this.update[ans]) {
					if (this.update[ans] === false) continue;
					alert(`${ans}를 입력해주세요.`);
					return;
				}
			}
			this.$store.dispatch('updateProfileInfo', this.update);
		},
	},
};
</script>
<style scoped>
.cont1 {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	background: white;
	width: 100%;
	min-height: 27rem;
}
.cont2 {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	background-color: #ebebeb;
	width: 100%;
	height: 25rem;
}
.cont3 {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	background-color: #ffffff;
	width: 100%;
	height: 25rem;
}
.upload-title {
	color: #397979;
	margin-bottom: 10px;
	font-size: 1.3rem;
	font-weight: bolder;
	font-weight: 800;
	width: 100%;
	text-align: center;
}
.upload-detail {
	max-width: 400px;
	font-size: 1rem;
	line-height: 150%;
}
.upload-info {
	width: 168px;
	margin: 0 auto;
}
.upload-detail2 {
	max-width: 400px;
	/* margin: 0 50px; */
}
.upload-detail3 {
	max-width: 400px;
	font-size: 1rem;
}
span {
	color: rgb(48, 48, 48);
	font-weight: bolder;
	font-weight: 800;
	display: inline-block;
	width: 30%;
	margin-bottom: 12px;
	line-height: 120%;
}
.span2 {
	width: 100px;
}
.span3 {
	width: 55%;
	line-height: 140%;
}
.bold {
	color: rgb(48, 48, 48);
	font-weight: bolder;
	font-weight: 800;
}
.img {
	width: 75px;
	height: 75px;
}
.imgfield {
	width: 260px;
	height: 30px;
}
.upload-img {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
}
.file-upload-form {
	margin-bottom: 12px;
}
input {
	border: 1px solid #397979;
}
.input-birth {
	width: 168px;
	height: 26px;
}
.select {
	margin-right: 5px;
	margin-left: 5px;
}
.selectline {
	margin-bottom: 15px;
}
.inputsmall {
	width: 35%;
	height: 26px;
}
.spanlong {
	width: 55%;
}
.button {
	color: white;
}
.updatecomplete {
	width: 100%;
	text-align: center;
	margin-bottom: 40px;
}
.habit-box {
	max-width: 300px;
	line-height: 150%;
}
.habit-head {
	font-weight: 700;
}
</style>
