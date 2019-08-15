<template>
  <div class="main">
    <p class="txt-head-big txt-bold">Improve the communication</p>
    <p class="txt-main">
      60DB는 청각장애인과 의사 사이의 진료대화가
      <br />원활하고 활발하게 될 수 있도록 돕습니다.
    </p>
    <img src="../../assets/about_diagnosis.png" class="img-main-background" />
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.txt-head-big {
  text-align: center;
  color: #0d4d8d;
  font-size: 1.6rem;
  padding-top: 3rem;
  padding-bottom: 3%;
}
.txt-bold {
  font-weight: bolder;
  font-weight: 800;
}
.txt-main {
  text-align: center;
  font-size: 1.05rem;
  line-height: 140%;
  margin-bottom: 3rem;
}
.img-main {
  margin: 0 auto;
  margin-top: 5%;
  width: 50%;
}
.img-main-background {
  /* background-image: url("../../assets/about_diagnosis.png"); */
  width: 100%;
  height: 300px;
  /* Center and scale the image nicely */
  /* background-position: center;
  background-repeat: no-repeat; */
  /* background-size: cover; */
  /* Add the blur effect */
  /* filter: blur(1.2px);
  -webkit-filter: blur(1.2px);
  z-index: -1; */
  /* TODO: blur only the background*/
}
/* .img-main-animation {
  padding-top: 25%;
  width: 100%;
  vertical-align: center;
} */
/* .icon {
  width: 13vh;
  height: 13vh;
}
.patient {
  padding-left: 10%;
}
.doctor {
  float: right;
  padding-right: 10%;
} */
@media (min-width: 768px) {
  .img-main-background {
    width: 650px;
    height: 400px;
  }
}
</style>