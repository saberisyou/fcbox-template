/*
 * @Author: 乐祥孚
 * @Date: 2021-05-12 15:28:19
 * @LastEditors: 乐祥孚
 * @LastEditTime: 2021-05-13 10:58:41
 * @Description: file content
 * @FilePath: \qiankun\frame\vue-prev-frame\src\main.js
 */
import Vue from "vue";
import { registerMicroApps, start } from "qiankun";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

registerMicroApps([
  {
    name: "open",
    entry: "//localhost:7000",
    container: "#app",
    activeRule: "/open",
  },
  // {
  //   name: "react-app",
  //   entry: "//localhost:3000",
  //   container: "#container",
  //   activeRule: "/react-child",
  // },
  // {
  //   name: "vue-prev-app",
  //   entry: "//localhost:7000",
  //   container: "#app",
  //   activeRule: "/vue-prev-child",
  // },
  // {
  //   name: "vue-next-app",
  //   entry: "//localhost:4200",
  //   container: "#container",
  //   activeRule: "/vue-next-child",
  // },
]);

start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
