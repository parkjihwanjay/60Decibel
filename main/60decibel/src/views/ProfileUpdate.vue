<template>
  <div class="form">
    <form method="put" enctype="multipart/form-data">
      <span>현재 이미지</span>
      <img class="thumb" v-bind="profile.avatar" />
      <label>프로필 이미지 변경하기</label>
      <input type="file" v-bind:src="update.avatar" />
      <br />
      <span>성별을 골라주세요 :</span>
      <label for="male">
        <input type="radio" v-model="update.gender" name="gender" id="male" value="남성" />남성
      </label>
      <label for="female">
        <input type="radio" v-model="update.gender" name="gender" id="female" value="여성" />여성
      </label>
      <br />
      <span>생년월일을 입력해주세요</span>
      <input type="date" v-model="update.birth_date" />
      <br />
      <span>신장을 입력해주세요</span>
      <input type="number" v-model="update.height" v-bind:placeholder="profile.height" />
      <br />
      <span>체중을 입력해주세요</span>
      <input type="number" v-model="update.weight" v-bind:placeholder="profile.weight" />
      <br />
      <span>성함을 입력해주세요</span>
      <input type="text" v-model="update.name" v-bind:placeholder="profile.name" />
      <br />
      <br />
      <span>과거력</span>
      <br />
      <br />
      <span>이전에 건강검진을 받은 적이 있나요?</span>
      <label for="yes">
        <input type="radio" v-model="update.had_checkup" name="had_checkup" id="yes" value="True" />네
      </label>
      <label for="no">
        <input type="radio" v-model="update.had_checkup" name="had_checkup" id="no" value="False" />아니오
      </label>
      <br />
      <label for="had_long_before">몇 년 전에 받았나요?</label>
      <input type="radio" v-model="update.had_checkup_true" value="1년 이내" />1년 이내
      <input type="radio" v-model="update.had_checkup_true" value="1-3년" />1~3년
      <input type="radio" v-model="update.had_checkup_true" value="3-5년" />3~5년
      <input type="radio" v-model="update.had_checkup_true" value="5-10년" />5~10년
      <input type="radio" v-model="update.had_checkup_true" value="10년 이상" />10년 이상
      <br />
      <label for="disease_list">이전에 진단받은 병이 있나요?</label>
      <input type="checkbox" v-model="update.diagnosed_disease" value="고혈압" />고혈압
      <input type="checkbox" v-model="update.diagnosed_disease" value="간염" />간염
      <input type="checkbox" v-model="update.diagnosed_disease" value="결핵" />결핵
      <input type="checkbox" v-model="update.diagnosed_disease" value="없음" />없음
      <input type="checkbox" v-model="update.diagnosed_disease" value="기타" />기타
      <br />
      <span>드시고 계시는 약이 있나요?</span>
      <label for="yes">
        <input
          type="radio"
          v-model="update.taking_medicine"
          name="taking_medicine"
          id="yes"
          value="True"
        />네
      </label>
      <label for="no">
        <input
          type="radio"
          v-model="update.taking_medicine"
          name="taking_medicine"
          id="no"
          value="False"
        />아니오
      </label>
      <br />
      <span>드시고 계신 약물을 알려주세요</span>
      <input type="text" v-model="update.what_medicine" v-bind:placeholder="profile.what_medicine" />
      <br />
      <label for="family_disease">가족분들이 진단받은 병이 있나요?</label>
      <input type="checkbox" v-model="update.family_history" value="고혈압" />고혈압
      <input type="checkbox" v-model="update.family_history" value="간염" />간염
      <input type="checkbox" v-model="update.family_history" value="결핵" />결핵
      <input type="checkbox" v-model="update.family_history" value="없음" />없음
      <input type="checkbox" v-model="update.family_history" value="기타" />기타
      <br />
      <br />
      <span>사회력</span>
      <br />
      <br />
      <span>술을 드시나요?</span>
      <label for="yes">
        <input type="radio" v-model="update.drinking" name="drinking" id="yes" value="True" />네
      </label>
      <label for="no">
        <input type="radio" v-model="update.drinking" name="drinking" id="no" value="False" />아니오
      </label>
      <br />
      <span>매주 몇 병 드시나요?</span>
      <input
        type="number"
        v-model="update.drinking_per_week"
        v-bind:placeholder="profile.drinking_per_week"
      />
      <br />
      <span>흡연하시나요?</span>
      <label for="yes">
        <input type="radio" v-model="update.smoking" name="smoking" id="yes" value="True" />네
      </label>
      <label for="no">
        <input type="radio" v-model="update.smoking" name="smoking" id="no" value="False" />아니오
      </label>
      <br />
      <span>몇 년째 피고 계신가요?</span>
      <input
        type="number"
        v-model="update.how_long_smoking"
        v-bind:placeholder="profile.how_long_smoking"
      />
      <br />
      <span>몇 갑씩 피고 계신가요?</span>
      <input
        type="number"
        v-model="update.how_much_smoking"
        v-bind:placeholder="profile.how_much_smoking"
      />
      <br />
      <span>직업을 입력해주세요</span>
      <input type="text" v-model="update.job" v-bind:placeholder="profile.job" />
      <br />
      <label for="bad_habits">다음 중 해당되는 사항에 모두 체크해주세요</label>
      <input type="checkbox" v-model="update.relevant_data" value="스트레스를 많이 받는 편" />스트레스를 많이 받는 편
      <input type="checkbox" v-model="update.relevant_data" value="식사 불규칙" />식사 불규칙
      <input type="checkbox" v-model="update.relevant_data" value="기름진 음식을 많이 먹음" />기름진 음식을 많이 먹음
      <input type="checkbox" v-model="update.relevant_data" value="수면시간 불규칙" />수면시간 불규칙
      <br />
    </form>
    <input
      type="submit"
      class="button"
      name="submit"
      @click="updateProfileInfo(update)"
      value="프로필 업데이트"
    />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      update: {
        avatar: null,
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
</style>
