// import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// Vue.use(createRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // webpackChunkName webpack->関連する複数ファイルを1つにまとめるバンドラー
    // より大規模アプリケーションの場合はwebpackChunkNameを採用して~.jsとして吐き出す（関数の戻り値でcomponentを返す）
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
