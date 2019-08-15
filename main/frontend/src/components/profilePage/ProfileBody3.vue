<template>
  <div>
    <div class="content4">
      <div class="txt-head">사회력</div>
      <!-- 흡연 -->
      <div class="profileinfo">
        <div class="profiletitle">음주습관</div>
        <div
          v-if="`${profile.drinking}=='True'&&${profile.drinking_per_week}`"
          class="profiledetail"
        >{{ profile.drinking_per_week}}</div>
        <div v-else class="profiledetail">YES</div>
      </div>
      <!-- 음주 -->
      <div class="profileinfo">
        <div class="profiletitle">흡연습관</div>
        <div
          v-if="`${profile.smoking}=='True'&&${profile.how_long_smoking}`"
          class="profiledetail"
        >{{ profile.how_long_smoking }}</div>
        <div
          v-if="`${profile.smoking}=='True'&&${profile.how_much_smoking}`"
          class="profiledetail"
        >{{ profile.how_much_smoking }}</div>
        <div class="profiledetail" v-else>YES</div>
      </div>
      <!-- 직업 -->
      <div class="profileinfo">
        <div class="profiletitle">직업</div>
        <div v-if="profile.job" class="profiledetail">{{profile.job}}</div>
        <div class="profiledetail" v-else>입력해주세요</div>
      </div>
    </div>
    <!-- 프로필 추가 버튼 -->
    <div class="profileplus">
      <v-btn class="button" color="#669999" to="/profileupdate">프로필 작성하기</v-btn>
      <!-- 작성하지 않은 버튼 -->
      <div class="pluslist"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["profile"])
  },
  created() {
    this.$store.dispatch("getProfileInfo");
  }
};
</script>

<style scoped>
.txt-head {
  color: #397979;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bolder;
  font-weight: 800;
}
.content4 {
  padding-top: 20px;
  padding-left: 20px;
}
.profileinfo {
  font-size: 1.05rem;
  display: flex;
  line-height: 140%;
}
.profiletitle {
  color: rgb(48, 48, 48);
  font-weight: bolder;
  font-weight: 800;
  width: 45%;
}
.profiledetail {
}
.button {
  color: white;
}
.profileplus {
  width: 100%;
  padding-top: 45px;
  padding-left: 20px;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["profile"])
  },
  created() {
    this.$store.dispatch("getProfileInfo");
  }
};
</script>
<style>
.content {
  padding-top: 20px;
  padding-left: 20px;
}
.profileinfo {
  font-size: 1.05rem;
  display: flex;
  line-height: 140%;
}
.profiletitle {
  color: rgb(48, 48, 48);
  font-weight: bolder;
  font-weight: 800;
  width: 45%;
}
.profiledetail {
}
.button {
  color: white;
}
.profileplus {
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
}
</style>
