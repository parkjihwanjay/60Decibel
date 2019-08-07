<!-- // <template>
//   <div class="scroll">
//     <scrollactive
//       class="scrollnav"
//       v-on:itemchanged="onItemChanged"
//       :offset="30"
//       :duration="600"
//       :modifyUrl="false"
//       bezier-easing-value=".5,0,.35,1"
//     >
//       <a href="#port1" class="scrollactive-item">Section1</a>
//       <a href="#port2" class="scrollactive-item">Section2</a>
//       <a href="#port3" class="scrollactive-item">Section3</a>
//       <a href="#port4" class="scrollactive-item">Section4</a>
//     </scrollactive>
//     <div id="port1">
//       <span class="span">Section1</span>
//     </div>
//     <div id="port2">
//       <span class="span">Section2</span>
//     </div>
//     <div id="port3">
//       <span class="span">Section3</span>
//     </div>
//     <div id="port4">
//       <span class="span">Section4</span>
//     </div>
//   </div>
// </template>

// <script>
// export default {
//   name: "scroll",
//   data() {
//     return {};
//   },
//   methods: {
//     onItemChanged() {}
//   }
// };
// </script>

// <style scoped>
// .span {
//   font-size: 3rem;
//   color: white;
//   font-family: "raleway";
//   font-weight: 200;
// }
// .scrollnav {
//   position: fixed;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   background-color: white;
//   width: 100%;
//   height: 6%;
//   font-family: raleway;
// }
// .scrollactive-item {
//   color: black;
//   font-weight: 500;
// }

