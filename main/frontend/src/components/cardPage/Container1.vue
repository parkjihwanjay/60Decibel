<template>
  <div
    class="container1"
    :class="{containercolor: dialog1||dialog2||dialog3||dialog4||dialog5||dialog6||dialog7||dialog8}"
  >
    <nav class="circular-menu">
      <div
        class="circle"
        :class="{notselected: dialog1||dialog2||dialog3||dialog4||dialog5||dialog6||dialog7||dialog8}"
      >
        <img
          src="../../assets/open-mouth.png"
          @click="dialog1 = !dialog1"
          alt="입을 벌려주세요"
          class="s img1"
          :class="{imgclicked: dialog1}"
        />
        <br />
        <img
          src="../../assets/lips.png"
          alt="입을 다물어주세요"
          @click="dialog2 = !dialog2"
          class="s img2"
          :class="{imgclicked: dialog2}"
        />
        <img
          src="../../assets/ear.png"
          alt="귀를 보겠습니다"
          @click="dialog3 = !dialog3"
          class="s img3"
          :class="{imgclicked: dialog3}"
        />
        <br />
        <img
          src="../../assets/nose.png"
          alt="코를 보겠습니다"
          @click="dialog4 = !dialog4"
          class="s img4"
          :class="{imgclicked: dialog4}"
        />
        <img
          src="../../assets/stethoscope.png"
          @click="dialog5 = !dialog5"
          :class="{imgclicked: dialog5}"
          alt="청진기를 대겠습니다"
          class="s img5"
        />
        <br />
        <img
          src="../../assets/tap.png"
          alt="촉진하겠습니다"
          @click="dialog6 =!dialog6"
          class="s img6"
          :class="{imgclicked: dialog6}"
        />
        <img
          src="../../assets/injection.png"
          @click="dialog7 = !dialog7"
          alt="주사 처방하겠습니다"
          class="s img7"
          :class="{imgclicked: dialog7}"
        />
        <br />
        <img
          src="../../assets/hospital.png"
          alt="침대에 누워주세요"
          @click="dialog8 = !dialog8"
          class="s img8"
          :class="{imgclicked: dialog8}"
        />
      </div>
    </nav>
    <!-- 모달1 -->
    <div class="hello">
      <v-dialog light v-model="dialog1" max-width="500px">
        <v-card>
          <v-card-title>입을 벌려주세요</v-card-title>
          <v-card-text>
            <div class="modal-center">
              <img src="../../assets/open-mouth.png" class="img-modal" />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog1 = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- 모달2 -->
    <v-dialog light v-model="dialog2" max-width="500px">
      <v-card>
        <v-card-title>입을 다물어주세요</v-card-title>
        <v-card-text>
          <div class="modal-center">
            <img src="../../assets/lips.png" class="img-modal" />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog2 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 모달3 -->
    <v-dialog light v-model="dialog3" max-width="500px">
      <v-card>
        <v-card-title>귀를 보겠습니다</v-card-title>
        <v-card-text>
          <div class="modal-center">
            <img src="../../assets/ear.png" class="img-modal" />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog3 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 모달4 -->
    <v-dialog light v-model="dialog4" max-width="500px">
      <v-card>
        <v-card-title>코를 보겠습니다</v-card-title>
        <v-card-text>
          <div class="modal-center">
            <img src="../../assets/nose.png" class="img-modal" />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog4 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 모달5 -->
    <v-dialog light v-model="dialog5" max-width="500px">
      <v-card>
        <v-card-title>청진기를 대겠습니다</v-card-title>
        <v-card-text>
          <div class="modal-center">
            <img
              src="../../assets/stethoscope.png"
              class="img-modal"
            />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog5 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 모달6-->
    <v-dialog light v-model="dialog6" max-width="500px">
      <v-card>
        <v-card-title>촉진하겠습니다</v-card-title>
        <v-card-text>
          <div class="modal-center">
            <img src="../../assets/tap.png" class="img-modal" />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog6 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 모달7 -->
    <v-dialog light v-model="dialog7" max-width="500px">
      <v-card>
        <v-card-title>주사 처방하겠습니다</v-card-title>
        <v-card-text>
          <div class="modal-center">
            <img src="../../assets/injection.png" class="img-modal" />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog7 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 모달8 -->
    <v-dialog light v-model="dialog8" max-width="500px">
      <v-card>
        <v-card-title>침대에 누워주세요</v-card-title>
        <v-card-text>
          <div class="modal-center">
            <img src="../../assets/hospital.png" class="img-modal" />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog8 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="cardintro">
      <p class="txt-head">진료카드</p>
      <p class="txt-main">
        환자에게 전할
        <span>진료 지시사항</span>을 선택해주세요.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false,
      dialog8: false
    };
  }
};
</script>

<style scoped>
.container1 {
  width: 100%;
  height: 100vh;
}
.containercolor {
  background-color: #eaeaea;
}
.notselected {
  opacity: 0.7;
}
.modal-center {
  text-align: center;
  padding-top: 20px;
}
.circular-menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle {
  height: 140px;
  width: 140px;
  padding-top: 20px;
}
.s {
  height: 20px;
  width: 20px;
}
.img1 {
  margin-left: 60px;
}
.img2 {
  margin-top: 2.5px;
  margin-left: 17.5px;
}
.img3 {
  margin-top: 2.5px;
  margin-left: 65px;
}
.img4 {
  margin-top: 10px;
}
.img5 {
  margin-top: 10px;
  margin-left: 100px;
}
.img6 {
  margin-top: 10px;
  margin-left: 17.5px;
}
.img7 {
  margin-top: 10px;
  margin-left: 65px;
}
.img8 {
  margin-top: 2.5px;
  margin-left: 60px;
}
.img-modal {
  height: 60px;
  width: 60px;
}
.imgclicked {
  border-radius: 50%;
  border: 1.3px solid #0d4d8d;
}
.txt-head {
  padding-top: 30px;
  padding-bottom: 10px;
  color: #0d4d8d;
  font-size: 1.4rem;
  font-weight: bolder;
  font-weight: 550;
}
.txt-main {
  font-size: 0.9rem;
  line-height: 140%;
}
span {
  color: #0d4d8d;
  font-weight: 700;
  font-weight: bolder;
}
.cardintro {
  width: 100%;
  margin-top: 40vh;
  text-align: center;
}
</style>
