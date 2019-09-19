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
          </div>
          <div class="file-upload-form">
            <span class="spanlong">프로필 이미지 업로드</span>
            <br />
            <input type="file" @change="previewImage" accept="image/*" class="imgfield" />
          </div>
          <span>이름</span>
          <input type="text" ref="name" v-on:blur="storeUpdateName()" v-bind:value="profile.name" />
          <br />
          <span>성별</span>
          <label for="male">
            <input
              class="select"
              type="radio"
              ref="male"
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
              ref="female"
              v-model="update.gender"
              name="gender"
              id="female"
              value="여성"
            />여자
          </label>
          <br />
          <span>생년월일</span>
          <input type="date" v-model="update.birth_date" class="input-birth" />
          <br />
          <span>신장</span>
          <input
            type="number"
            ref="height"
            v-on:blur="storeUpdateHeight()"
            v-bind:value="profile.height"
          />
          <br />
          <span>체중</span>
          <input
            type="number"
            ref="weight"
            v-on:blur="storeUpdateWeight()"
            v-bind:value="profile.weight"
          />
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
            cd
            type="radio"
            v-model="update.had_checkup_true"
            value="1-3년"
          />1~3년
          <input class="select" type="radio" v-model="update.had_checkup_true" value="3-5년" />3~5년
          <input class="select" type="radio" v-model="update.had_checkup_true" value="5-10년" />5~10년
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
            ref="what_medicine"
            v-on:blur="storeUpdateWhatMedicine()"
            v-bind:value="profile.what_medicine"
          />

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
            ref="drinking_per_week"
            v-on:blur="storeUpdateDrinkingPerWeek()"
            v-bind:value="profile.drinking_per_week"
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
          <span class="span3">흡연 기간(년)</span>
          <input
            type="number"
            ref="how_long_smoking"
            v-on:blur="storeUpdateHowLongSmoking()"
            v-bind:value="profile.how_long_smoking"
          />
          <br />
          <span class="span3 spanlong">흡연 양(갑)(일주일 기준)</span>
          <input
            class="inputsmall"
            type="number"
            ref="how_much_smoking"
            v-on:blur="storeUpdateHowMuchSmoking()"
            v-bind:value="profile.how_much_smoking"
          />
          <br />
          <span class="span3">직업</span>
          <input type="text" ref="job" v-on:blur="storeUpdateJob()" v-bind:value="profile.job" />
          <br />
          <div class="habit-box">
            <label for="bad_habits" class="habit-head">다음 중 해당되는 사항에 모두 체크해주세요</label>

            <br />
            <br />
            <input type="checkbox" v-model="update.relevant_data" value="스트레스를 많이 받는 편" />스트레스를 많이 받음
            <input type="checkbox" v-model="update.relevant_data" value="식사 불규칙" />식사 불규칙
            <br />
            <input type="checkbox" v-model="update.relevant_data" value="기름진 음식을 많이 먹음" />기름진 음식을 많이 먹음
            <input type="checkbox" v-model="update.relevant_data" value="수면시간 불규칙" />수면시간 불규칙
          </div>
          <br />
        </div>
      </div>
    </form>
    <div class="updatecomplete">
      <v-btn
        @click.native="updateProfileInfo(update, profile)"
        class="button"
        color="#669999"
        to="/profiles"
      >프로필 업데이트</v-btn>
      <div class="pluslist"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      update: {
        avatar: "",
        avatar_base64: "",
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
    storeUpdateName() {
      console.log(this.$refs.name.value);
      this.update.name = this.$refs.name.value;
      this.$store.dispatch("switchName", this.update.name);
    },
    storeUpdateHeight() {
      console.log(this.$refs.height.value);
      this.update.height = this.$refs.height.value;
      this.$store.dispatch("switchHeight", this.update.height);
    },
    storeUpdateWeight() {
      console.log(this.$refs.weight.value);
      this.update.weight = this.$refs.weight.value;
      this.$store.dispatch("switchWeight", this.update.weight);
    },
    storeUpdateWhatMedicine() {
      console.log(this.$refs.what_medicine.value);
      this.update.what_medicine = this.$refs.what_medicine.value;
      this.$store.dispatch("switchWhatMedicine", this.update.what_medicine);
    },
    storeUpdateDrinkingPerWeek() {
      console.log(this.$refs.drinking_per_week.value);
      this.update.drinking_per_week = this.$refs.drinking_per_week.value;
      this.$store.dispatch(
        "switchDrinkingPerWeek",
        this.update.drinking_per_week
      );
    },
    storeUpdateHowLongSmoking() {
      console.log(this.$refs.how_long_smoking.value);
      this.update.how_long_smoking = this.$refs.how_long_smoking.value;
      this.$store.dispatch(
        "switchHowLongSmoking",
        this.update.how_long_smoking
      );
    },
    storeUpdateHowMuchSmoking() {
      console.log(this.$refs.how_much_smoking.value);
      this.update.how_much_smoking = this.$refs.how_much_smoking.value;
      this.$store.dispatch(
        "switchHowMuchSmoking",
        this.update.how_much_smoking
      );
    },
    storeUpdateJob() {
      console.log(this.$refs.job.value);
      this.update.job = this.$refs.job.value;
      this.$store.dispatch("switchJob", this.update.job);
    },
    updateProfileInfo(update, profile) {
      console.log(update);
      if (!update.avatar) {
        console.log("아바타 비었다");
        update.avatar = profile.avatar_base64;
        update.avatar_base64 = profile.avatar_base64;
      }
      if (!update.gender) {
        console.log("gender비었다");
        update.gender = profile.gender;
      }
      if (!update.birth_date) {
        console.log("생일비었다");
        update.birth_date = profile.birth_date;
      }
      if (!update.had_checkup) {
        console.log("검진여부비었다");
        update.had_checkup = profile.had_checkup;
      }
      if (!update.had_checkup_true) {
        console.log("검진 확장 비었다");
        update.had_checkup_true = profile.had_checkup_true;
      }
      if (update.diagnosed_disease == "") {
        console.log("질병 이력 비었다");
        if (
          profile.diagnosed_disease === "" ||
          profile.diagnosed_disease === "[]"
        ) {
          console.log("가족력 초기값이 비었다");
        } else {
          update.diagnosed_disease = profile.diagnosed_disease.slice(1, -1).replace(/'/g, "").split(",");
        }
      }
      if (!update.taking_medicine) {
        console.log("복용중인 약 비었다");
        update.taking_medicine = profile.taking_medicine;
      }
      if (update.family_history == "") {
        console.log("가족력 비었다");
        if (profile.family_history === "" || profile.family_history === "[]") {
          console.log("가족력 초기값이 비었다");
        } else {
          update.family_history = profile.family_history
            .slice(1, -1)
            .replace(/'/g, "")
            .split(",");
        }
      }
      if (!update.drinking) {
        console.log("음주 여부 비었다");
        update.drinking = profile.drinking;
      }
      if (!update.smoking) {
        console.log("흡연 여부 비었다");
        update.smoking = profile.smoking;
      }
      if (update.relevant_data == "") {
        console.log("나쁜 습관 비었다");
        if (profile.relevant_data === "" || profile.relevant_data === "[]") {
          console.log("가족력 초기값이 비었다");
        } else {
          update.relevant_data = profile.relevant_data
            .slice(1, -1)
            .replace(/'/g, "")
            .split(",");
        }
      }
      if (!update.name) {
        console.log("name비었다");
        update.name = profile.name;
      }
      if (!update.height) {
        console.log("height비었다");
        update.height = profile.height;
      }
      if (!update.weight) {
        console.log("weight비었다");
        update.weight = profile.weight;
      }
      if (!update.what_medicine) {
        console.log("what_medicine비었다");
        update.what_medicine = profile.what_medicine;
      }
      if (!update.drinking_per_week) {
        console.log("drinking_per_week비었다");
        update.drinking_per_week = profile.drinking_per_week;
      }
      if (!update.how_long_smoking) {
        console.log("how_long_smoking비었다");
        update.how_long_smoking = profile.how_long_smoking;
      }
      if (!update.how_much_smoking) {
        console.log("how_much_smoking비었다");
        update.how_much_smoking = profile.how_much_smoking;
      }
      if (!update.job) {
        console.log("job 비었다");
        update.job = profile.job;
      }
      this.$store.dispatch("updateProfileInfo", update);
    },
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.update.avatar = e.target.result;
          this.update.avatar_base64 = e.target.result;
          this.$store.dispatch("switchAvatar", this.update.avatar);
          console.log("이미지 : ", this.update.avatar);
        };
        // Start the reader job - read file as a data url (base64 format)
        console.log(input.files[0]);
        reader.readAsDataURL(input.files[0]);
      }
    }
  },
  created() {
    this.$store.dispatch("getProfileInfo");
    console.log("state 값 : ", this.profile);
    console.log(this.profile.family_history);
  }
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
  width: 100px;
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
}
.file-upload-form {
  margin-bottom: 12px;
}
input {
  border: 1px solid #397979;
}
.input-birth {
  width: 174px;
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
.habit-box {
  max-width: 300px;
}
.habit-head {
  font-weight: 700;
}
</style>


