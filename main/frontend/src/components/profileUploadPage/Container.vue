<template>
  <div class="form">
    <form method="put" enctype="multipart/form-data">
      <!-------- 기본 정보 -------->
      <div class="cont1">
        <div class="upload-title">기본 정보</div>
        <div class="upload-detail">
          <div class="upload-img">
            <div class="bold">프로필 이미지</div>
            <img v-if="profile.avatar" v-bind:src="`${profile.avatar}`" class="img" />
            <img v-else src="../../assets/60db.png" class="img" />
            <!-- <label>이미지 변경</label> -->
          </div>
          <!-- <button>이미지 변경</button> -->
          <!-- <input type="file" v-model="update.avatar"/> -->
          <span>이름</span>
          <input type="text" v-model="update.name" v-bind:placeholder="profile.name" />
          <br />
          <span>성별</span>
          <label for="male">
            <input
              class="select"
              type="radio"
              v-model="update.gender"
              name="gender"
              id="male"
              value="남성"
            />남자
          </label>
          <label for="female">
            <input
              type="radio"
              class="select"
              v-model="update.gender"
              name="gender"
              id="female"
              value="여성"
            />여자
          </label>
          <br />
          <span>생년월일</span>
          <input type="date" v-model="update.birth_date" />
          <br />
          <span>신장</span>
          <input type="number" v-model="update.height" v-bind:placeholder="profile.height" />
          <br />
          <span>체중</span>
          <input type="number" v-model="update.weight" v-bind:placeholder="profile.weight" />
          <br />
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
              value="True"
            />있음
          </label>
          <label for="no">
            <input
              class="select"
              type="radio"
              v-model="update.had_checkup"
              name="had_checkup"
              id="no"
              value="False"
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
            type="radio"
            v-model="update.had_checkup_true"
            value="1-3년"
          />1~3년
          <input class="select" type="radio" v-model="update.had_checkup_true" value="3-5년" />3~5년
          <input class="select" type="radio" v-model="update.had_checkup_true" value="5-10년" />5~10년
          <!-- <input type="radio" v-model="update.had_checkup_true" value="10년 이상" />10년 이상 -->
          <br />
          <span class="span2" for="disease_list">병 진단 이력</span>
          <br />
          <input
            type="checkbox"
            class="select selectline"
            v-model="update.diagnosed_disease"
            value="고혈압"
          />고혈압
          <input
            class="select selectline"
            type="checkbox"
            v-model="update.diagnosed_disease"
            value="간염"
          />간염
          <input
            class="select selectline"
            type="checkbox"
            v-model="update.diagnosed_disease"
            value="결핵"
          />결핵
          <input
            class="select selectline"
            type="checkbox"
            v-model="update.diagnosed_disease"
            value="없음"
          />없음
          <input
            class="select selectline"
            type="checkbox"
            v-model="update.diagnosed_disease"
            value="기타"
          />기타
          <br />
          <span class="span2">복용중인 약</span>
          <br />
          <label for="yes">
            <input
              class="select selectline"
              type="radio"
              v-model="update.taking_medicine"
              name="taking_medicine"
              id="yes"
              value="True"
            />있음
          </label>
          <label for="no">
            <input
              class="select"
              type="radio"
              v-model="update.taking_medicine"
              name="taking_medicine"
              id="no"
              value="False"
            />없음
          </label>
          <br />
          <span>약 이름</span>
          <input
            type="text"
            v-model="update.what_medicine"
            v-bind:placeholder="profile.what_medicine"
          />
          <br />
          <span for="family_disease">가족력</span>
          <br />
          <input class="select" type="checkbox" v-model="update.family_history" value="고혈압" />고혈압
          <input class="select" type="checkbox" v-model="update.family_history" value="간염" />간염
          <input class="select" type="checkbox" v-model="update.family_history" value="결핵" />결핵
          <input class="select" type="checkbox" v-model="update.family_history" value="없음" />없음
          <input class="select" type="checkbox" v-model="update.family_history" value="기타" />기타
        </div>
      </div>
      <!-------- 사회력 -------->
      <div class="cont3">
        <div class="upload-title">사회력</div>
        <div class="upload-detail3">
          <span class="span3">음주 여부</span>
          <label for="yes">
            <input type="radio" v-model="update.drinking" name="drinking" id="yes" value="True" />네
          </label>
          <label for="no">
            <input type="radio" v-model="update.drinking" name="drinking" id="no" value="False" />아니오
          </label>
          <br />
          <span class="span3 spanlong">음주량(병)(일주일 기준)</span>
          <input
            class="inputsmall"
            type="number"
            v-model="update.drinking_per_week"
            v-bind:placeholder="profile.drinking_per_week"
          />
          <br />
          <span class="span3">흡연 여부</span>
          <label for="yes">
            <input type="radio" v-model="update.smoking" name="smoking" id="yes" value="True" />네
          </label>
          <label for="no">
            <input type="radio" v-model="update.smoking" name="smoking" id="no" value="False" />아니오
          </label>
          <br />
          <span class="span3">흡연 기간</span>
          <input
            type="number"
            v-model="update.how_long_smoking"
            v-bind:placeholder="profile.how_long_smoking"
          />
          <br />
          <span class="span3 spanlong">흡연 양(갑)(일주일 기준)</span>
          <input
            class="inputsmall"
            type="number"
            v-model="update.how_much_smoking"
            v-bind:placeholder="profile.how_much_smoking"
          />
          <br />
          <span class="span3">직업</span>
          <input type="text" v-model="update.job" v-bind:placeholder="profile.job" />
          <br />
          <!-- <label for="bad_habits">다음 중 해당되는 사항에 모두 체크해주세요</label>
      <input type="checkbox" v-model="update.relevant_data" value="스트레스를 많이 받는 편" />스트레스를 많이 받는 편
      <input type="checkbox" v-model="update.relevant_data" value="식사 불규칙" />식사 불규칙
      <input type="checkbox" v-model="update.relevant_data" value="기름진 음식을 많이 먹음" />기름진 음식을 많이 먹음
      <input type="checkbox" v-model="update.relevant_data" value="수면시간 불규칙" />수면시간 불규칙
          <br />-->
        </div>
      </div>
    </form>
    <!-- 버튼 안보임-->
    <div class="updatecomplete">
      <v-btn
        @click.native="updateProfileInfo(update)"
        class="button"
        color="#669999"
        to="/profiles"
      >프로필 업데이트</v-btn>
      <!-- 작성하지 않은 버튼 -->
      <div class="pluslist"></div>
    </div>
    <!-- <input
      type="submit"
      class="button"
      name="submit"
      @click="updateProfileInfo(update)"
      value="프로필 업데이트"
    />-->
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      update: {
        // avatar: null,
        gender: "",
        birth_date: "",
        height: "",
        weight: "",
        name: "",
        had_checkup: "",
        had_checkup_true: "",
        diagnosed_disease: [],
        taking_medicine: "",
        what_medicine: "",
        family_history: [],
        drinking: "",
        drinking_per_week: "",
        smoking: "",
        how_long_smoking: "",
        how_much_smoking: "",
        job: "",
        relevant_data: []
      }
    };
  },
  computed: {
    ...mapState(["profile"])
  },
  methods: {
    ...mapActions(["updateProfileInfo"])
  },
  created() {
    this.$store.dispatch("getProfileInfo");
  }
};
</script>
<style scoped>
.cont1 {
  padding: 20px 0;
  background: white;
  width: 100%;
  height: 23rem;
}
.cont2 {
  padding: 20px 0;
  background-color: #ebebeb;
  width: 100%;
  height: 25rem;
}
.cont3 {
  padding: 20px 0;
  background: white;
  width: 100%;
  height: 19rem;
}
.upload-title {
  color: #397979;
  margin-bottom: 10px;
  font-size: 1.1rem;
  font-weight: bolder;
  font-weight: 800;
  width: 100%;
  text-align: center;
}
.upload-detail {
  width: 70%;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 150%;
}
.upload-detail2 {
  width: 90%;
  margin: 0 auto;
}
.upload-detail3 {
  width: 80%;
  margin: 0 auto;
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
.span3 {
  width: 40%;
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
.upload-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  border: 1px solid #397979;
}
.select {
  margin-right: 5px;
  margin-left: 5px;
}
.selectline {
  margin-bottom: 15px;
}
.inputsmall {
  width: 50px;
}
.spanlong {
  width: 60%;
}
.button {
  color: white;
}
.updatecomplete {
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
}
</style>
