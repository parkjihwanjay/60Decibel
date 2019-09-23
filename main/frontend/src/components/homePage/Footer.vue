<template>
  <div class="footer">
    <div class="sections">
      <div class="company">
        <p class="header">소개</p>

        <img class="img" src="../../assets/footer_logo.png" />
        <p class="intro">
          60데시벨과 함께
          더 나은 진료 서비스를 경험해보세요.
        </p>
        <div class="company-main">
          <p>대표 : 김아무개</p>
          <p>SNS : instagram / facebook</p>
          <p>주소 : 성북구 안암로 7가 고려대학교</p>
        </div>
      </div>

      <div class="navigation">
        <p class="header">사이트맵</p>
        <div class="main">
          <router-link :to="{  name:'login' }">LOGIN</router-link>
          <router-link :to="{  name:'signup' }">SIGNUP</router-link>

          <router-link :to="{  name:'about' }">ABOUT</router-link>

          <router-link :to="{ name:'card' }">CARD</router-link>

          <router-link :to="{ name:'profiles' }">PROFILE</router-link>
        </div>
      </div>
      <div class="legal">
        <p class="header">약관</p>
        <a href="#">이용약관</a>

        <a href="#">회원정보처리방침</a>
      </div>

      <div class="contect">
        <p class="header">문의</p>
        <p>전화번호 : 010-1234-5678</p>
        <p>메일 : dev60db@60db.com</p>
      </div>
    </div>
    <div class="copy">
      <p class="copyright">COPYRIGHT &copy; 2019 60dB</p>
      <p class="copyright">ALL RIGHTS RESERVED</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  max-height: 650px;
}
.sections {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 900px;
  margin-bottom: 2rem;
  font-size: 0.85rem;
}
.header {
  margin-bottom: 0.8rem;

  color: #414141;
  font-size: 0.9rem;
  font-weight: 700;
}
/* company */
.company {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 320px;
  height: 250px;
  margin-right: 3rem;
  line-height: 1.4rem;
}
.img {
  width: 200px;
  height: 110px;
  margin-left: 2rem;
}
.intro {
  color: #0d4d8d;
  font-size: 0.9em;
  margin-bottom: 0.8rem;
}
/* site-navigation */
.navigation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 180px;
  line-height: 1.4rem;
}
/* legal */
.legal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 180px;
  line-height: 1.4rem;
}
.navAndLegal {
  display: flex;
  align-items: flex-start;
}
/* contect */
.contect {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 180px;
  line-height: 1.4rem;
}
/* copyright */
.copy {
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.4;
}
@media (max-width: 768px) {
  .footer {
    width: 100%;
    max-height: 650px;
  }
  .sections {
    height: 580px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    min-width: 70%;
    margin: 0 auto;
  }
  .header {
    margin-bottom: 0.5rem;
  }
  /* company */
  .company {
    margin: 0;
  }
  .intro,
  .img {
    margin: 0 auto;
  }
  .intro {
    margin-bottom: 1rem;
  }

  /* nav and legal */

  .navigation {
    display: inline;
  }
  .navigation a {
    margin-right: 0.8rem;
  }
  .copy {
    margin-bottom: 1rem;
  }
}
</style>