// #port1 {
//   padding-top: 15%;
//   padding-right: 50%;
//   width: 100%;
//   height: 100vh;
//   background-color: orange;
// }
// #port2 {
//   padding-top: 15%;
//   padding-right: 50%;
//   width: 100%;
//   height: 100vh;
//   background-color: green;
// }
// #port3 {
//   padding-top: 15%;
//   padding-right: 50%;
//   width: 100%;
//   height: 100vh;
//   background-color: cadetblue;
// }
// #port4 {
//   padding-top: 15%;
//   padding-right: 50%;
//   width: 100%;
//   height: 100vh;
//   background-color: darkolivegreen;
// }
// </style> -->

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

      <div class="question-body">
        <v-expansion-panels v-model="expand" accordion class="expansion">
          <v-expansion-panel class="q1-1">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q1.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증이 언제부터 시작되었나요?
              <br />
              <br />
              <input
                type="radio"
                value="less_than_month"
                v-model="survey_data.symptom_start"
                class="ans animate fadeInRightBig three"
              />한 달이 안됐습니다.
              <br />
              <input
                type="radio"
                value="more_than_month"
                v-model="survey_data.symptom_start"
                class="ans animate fadeInRightBig four"
              />한 달이 넘었습니다.
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="q2-1">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q2.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증이 언제 시작되었나요?
              <br />
              <br />
              <input
                type="month"
                v-model="survey_data.symptom_start_less_than_month"
                class="ans animate fadeInRightBig three"
                placeholder="여기를 수정해보세요"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q3-3">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q3.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증이 급격히 생겼나요?
              서서히 생겼나요?
              <br />
              <br />
              <input
                type="radio"
                v-model="survey_data.fast_or_slow"
                value="fast"
                class="ans animate fadeInRightBig three"
                placeholder="여기를 수정해보세요"
              />
              갑자기
              <br />
              <input
                type="radio"
                v-model="survey_data.fast_or_slow"
                value="slow"
                class="ans animate fadeInRightBig four"
                placeholder="여기를 수정해보세요"
              />서서히
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q3-3">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q4.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              처음 복통이 시작되었을때 어떤 상황이었나요?
              <br />
              <br />
              <input
                v-model="survey_data.symtpom_situation"
                class="header animate fadeInDown two"
                placeholder="예시)회식에서.."
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="question-body">
        <v-expansion-panels v-model="expand" accordion class="expansion">
          <v-expansion-panel class="q1-1">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q1.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              배의 어느 부위가 아픈가요?
              <br />
              <br />
              <input
                type="checkbox"
                v-model="survey_data.symptom_location"
                value="whole abdomen"
                class="ans animate fadeInRightBig three"
                placeholder="여기를 수정해보세요"
              />복부전체
              <br />
              <input
                type="checkbox"
                v-model="survey_data.symptom_location"
                class="ans animate fadeInRightBig four"
                value="sternal"
                placeholder="여기를 수정해보세요"
              />명치부위
              <br />
              <input
                type="checkbox"
                v-model="survey_data.symptom_location"
                class="ans animate fadeInRightBig five"
                value="umbilicus"
                placeholder="여기를 수정해보세요"
              />배꼽부위
              <br />
              <input
                type="checkbox"
                v-model="survey_data.symptom_location"
                class="ans animate fadeInRightBig six"
                value="flank"
                placeholder="여기를 수정해보세요"
              />옆구리
              <br />
              <input
                type="checkbox"
                v-model="survey_data.symptom_location"
                class="ans animate fadeInRightBig seven"
                value="LUQ"
                placeholder="여기를 수정해보세요"
              />왼쪽 위
              <br />
              <input
                type="checkbox"
                v-model="survey_data.symptom_location"
                class="ans animate fadeInRightBig eight"
                value="LLQ"
                placeholder="여기를 수정해보세요"
              />오른쪽 위
              <br />
              <input
                type="checkbox"
                v-model="survey_data.symptom_location"
                value="RUQ"
                class="ans animate fadeInRightBig nine"
                placeholder="여기를 수정해보세요"
              />왼쪽 아래
              <br />
              <input
                type="checkbox"
                v-model="survey_data.symptom_location"
                class="ans animate fadeInRightBig ten"
                value="RLQ"
                placeholder="여기를 수정해보세요"
              />오른쪽 아래
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q1-2">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q2.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              아픈 부위가 이동하나요?
              <br />
              <br />
              <input
                type="radio"
                v-model="survey_data.location_move"
                value="True"
                class="ans animate fadeInRightBig three"
              />예
              <br />
              <input
                type="radio"
                v-model="survey_data.location_move"
                value="False"
                class="ans animate fadeInRightBig four"
              />아니오
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q1-3">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q3.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              아픈 부위가 어떻게 이동하나요?
              <br />
              <br />
              <input
                v-model="survey_data.location_move_how"
                class="ans animate fadeInRightBig three"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="q1-3">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q4.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증이 퍼지나요?
              <br />
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_spread"
                value="True"
                class="ans animate fadeInRightBig three"
              />예
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_spread"
                value="False"
                class="ans animate fadeInRightBig three"
              />아니오
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
    <div id="port2">
      <span class="span">Section2</span>

      <div class="question-body">
        <v-expansion-panels v-model="expand" accordion class="expansion">
          <v-expansion-panel class="q1-1">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q1.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증이 어디로 퍼지나요?
              <br />
              <br />
              <input
                type="text"
                v-model="survey_data.pain_spread_where"
                class="ans animate fadeInRightBig three"
                placeholder="여기를 수정해보세요"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q1-2">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q2.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증이 얼마나 지속되나요?
              <br />
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_duration"
                value="lest_than_10m"
                class="ans animate fadeInRightBig three"
                placeholder="여기를 수정해보세요"
              />10분 미만
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_duration"
                value="from_10m_to_1h"
                class="ans animate fadeInRightBig four"
                placeholder="여기를 수정해보세요"
              />
              10분-1시간
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_duration"
                value="more_than_1h"
                class="ans animate fadeInRightBig five"
                placeholder="여기를 수정해보세요"
              />
              1시간이상
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_duration"
                value="all_day"
                class="ans animate fadeInRightBig six"
                placeholder="여기를 수정해보세요"
              />
              하루종일
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q1-3">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q3.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증이 주기적으로 있나요?
              <br />
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_repeated"
                class="ans animate fadeInRightBig three"
                value="repeat"
                placeholder="여기를 수정해보세요"
              />반복됩니다.
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_repeated"
                class="ans animate fadeInRightBig four"
                value="no_repeat"
                placeholder="여기를 수정해보세요"
              />단발성입니다
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="question-body">
        <v-expansion-panels v-model="expand" accordion class="expansion">
          <v-expansion-panel class="q1-1">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q1.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증의 빈도는 어떻게 되세요?
              <br />
              <br />통증의 빈도는
              <select
                class="ans animate fadeInRightBig three"
                v-model="survey_data.pain_how_often_day"
                name="job"
              >
                <option value="one_day">하루에</option>
                <option value="one_week">일주일</option>
              </select>

              <select
                class="ans animate fadeInRightBig three"
                v-model="survey_data.pain_how_often_many"
                name="job"
              >
                <option value="0_to_1">0-1회</option>
                <option value="2_to_3">2-3회</option>
                <option value="4_to_5">4-5회</option>
                <option value="more_than_6">6회이상</option>
              </select>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q1-2">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q2.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증이 점점 심해지나요?
              <br />
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_worse"
                class="ans animate fadeInRightBig three"
                value="True"
                placeholder="여기를 수정해보세요"
              />예
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_worse"
                class="ans animate fadeInRightBig four"
                value="False"
              />아니오
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q1-3">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q3.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              이전에도 비슷한 통증이 있던적이 있나요?
              <br />
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_experience"
                class="ans animate fadeInRightBig three"
                value="True"
                placeholder="여기를 수정해보세요"
              />예
              <br />
              <input
                type="radio"
                v-model="survey_data.pain_experience"
                class="ans animate fadeInRightBig four"
                value="False"
                placeholder="여기를 수정해보세요"
              />아니오
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="question-body">
        <v-expansion-panels v-model="expand" accordion class="expansion">
          <v-expansion-panel class="q1-1">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q1.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증의 양상
              <br />
              <br />
              <input
                type="radio"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.pain_character"
                value="crushing"
                placeholder="여기를 수정해보세요"
              />쥐어짜듯
              <br />
              <input
                type="radio"
                class="ans animate fadeInRightBig four"
                v-model="survey_data.pain_character"
                value="burning"
                placeholder="여기를 수정해보세요"
              />
              타는듯
              <br />
              <input
                type="radio"
                class="ans animate fadeInRightBig five"
                v-model="survey_data.pain_character"
                value="stabbing"
                placeholder="여기를 수정해보세요"
              />
              베이듯
              <br />
              <input
                type="radio"
                class="ans animate fadeInRightBig six"
                v-model="survey_data.pain_character"
                value="splitting"
                placeholder="여기를 수정해보세요"
              />찢어지듯
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q1-2">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q2.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              통증점수
              <br />
              <br />
              <input
                type="range"
                class="ans animate fadeInRightBig three"
                min="0"
                max="10"
                v-model="survey_data.pain_score"
                placeholder="여기를 수정해보세요"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q1-3">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q3.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              소화기(동반된 증상을 모두 선택해주세요)
              <br />
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="change of appetite"
                placeholder="여기를 수정해보세요"
              />식욕감소
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="nausea"
                placeholder="여기를 수정해보세요"
              />구역질
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="vomiting"
                placeholder="여기를 수정해보세요"
              />
              구토
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="vomiting blood"
                placeholder="여기를 수정해보세요"
              />
              토혈
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="abdominal inflation"
                placeholder="여기를 수정해보세요"
              />
              복부팽만
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="lump on abdomen"
                placeholder="여기를 수정해보세요"
              />
              복부종괴
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="constipation"
                placeholder="여기를 수정해보세요"
              />
              변비
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="diarrhea"
                placeholder="여기를 수정해보세요"
              />
              설사
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="rectal_bleeding"
                placeholder="여기를 수정해보세요"
              />
              혈변
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="melena"
                placeholder="여기를 수정해보세요"
              />
              흑색변
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="steatorrhea"
                placeholder="여기를 수정해보세요"
              />
              지방변
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="jaundice"
                placeholder="여기를 수정해보세요"
              />
              황달
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="nothing"
                placeholder="여기를 수정해보세요"
              />
              해당사항 없음
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
    <div id="port3">
      <span class="span">Section3</span>
      <div class="question-body">
        <v-expansion-panels v-model="expand" accordion class="expansion">
          <v-expansion-panel class="q1-1">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q1.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              순환기/호흡기(동반된 증상을 모두 선택해주세요)
              <br />
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_circulatory"
                value="chest pain"
                placeholder="여기를 수정해보세요"
              />가슴통증
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_circulatory"
                value="shortness of breah"
                placeholder="여기를 수정해보세요"
              />호흡곤란
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_circulatory"
                value="cough"
                placeholder="여기를 수정해보세요"
              />
              기침
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_circulatory"
                value="runny nose"
                placeholder="여기를 수정해보세요"
              />
              콧물
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_circulatory"
                value="nothing"
                placeholder="여기를 수정해보세요"
              />
              해당사항 없음
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q1-2">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q2.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              동반되는 증상이 있나요?(부인과)
              <br />
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_gynecology"
                value="colporrhagia"
                placeholder="여기를 수정해보세요"
              />질출혈
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_gynecology"
                value="leukorrhea"
                placeholder="여기를 수정해보세요"
              />질분비물
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_gynecology"
                value="menstrual cycle change"
                placeholder="여기를 수정해보세요"
              />
              생리주기변화
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_gynecology"
                value="pregnant possibility"
                placeholder="여기를 수정해보세요"
              />
              임신가능성
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_gynecology"
                value="nothing"
                placeholder="여기를 수정해보세요"
              />
              해당사항 없음
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="q1-3">
            <v-expansion-panel-header class="header animate fadeInDown two">
              Q3.
              <template v-slot:actions>
                <v-icon></v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content animate fadeInUp one">
              전신증상(동반된 증상을 모두 선택해주세요)
              <br />
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="fever"
                placeholder="여기를 수정해보세요"
              />발열
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="chilling"
                placeholder="여기를 수정해보세요"
              />오한
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="fatigue"
                placeholder="여기를 수정해보세요"
              />
              피로
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="weight change"
                placeholder="여기를 수정해보세요"
              />
              체중변화
              <br />
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="sweating"
                placeholder="여기를 수정해보세요"
              />
              식은땀
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="sleep disturbance"
                placeholder="여기를 수정해보세요"
              />
              수면곤란
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="headache"
                placeholder="여기를 수정해보세요"
              />
              두통
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="nothing"
                placeholder="여기를 수정해보세요"
              />
              해당사항 없음
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>

    <div class="question-body">
      <v-expansion-panels v-model="expand" accordion class="expansion">
        <v-expansion-panel class="q1-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q1.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            비뇨기(동반된 증상을 모두 선택해주세요)
            <br />
            <br />
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.associated_symptom_urinary"
              value="painful urination"
              placeholder="여기를 수정해보세요"
            />배뇨통
            <br />
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.associated_symptom_urinary"
              value="chnage the quantity of urine"
              placeholder="여기를 수정해보세요"
            />소변량변화
            <br />
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.associated_symptom_urinary"
              value="red urine"
              placeholder="여기를 수정해보세요"
            />
            혈뇨
            <br />
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.associated_symptom_urinary"
              value="foamy urine"
              placeholder="여기를 수정해보세요"
            />
            거품뇨
            <br />
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.associated_symptom_urinary"
              value="frequency"
              placeholder="여기를 수정해보세요"
            />
            잦은 소변
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.associated_symptom_urinary"
              value="nothing"
              placeholder="여기를 수정해보세요"
            />
            해당사항 없음
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="q1-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q2
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            그외 동반되는 증상이 있나요?
            <br />
            <br />
            <input
              class="ans animate fadeInRightBig three"
              v-model="survey_data.associated_symptom_others"
              placeholder="여기를 수정해보세요"
            />
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="q1-2">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q3
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            증상 후 달라진 요인이 있나요
            <br />
            <br />
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.factor"
              value="after meal"
              placeholder="여기를 수정해보세요"
            />식사후 심해짐
            <br />
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.factor"
              value="no meal"
              placeholder="여기를 수정해보세요"
            />공복에심해짐
            <br />
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.factor"
              value="after alchol"
              placeholder="여기를 수정해보세요"
            />
            음주후 심해짐
            <br />
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.factor"
              value="posture"
              placeholder="여기를 수정해보세요"
            />
            자세에따라 통증변화
            <br />
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.factor"
              value="urination"
              placeholder="여기를 수정해보세요"
            />
            배뇨시 통증변화
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.factor"
              value="defecation"
              placeholder="여기를 수정해보세요"
            />
            배변시 통증변화
            <input
              type="checkbox"
              class="ans animate fadeInRightBig three"
              v-model="survey_data.factor"
              value="nothing"
              placeholder="여기를 수정해보세요"
            />
            해당사항 없음
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q4
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            기타 요인이 있나요?
            <br />
            <br />
            <input
              class="ans animate fadeInRightBig three"
              type="text"
              v-model="survey_data.other_factor"
              placeholder="여기를 수정해보세요"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q5
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            과거 복부 관련 경험이 있나요?
            <br />
            <br />
            <input
              type="checkbox"
              v-model="survey_data.abdomen_relevant"
              class="ans animate fadeInRightBig three"
              value="abdomen_hurted"
              placeholder="여기를 수정해보세요"
            />
            복부를 다친 적이 있음
            <input
              type="checkbox"
              v-model="survey_data.abdomen_relevant"
              class="ans animate fadeInRightBig three"
              value="abdomen_surgery"
              placeholder="여기를 수정해보세요"
            />
            복부 수술을 받은 적이 있음
            <input
              type="checkbox"
              v-model="survey_data.abdomen_relevant"
              class="ans animate fadeInRightBig three"
              value="abdomen_nothing"
              placeholder="여기를 수정해보세요"
            />
            해당없음
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <input type="submit" class="button" name="submit" @click="survey" value="제출" />
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
        symtpom_situation: "",
        symptom_location: [],
        location_move: "",
        location_move_how: "",
        pain_spread: "",
        pain_spread_where: "",
        pain_duration: "",
        pain_repeated: "",
        pain_how_often_day: "",
        pain_how_often_many: "",
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
    ...mapActions(["survey"]),
    survey() {
      console.log(this.survey_data);
    }
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