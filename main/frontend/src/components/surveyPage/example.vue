<template>
  <div class="scroll">
    <scrollactive
      class="scrollnav"
      v-on:itemchanged="onItemChanged"
      :offset="30"
      :duration="600"
      :modifyUrl="false"
      bezier-easing-value=".5,0,.35,1"
    >
      <a href="#port1" class="scrollactive-item">Section1</a>
      <a href="#port2" class="scrollactive-item">Section2</a>
      <a href="#port3" class="scrollactive-item">Section3</a>
      <a href="#port4" class="scrollactive-item">Section4</a>
    </scrollactive>
    <div id="port1">
      <span class="span">Section1</span>
      <div>
        <label>
          언제부터 아프기 시작했나요?
          <input v-model="survey_data.symptom_start" placeholder="여기를 수정해보세요" />
        </label>
      </div>

      <div>
        <label>
          통증이 언제 시작되었나요?
          <input
            type="month"
            v-model="survey_data.symptom_start_less_than_month"
            placeholder="여기를 수정해보세요"
          />
        </label>
      </div>

      <div>
        <label>
          갑자기/서서히
          <input
            type="radio"
            v-model="survey_data.fast_or_slow"
            value="fast"
            placeholder="여기를 수정해보세요"
          />갑자기
          <br />
          <input
            type="radio"
            v-model="survey_data.fast_or_slow"
            value="slow"
            placeholder="여기를 수정해보세요"
          />서서히
          <br />
        </label>
      </div>

      <div>
        <label>
          어떤 상황에서 아프기 시작했나요?
          <input v-model="survey_data.symtpon_situation" placeholder="여기를 수정해보세요" />
        </label>
      </div>

      <div>
        <label>
          어느 곳이 아픈가요?
          <input v-model="survey_data.symptom_location" placeholder="여기를 수정해보세요" />
        </label>
      </div>

      <div>
        <label>
          아픈 부위가 이동하나요?
          <input
            type="radio"
            v-model="survey_data.location_move"
            value="True"
            placeholder="여기를 수정해보세요"
          />예
          <br />
          <input
            type="radio"
            v-model="survey_data.location_move"
            value="False"
            placeholder="여기를 수정해보세요"
          />아니오
          <br />
        </label>
      </div>

      <div>
        <label>
          아픈 부위가 어떻게 이동하나요?
          <input v-model="survey_data.location_move_how" placeholder="여기를 수정해보세요" />
        </label>
      </div>
    </div>
    <div id="port2">
      <span class="span">Section2</span>
      <div>
        <label>
          통증이 퍼지나요?
          <input
            type="radio"
            v-model="survey_data.pain_spread"
            value="True"
            placeholder="여기를 수정해보세요"
          />예
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_spread"
            value="False"
            placeholder="여기를 수정해보세요"
          />아니오
          <br />
        </label>
      </div>

      <div>
        <label>
          통증이 어디로 퍼지나요?
          <input
            type="text"
            v-model="survey_data.pain_spread_where"
            placeholder="여기를 수정해보세요"
          />
        </label>
      </div>

      <div>
        <label>
          통증이 얼마나 지속되나요?
          <input
            type="radio"
            v-model="survey_data.pain_duration"
            value="lest_than_10m"
            placeholder="여기를 수정해보세요"
          />10분 미만
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_duration"
            value="from_10m_to_1h"
            placeholder="여기를 수정해보세요"
          />
          10분-1시간
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_duration"
            value="more_than_1h"
            placeholder="여기를 수정해보세요"
          />
          1시간이상
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_duration"
            value="all_day"
            placeholder="여기를 수정해보세요"
          />
          하루종일
          <br />
        </label>
      </div>

      <div>
        <label>
          통증이 주기적으로 있나요?
          <input
            type="radio"
            v-model="survey_data.pain_repeated"
            value="repeat"
            placeholder="여기를 수정해보세요"
          />반복됩니다.
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_repeated"
            value="no_repeat"
            placeholder="여기를 수정해보세요"
          />단발성입니다
          <br />
        </label>
      </div>

      <div>
        <label>
          하루에 얼마나 자주 아프세요?
          <input
            type="radio"
            v-model="survey_data.pain_per_day"
            value="0_to_1"
            placeholder="여기를 수정해보세요"
          />
          0-1회
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_per_day"
            value="2_to_3"
            placeholder="여기를 수정해보세요"
          />
          2-3회
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_per_day"
            value="4_to_5"
            placeholder="여기를 수정해보세요"
          />
          4-5회
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_per_day"
            value="more_than_6"
            placeholder="여기를 수정해보세요"
          />
          6회이상
          <br />
        </label>
      </div>

      <div>
        <label>
          통증이 점점 심해지나요?
          <input
            type="radio"
            v-model="survey_data.pain_worse"
            value="True"
            placeholder="여기를 수정해보세요"
          />예
          <br />
          <input
            type="radio"
            v-model="survey_data.location_move"
            value="False"
            placeholder="여기를 수정해보세요"
          />아니오
          <br />
        </label>
      </div>

      <div>
        <label>
          이전에도 비슷한 통증이 있던적이 있나요?
          <input
            type="radio"
            v-model="survey_data.pain_experience"
            value="True"
            placeholder="여기를 수정해보세요"
          />예
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_experience"
            value="False"
            placeholder="여기를 수정해보세요"
          />아니오
          <br />
        </label>
      </div>
    </div>
    <div id="port3">
      <span class="span">Section3</span>
      <div>
        <label>
          통증의 양상
          <input
            type="radio"
            v-model="survey_data.pain_character"
            value="crushing"
            placeholder="여기를 수정해보세요"
          />쥐어짜듯
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_character"
            value="burning"
            placeholder="여기를 수정해보세요"
          />
          타는듯
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_character"
            value="stabbing"
            placeholder="여기를 수정해보세요"
          />
          베이듯
          <br />
          <input
            type="radio"
            v-model="survey_data.pain_character"
            value="splitting"
            placeholder="여기를 수정해보세요"
          />찢어지듯
          <br />
        </label>
      </div>

      <div>
        <label>
          통증점수
          <input
            type="range"
            min="0"
            max="10"
            v-model="survey_data.pain_score"
            placeholder="여기를 수정해보세요"
          />
        </label>
      </div>

      <div>
        <label>
          동반되는 증상이 있나요?(소화기)
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="change of appetite"
            placeholder="여기를 수정해보세요"
          />식욕감소
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="nausea"
            placeholder="여기를 수정해보세요"
          />구역질
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="vomiting"
            placeholder="여기를 수정해보세요"
          />
          구토
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="vomiting blood"
            placeholder="여기를 수정해보세요"
          />
          토혈
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="abdominal inflation"
            placeholder="여기를 수정해보세요"
          />
          복부팽만
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="lump on abdomen"
            placeholder="여기를 수정해보세요"
          />
          복부종괴
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="constipation"
            placeholder="여기를 수정해보세요"
          />
          변비
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="diarrhea"
            placeholder="여기를 수정해보세요"
          />
          설사
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="rectal_bleeding"
            placeholder="여기를 수정해보세요"
          />
          혈변
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="melena"
            placeholder="여기를 수정해보세요"
          />
          흑색변
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="steatorrhea"
            placeholder="여기를 수정해보세요"
          />
          지방변
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="jaundice"
            placeholder="여기를 수정해보세요"
          />
          황달
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_digestive"
            value="nothing"
            placeholder="여기를 수정해보세요"
          />
          해당사항 없음
          <br />
        </label>
      </div>
    </div>

    <div id="port4">
      <span class="span">Section4</span>
      <div>
        <label>
          동반되는 증상이 있나요?(소화기)
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_circulatory"
            value="chest pain"
            placeholder="여기를 수정해보세요"
          />가슴통증
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_circulatory"
            value="shortness of breah"
            placeholder="여기를 수정해보세요"
          />호흡곤란
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_circulatory"
            value="cough"
            placeholder="여기를 수정해보세요"
          />
          기침
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_circulatory"
            value="runny nose"
            placeholder="여기를 수정해보세요"
          />
          콧물
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_circulatory"
            value="nothing"
            placeholder="여기를 수정해보세요"
          />
          해당사항 없음
        </label>
      </div>

      <div>
        <label>
          동반되는 증상이 있나요?(부인과)
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_gynecology"
            value="colporrhagia"
            placeholder="여기를 수정해보세요"
          />질출혈
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_gynecology"
            value="leukorrhea"
            placeholder="여기를 수정해보세요"
          />질분비물
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_gynecology"
            value="menstrual cycle change"
            placeholder="여기를 수정해보세요"
          />
          생리주기변화
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_gynecology"
            value="pregnant possibility"
            placeholder="여기를 수정해보세요"
          />
          임신가능성
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_gynecology"
            value="nothing"
            placeholder="여기를 수정해보세요"
          />
          해당사항 없음
        </label>
      </div>

      <div>
        <label>
          동반되는 증상이 있나요?(전신)
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_whole_body"
            value="fever"
            placeholder="여기를 수정해보세요"
          />발열
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_whole_body"
            value="chilling"
            placeholder="여기를 수정해보세요"
          />오한
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_whole_body"
            value="fatigue"
            placeholder="여기를 수정해보세요"
          />
          피로
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_whole_body"
            value="weight change"
            placeholder="여기를 수정해보세요"
          />
          체중변화
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_whole_body"
            value="sweating"
            placeholder="여기를 수정해보세요"
          />
          식은땀
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_whole_body"
            value="sleep disturbance"
            placeholder="여기를 수정해보세요"
          />
          수면곤란
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_whole_body"
            value="headache"
            placeholder="여기를 수정해보세요"
          />
          두통
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_whole_body"
            value="nothing"
            placeholder="여기를 수정해보세요"
          />
          해당사항 없음
        </label>
      </div>

      <div>
        <label>
          동반되는 증상이 있나요?(비뇨기)
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_urinary"
            value="painful urination"
            placeholder="여기를 수정해보세요"
          />배뇨통
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_urinary"
            value="chnage the quantity of urine"
            placeholder="여기를 수정해보세요"
          />소변량변화
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_urinary"
            value="red urine"
            placeholder="여기를 수정해보세요"
          />
          혈뇨
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_urinary"
            value="foamy urine"
            placeholder="여기를 수정해보세요"
          />
          거품뇨
          <br />
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_urinary"
            value="frequency"
            placeholder="여기를 수정해보세요"
          />
          잦은 소변
          <input
            type="checkbox"
            v-model="survey_data.associated_symptom_urinary"
            value="nothing"
            placeholder="여기를 수정해보세요"
          />
          해당사항 없음
        </label>
      </div>

      <div>
        <label>
          증상 후 달라진 요인이 있나요
          <input
            type="checkbox"
            v-model="survey_data.factor"
            value="after meal"
            placeholder="여기를 수정해보세요"
          />식사후 심해짐
          <br />
          <input
            type="checkbox"
            v-model="survey_data.factor"
            value="no meal"
            placeholder="여기를 수정해보세요"
          />공복에심해짐
          <br />
          <input
            type="checkbox"
            v-model="survey_data.factor"
            value="after alchol"
            placeholder="여기를 수정해보세요"
          />
          음주후 심해짐
          <br />
          <input
            type="checkbox"
            v-model="survey_data.factor"
            value="posture"
            placeholder="여기를 수정해보세요"
          />
          자세에따라 통증변화
          <br />
          <input
            type="checkbox"
            v-model="survey_data.factor"
            value="urination"
            placeholder="여기를 수정해보세요"
          />
          배뇨시 통증변화
          <input
            type="checkbox"
            v-model="survey_data.factor"
            value="defecation"
            placeholder="여기를 수정해보세요"
          />
          배변시 통증변화
          <input
            type="checkbox"
            v-model="survey_data.factor"
            value="nothing"
            placeholder="여기를 수정해보세요"
          />
          해당사항 없음
        </label>
      </div>
      <div>
        <label>
          기타 요인이 있나요?
          <input type="text" v-model="survey_data.other_factor" placeholder="여기를 수정해보세요" />
        </label>
      </div>

      <div>
        <label>
          과거 복부 관련 경험이 있나요?
          <input
            type="checkbox"
            v-model="survey_data.abdomen_relevant"
            value="abdomen_hurted"
            placeholder="여기를 수정해보세요"
          />
          복부를 다친 적이 있음
          <input
            type="checkbox"
            v-model="survey_data.abdomen_relevant"
            value="abdomen_surgery"
            placeholder="여기를 수정해보세요"
          />
          복부 수술을 받은 적이 있음
          <input
            type="checkbox"
            v-model="survey_data.abdomen_relevant"
            value="abdomen_nothing"
            placeholder="여기를 수정해보세요"
          />
          해당없음
        </label>
      </div>
    </div>
    <input type="submit" class="button" name="submit" @click="survey({survey_data})" value="제출" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "scroll",
  data() {
    return {
      survey_data: {
        symptom_start: "",
        symptom_start_less_than_month: "",
        fast_or_slow: "",
        symtpon_situation: "",
        symptom_location: "",
        location_move: "",
        location_move_how: "",
        pain_spread: "",
        pain_spread_where: "",
        pain_duration: "",
        pain_repeated: "",
        pain_per_day: "",
        pain_worse: "",
        pain_experience: "",
        pain_character: "",
        pain_score: "",
        associated_symptom_digestive: [],
        associated_symptom_circulatory: [],
        associated_symptom_gynecology: [],
        associated_symptom_whole_body: [],
        associated_symptom_urinary: [],
        associated_symptom_others: [],
        factor: [],
        other_factor: "",
        abdomen_relevant: []
      }
    };
  },
  methods: {
    onItemChanged() {},
    ...mapActions(["survey"])
  }
};
</script>

<style scoped>
.span {
  font-size: 3rem;
  color: white;
  font-family: "raleway";
  font-weight: 200;
}
.scrollnav {
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 6%;
  font-family: raleway;
}
.scrollactive-item {
  color: black;
  font-weight: 500;
}

#port1 {
  padding-top: 15%;
  padding-right: 50%;
  width: 100%;
  height: 100vh;
  background-color: orange;
}
#port2 {
  padding-top: 15%;
  padding-right: 50%;
  width: 100%;
  height: 100vh;
  background-color: green;
}
#port3 {
  padding-top: 15%;
  padding-right: 50%;
  width: 100%;
  height: 100vh;
  background-color: cadetblue;
}
#port4 {
  padding-top: 15%;
  padding-right: 50%;
  width: 100%;
  height: 100vh;
  background-color: darkolivegreen;
}
</style>
