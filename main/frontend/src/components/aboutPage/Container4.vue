<template>
  <div>
    <div class="under-line">
      <p class="txt-main">
        <span>Members</span>
      </p>
    </div>
    <div>
      <p class="txt-head">고려대 의과대학</p>
      <p class="txt-bold">컨텐츠 개발</p>
      <img class="icon" src="../../assets/about_doc_1.png" />
      <p>정형화된 진료 대화를 정리하고, 의대 교수님들(이민구 교수님, 김은선 교수님)의 검증을 거쳐 양질의 컨텐츠를 개발합니다.</p>
    </div>
    <div>
      <p class="txt-head">고려대 장애인권위원회</p>
      <p class="txt-bold">마케팅</p>
      <img class="icon" src="../../assets/about_kuda.png" />
      <p>제작된 컨텐츠와 어플리케이션이 실제 사용자에게 적합하고 실용성이 있는지를 알아보고, 지속적으로 피드백을 제공합니다.</p>
    </div>
    <div>
      <p class="txt-head">고려대 </h3>
      <p class="txt-bold">개발</p>
      <img class="icon" src="../../assets/about_kulion.png" />
      <p>대화 컨텐츠를 사용하기 편리하도록 스마트폰 어플로 제작할 예정입니다. 현재, 베타테스트 진행을 위한 웹앱 제작중에 있습니다.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.txt-head {
  font-size: 1.6rem;
}
.txt-bold {
  font-weight: bolder;
  font-weight: 800;
}
.txt-main {
  font-size: 1.05rem;
}
.under-line {
  height: 20px;
  text-align: center;
}
span {
  color: #0d4d8d;
  font-weight: 700;
  display: inline-block;
  vertical-align: center;
  border-bottom: 1px solid;
}
.icon {
  width: 75px;
  height: 75px;
}
</style>