# 60 Decibel

### 청각 장애인 환자들을 위한 오픈소스 모바일 문진표 서비스

![1569760987710](C:\Users\Equus\AppData\Roaming\Typora\typora-user-images\1569760987710.png)

### 문서 개요

---

#####  1. 개발 가이드라인

#####  2. 개발 동기

#####  3. 개발 팀 구성

#####  4. 오픈 소스로써의 가치

#####  5. Design Patterns

#####  6. 시사점

#####  7. 맺음말



#### 1. 가이드라인

---

##### 1-1) 문서를 시작하기 전에

- 스택 구성

  - Frontend는 Vue.js & Backend는 DRF(Django Rest Framework)를 사용했습니다.

    |            자바스크립트 기반 웹 프레임워크 Vue.js            |              파이썬 기반 백엔드 프레임워크 DRF               |
    | :----------------------------------------------------------: | :----------------------------------------------------------: |
    | ![vue.js에 대한 이미지 검색결과](https://www.fullstackpython.com/img/logos/vuejs-wide.png) | ![drf에 대한 이미지 검색결과](https://t1.daumcdn.net/cfile/tistory/9994C4475B17C3F224) |

  - 웹 프레임워크 사용 모듈

    |                         Vuetify                         |                 Axios(프론트 & 백엔드 통신)                  |               Vuex(로그인 & 문진표 상태 관리)                |
    | :-----------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
    | ![관련 이미지](https://kr.vuejs.org/images/vuetify.png) | ![axios에 대한 이미지 검색결과](https://assets.axios.com/8c7766945e1b76f1285485dba86f3d3a.png) | ![vuex에 대한 이미지 검색결과](https://blog.martinwork.co.kr/images/vue/vuex.png) |

  - 백엔드 프레임워크 사용 모듈

    - `Json Web Token`
    - `Django Cors Headers`

```
> git clone https://github.com/RyanKor/60DB.git

# main/frontend/package.json (Vue.js 모듈 설치 파일 위치로 이동)
> npm install (Vue.js 모듈 설치 진행) 

# 60db
> python -m venv 60db (가상환경 설치. pipenv or virtualenv 어떤 것이든 사용가능)
> source 60db/Script/activate
> (60db) pip install -r requirements.txt (백엔드 모듈 관련 부분 설치)
```

- 원활한 소프트웨어 활용을 위해 Package.json 과 requirements.txt에 명시된 모듈들을 모두 설치해주십시오.



##### 1-2) 용어에 관한 사항

- 의사들의 정확한 진단을 위해 의학 전문 용어가 사용되었습니다. 60 Decibel에 설문지 및 프로필 작성에 관한 PR을 보내주시는 개발자님들께선 용어 사용에 유념해 코드를 작성해주시면 감사하겠습니다.
  - 예) survey application 내의 models.py : 복부팽만, 복부종괴 등
- 문진카드 기능 수정 시, '촉진' 등 일부 용어 사용에 대해 수정 시 유념해주십시오. 



##### 1-3) 컴포넌트 구성에 관한 사항

- **60 Decibel의 초기 개발팀은 개발 경력 6개월 미만의 비전공생들로 구성**되었습니다. 따라서 컴포넌트 계층 및 Reusable한 컴포넌트 구성에 관한 기본 지식이 짧은 점 이해해주시기 바랍니다.

- 컴포넌트 구성

  ![1569763331817](C:\Users\Equus\AppData\Roaming\Typora\typora-user-images\1569763331817.png)

  

- 60 Decibel은 페이지와 기능에 따라 컴포넌트를 구분했다. 

  - aboutPage : 서비스의 목적 및 소개를 안내하는 컴포넌트다.
  - cardPage : 청각장애인의 의사와의 원활한 소통을 위해 포함시킨 문진 카드 기능이 담긴 컴포넌트다.
  - homePage : 페이지 접속 시 등장하는 메인 페이지를 관리하는 컴포넌트다. 
  - profilePage : 청각장애인의 프로필을 표시하는 컴포넌트다. 
  - profileUploadPage : 청각장애인의 프로필을 업데이트 하는 컴포넌트다.
  - registerPage : 로그인, 회원가입 기능 등을 관리하는 컴포넌트다.
  - resultsPage :  모바일 문진표를 작성하고 난 이후 결과값을 표시하는 컴포넌트다.
  - surveyPage : 모바일 문진표 작성과 관련한 페이지를 관리하는 컴포넌트다.



#### 2. 개발동기

---

> *개발자와 비개발자 모두가 이미 오픈소스에 큰 빚을 지고 있다. 일상생활에선 사물인터넷이 적용되는 가전제품부터 소프트웨어 개발에 직접적으로 영향을 주는 프레임워크 및 라이브러리 등이 필수불가결한 위치에 자리매김하고 있다. 오픈 소스가 환영받는 가장 큰 이유를 들라고 한다면, 오픈소스가 개발자 커뮤니티에 의해 검증되고 서비스 운용에 안정적인 코드를 배포할 수 있다는 점 때문일 것이다. 때문에 소프트웨어가 인간의 삶에 미치는 영향이 커질수록 오픈 소스 생태계도 함께 더 큰 역할을 맡게 될 것이다.*



