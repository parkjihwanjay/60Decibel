import {requireAuth, checkProfile} from './functions.js';
import store from '../store/store.js';

const Card = () => 
  import(/* webpackChunkName: "common" */"../views/Card.vue");

const Home = () => 
  import(/* webpackChunkName: "common" */"../views/Home.vue");

const About = () => 
  import(/* webpackChunkName: "common" */"../views/About.vue");

const Survey = () => 
  import(/* webpackChunkName: "common" */"../views/Survey.vue"); 

const Login = () => 
  import(/* webpackChunkName: "common" */"../views/Login.vue");

const Signup = () => 
  import(/* webpackChunkName: "common" */"../views/Signup.vue");

const ProfileUpdate = () => 
  import(/* webpackChunkName: "common" */"../views/ProfileUpdate.vue");

const Profiles = () => 
  import(/* webpackChunkName: "common" */"../views/Profiles.vue");

const SurveyList = () => 
  import(/* webpackChunkName: "common" */"../views/SurveyList.vue");

const Result = () => 
  import(/* webpackChunkName: "common" */"../views/Result.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/card",
    name: "card",
    component: Card
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/survey",
    beforeEnter: (async (to, from, next) => {
      store.commit('SET_LOADING', true);
      if(requireAuth() === 'login')
      {
        if(!checkProfile())
        {
          alert('프로필을 다 입력해주세요.');
          next('/profileupdate');
        }

        if(!store.state.profile)
          await store.dispatch('getProfileInfo')

        next();
      }
      else{
        next('/');
      }
    }) ,
    redirect: "/sec1",
    name: "survey",
    component: Survey,
    children: [
      {
        path: "/sec1",
        name: "sec1",
        meta: {
          page: 1
        },
        component: () => import("../components/surveyPage/Sec1.vue")
      },
      {
        path: "/sec2",
        name: "sec2",
        meta: {
          page: 2
        },
        component: () => import("../components/surveyPage/Sec2.vue")
      },
      {
        path: "/sec3",
        name: "sec3",
        meta: {
          page: 3
        },
        component: () => import("../components/surveyPage/Sec3.vue")
      },
      {
        path: "/sec4",
        name: "sec4",
        meta: {
          page: 4
        },
        component: () => import("../components/surveyPage/Sec4.vue")
      },
      {
        path: "/sec5",
        name: "sec5",
        meta: {
          page: 5
        },
        component: () => import("../components/surveyPage/Sec5.vue")
      },
      {
        path: "/sec6",
        name: "sec6",
        meta: {
          page: 6
        },
        component: () => import("../components/surveyPage/Sec6.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/profileupdate",
    name: "profileupdate",
    beforeEnter: async (to, from, next) => {
      store.commit('SET_LOADING', true);

      if(requireAuth() === 'login')
      {
        if(!store.state.profile)
          await store.dispatch("getProfileInfo")
        next();
      }
      else{
        next('/');
      }
    },
    component: ProfileUpdate
  },
  {
    path: "/profiles",
    name: "profiles",
    beforeEnter: async(to, from, next) => {
      store.commit('SET_LOADING', true);

      if(requireAuth() === 'login'){
        
        try{
          if(!store.state.profile)
            await store.dispatch("getProfileInfo");
          next();
        }
        catch(e){
          console.log(e);
        }
      }
      else{
        next('/');
      }
    },
    component: Profiles
  },
  {
    path: "/stomach/:id",
    name: "stomach-retrieve",
    beforeEnter: async (to, from, next) => {
      store.commit('SET_LOADING', true);

      if(requireAuth() === 'login'){
        if(!store.state.profile)
          await store.dispatch("getProfileInfo")
        await store.dispatch("getStomachInfo", to.params.id)
        next();
      }
      else{
        next('/');
      }
    },
    component: Result
  },
  {
    path: "/surveys",
    name: "survey-history",
    beforeEnter: async(to, from, next) => {
      store.commit('SET_LOADING', true);
      if(requireAuth() === 'login')
      {
        // if(!store.state.survey_history){
          await store.dispatch('getSurveyHistory');
        // }
        next();
      }
      else{
        next('/');
      }
    },
    component: SurveyList
  },
  {
    path : '*',
    beforeEnter : (to, from, next) => {
      alert("요청하시는 주소는 없는 주소입니다.");
      next('/');
    }
  },
]

export default routes;


