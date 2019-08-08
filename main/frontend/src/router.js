import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Home from "./views/Home.vue";
// import { store } from "./store.js";
Vue.use(Router);

// const requireAuth = () => (to, from, next) => {
//   if (!localStorage.getItem["access_token"]) {
//     alert("먼저 로그인을 진행해주세요");
//     return next("/login");
//   }
// };

export default new Router({
  hashbang: false,
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/survey",
      // redirect: "/sec1",
      name: "survey",
      component: () => import("./views/Survey.vue"),
      children: [
        {
          path: "/sec1",
          name: "sec1",
          meta: {
            page: 1
          },
          component: () => import("./components/surveyPage/Sec1.vue")
        },
        {
          path: "/sec2",
          name: "sec2",
          meta: {
            page: 2
          },
          component: () => import("./components/surveyPage/Sec2.vue")
        },
        {
          path: "/sec3",
          name: "sec3",
          meta: {
            page: 3
          },
          component: () => import("./components/surveyPage/Sec3.vue")
        },
        {
          path: "/sec4",
          name: "sec4",
          meta: {
            page: 4
          },
          component: () => import("./components/surveyPage/Sec4.vue")
        },
        {
          path: "/sec5",
          name: "sec5",
          meta: {
            page: 5
          },
          component: () => import("./components/surveyPage/Sec5.vue")
        },
        {
          path: "/sec6",
          name: "sec6",
          meta: {
            page: 6
          },
          component: () => import("./components/surveyPage/Sec6.vue")
        }
      ]
    },
    {
      path: "/result",
      name: "result",
      // beforeEnter: requireAuth(),
      component: () => import("./views/Result.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./views/Signup.vue")
    },
    {
      path: "/profileupdate",
      name: "profileupdate",
      // beforeEnter: requireAuth,
      component: () => import("./views/ProfileUpdate.vue")
    },
    {
      path: "/profiles/:user",
      name: "profiles",
      // beforeEnter: requireAuth,
      component: () => import("./views/Profiles.vue")
    },
    {
      path: "/stomach/:id",
      name: "stomach-retrieve",
      component: () => import("./views/Result.vue")
    },
    {
      path: "/surveys/:author",
      name: "survey-history",
      component: () => import("./views/SurveyList.vue")
    },
    // 박지환 추가
    {
      path: "/survey_test",
      name: "survey_test",
      component: () => import("./components/surveyPage/example.vue")
    }
  ]
});
