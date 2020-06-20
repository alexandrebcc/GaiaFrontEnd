 
import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
  }
});

export default router;