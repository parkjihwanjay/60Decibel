<template>
  <div class="con4">
    <div data-aos="fade-up" data-aos-duration="1200">
      <div class="con4-txt">60데시벨과 함께하는 사람들</div>
      <div class="flex">
        <div class="underline"></div>
      </div>
    </div>
    <div data-aos="fade-up" data-aos-duration="1400" data-aos-delay="200">
      <div class="icons">
        <img class="icon1" src="../../assets/medi.png" />
        <img class="icon2" src="../../assets/60db.png" />
        <img class="icon3" src="../../assets/likelion.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.con4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 490px;
}
.con4-txt {
  margin-bottom: 1.4rem;
  color: #313131;
  font-weight: 500;
  font-size: 1.5rem;
}
.flex {
  display: flex;
  justify-content: center;
}
.underline {
  width: 15rem;
  height: 5vh;
  border-top: 1.5px solid rgba(160, 160, 160, 0.671);
  margin-bottom: 2rem;
}
.icons {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
.icon1 {
  width: 12rem;
  height: 4.5rem;
}
.icon2 {
  width: 8rem;
  height: 6rem;
  margin-bottom: 0.5rem;
}
.icon3 {
  width: 10.5rem;
  height: 2.5rem;
}
</style>

