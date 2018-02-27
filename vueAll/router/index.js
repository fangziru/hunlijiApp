import Vue from "vue"
import VueRouter from "vue-router";
import index from "../pages/index.vue";
import me from "../pages/me.vue";
import login from "../pages/login.vue";
import goodslist from "../pages/goodsList.vue";
import goodsdetail from "../pages/goodsDetail.vue";
import shopcart from "../pages/goodsCart.vue";
const router=new VueRouter({
    routes:[
        {path:"/",component:login},
        {path:"/me",component:me},
        // {path:"/loginpage",component:login},
        {path:"/indexpage",component:index},
        {path:"/goodslistpage",component:goodslist},
        {path:"/goodsdetailpage",component:goodsdetail},
        {path:"/shopcarpage",component:shopcart}
    ]
});
module.exports=router;