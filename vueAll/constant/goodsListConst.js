import VueRouter from "vue-router";
import Vue from "vue"
// console.log(this.$route.query.goodsid);
// var goodsids=$route.query.goodsid;
var  getUrlStr = function(name){
    /**
     * 获取地址栏参数
     */

    let num=name.indexOf("?goodsid=");
    let str=name.substring(num);
    let num1=str.indexOf("=");
    let goodsid=str.substring(num1+1);

    return goodsid
}
var goodsids=getUrlStr(location.href);

const GOODSLISTURL="http://localhost:3000/api/goodslist";
const GOODSWEDDINGDRESSURL="http://localhost:3000/api/goodsdetaillist";
const GOODSWINEDRESSURL="http://localhost:3000/api/winedressList";
const GOODSMANCLOTHURL="http://localhost:3000/api/manclothList";
/*
    购物车，详情
 */
const GOODSCARTURL= `http://localhost:3000/api/goodscarts`;
const DETAILCARTURL= "http://localhost:3000/api/goodsdetails?goodsid="+goodsids;
const indexSelect="http://localhost:3000/api/indexApi";






module.exports={
    //首页
    ISURL:indexSelect,
    SCURL:GOODSLISTURL,
    WEDDINGDRESSURL:GOODSWEDDINGDRESSURL,
    MANCLOTHURL:GOODSMANCLOTHURL,
    WINEDRESSURL:GOODSWINEDRESSURL,
    //购物车，详情
    GSURL:GOODSCARTURL,
    DETAILURL:DETAILCARTURL
}