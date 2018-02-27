const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const goodsOperation = require("../models/operations/GoodsDetailOperation");
const WeddingGoodsListOperation = require("../models/schemas/WedingGoodsListModel");
const GoodsCartOperation =require("../models/schemas/GoodsCart");
const userDataOperation =require("../models/operations/UserOperation");

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
//首页店铺数据
router.get("/api/indexApi",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  const shopList=[
      {"title":"时尚造型","price":3000,"intro":"张老师精彩呈现时尚的艺术...","pic":"assets/img/limeng/p8.jpg"},
      {"title":"新品嫁衣","price":6000,"intro":"张老师精彩呈现时尚的艺术...","pic":"assets/img/limeng/p8.jpg"}
  ];
  res.json(shopList)
});

router.get("/api/goodslist",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let wedinggoodslist = new WeddingGoodsListOperation();
    wedinggoodslist.findGoodslist1({},(err,result)=>{
        // console.log(result);
        res.json(result);
    });
});
router.get("/api/goodsdetaillist",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let wedinggoodslist = new WeddingGoodsListOperation();
    wedinggoodslist.findGoodslist2({},(err,result)=>{
        // console.log(result);
        res.json(result);
    });
});
router.get("/api/winedressList",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let wedinggoodslist = new WeddingGoodsListOperation();
    wedinggoodslist.findGoodslist3({},(err,result)=>{
        // console.log(result);
        res.json(result);
    });
});
router.get("/api/manclothList",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let wedinggoodslist = new WeddingGoodsListOperation();
    wedinggoodslist.findGoodslist4({},(err,result)=>{
        // console.log(result);
        res.json(result);
    });
});
router.get("/api/goodscarts",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let goodsCartDetail=new GoodsCartOperation();
    goodsCartDetail.findGoods({},(err,results)=>{
        // console.log(results);
        res.json(results);
    })

    // res.json(cartsList);
});

router.get("/api/goodsdetails",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let goodsDetail=new goodsOperation();
    let goodsids=req.query.goodsid;
    goodsDetail.findGoods({"goodsid":goodsids},(err,results)=>{
        // console.log(results);
        // goodsdetailslist=results;
        res.json(results);
    })

})


router.post("/api/addCart",function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var goodsCartDetail=new GoodsCartOperation();
    let productId=req.body.goodsid;

    var goodsObj={
        storename:req.body.storename,
        storecheck:false,
        goodslist:[{
            goodsid:productId,
            shopid:req.body.shopid,
            goodstitle:req.body.goodstitle,
            goodssize:req.body.goodssize,
            goodscheck:false,
            goodsprice:req.body.goodsprice,
            goodspricestart:req.body.goodspricestart,
            goodsnum:req.body.goodsnum,
            existgoods:req.body.existgoods,
            goodsimg:req.body.goodsimg
        }]
    }

    goodsCartDetail.findGoods({"storename":goodsObj.storename},(err,results)=>{
        // console.log(results);
        if(err){
            res.json({
                status:"1",
                msg:err.message
            })
        }else{
            if(results.length<=0){
                goodsCartDetail.addCart(goodsObj,(err,result)=>{

                })
            }else{
                goodsCartDetail.findGoods({"goodslist.goodsid":goodsObj.goodslist[0].goodsid,"goodslist.shopid":goodsObj.goodslist[0].shopid},(err,res)=>{
                    if(res.length<=0){
                        goodsCartDetail.updateCart(goodsObj.storename,goodsObj.goodslist[0],(err,result1)=>{
                            console.log(result1+"**")
                        })
                    }else{
                        goodsCartDetail.updateNum(productId,goodsObj.goodslist[0].shopid,goodsObj.goodslist[0].goodsnum,(err,result2)=>{
                           console.log(result2+"--")
                        })
                    }
               })

            }

        }
        // res.json(results);
    })
})

router.post("/api/deleteCart",function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var goodsCartDetail=new GoodsCartOperation();
    console.log(req.body)
    let goodsids=req.body.goodsid;
    let shopids=req.body.shopid;
    let productName=req.body.storename;
    let goodsListSize=req.body.goodsListNum;
    if(goodsListSize>1){
        goodsCartDetail.deleteCart(productName,goodsids,shopids,(err,result)=>{
            console.log(result+"delete")
        })
    }else{
        goodsCartDetail.deleteGoods({"storename" : productName},(err,result)=>{
            // console.log(result)
        })
    }

})


router.post("/api/userdata",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    console.log(req.body.userphone);
    var userdata = {
        userphone:req.body.userphone
    };
    let users = new userDataOperation();
    users.addUser(userdata,(err,result)=>{
        console.log(result);
    });
})


module.exports = router;
