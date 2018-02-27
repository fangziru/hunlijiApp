
//首页链接
import {ISURL} from "../constant/goodsListConst"

import {SCURL} from "../constant/goodsListConst";
import {WEDDINGDRESSURL} from "../constant/goodsListConst";
import {WINEDRESSURL} from "../constant/goodsListConst";
import {MANCLOTHURL} from "../constant/goodsListConst";
import {GSURL} from "../constant/goodsListConst";
import {DETAILURL} from "../constant/goodsListConst";
module.exports={
    /**
     * 获取首页店铺信息
     */

    getData:function(cb){
        fetch(ISURL).then((data)=>{
            data.json().then((data)=>{
                cb(data);
            })
        })
    },

    //通过用户编号来获取商品列表
    getGoodsList:function (cb) {
        fetch(SCURL).then((data)=>{
            data.json().then((data)=>{
                cb(data)
            })
        })
    },
    getBridalList:function (cb) {
        fetch(WEDDINGDRESSURL).then((data)=>{
            data.json().then((data)=>{
                cb(data)
            })
        })
    },
    getManClothList:function (cb) {
        fetch(MANCLOTHURL).then((data)=>{
            data.json().then((data)=>{
                cb(data)
            })
        })
    },
    getWineDressList:function (cb) {
        fetch(WINEDRESSURL).then((data)=>{
            data.json().then((data)=>{
                cb(data)
            })
        })
    },
    gotGoodsCartList:function (cb) {
        fetch(GSURL).then((data)=>{
            data.json().then((data)=>{
                cb(data)
            })
        })
    },

    gotGoodsDetail:function (cb) {
        fetch(DETAILURL).then((data)=>{
            data.json().then((data)=>{
                cb(data)
            })
        })
    }
}