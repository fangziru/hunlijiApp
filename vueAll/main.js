import  Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import "./assets/css/index.css";
import "./assets/css/me.css";
import "./assets/css/public.css";
import "./assets/css/swiper-3.4.2.min.css";
import  "./assets/css/swiper-bullet.css";
import "./assets/js/jquery-1.8.3.min.js";
import "./assets/js/swiper-3.4.2.min.js";
import router from "./router/";
Vue.use(VueRouter);
Vue.use(VueResource);
new Vue({
    el:"#app",
    router,
    render:(h)=>{
    return h(App)
}
});
