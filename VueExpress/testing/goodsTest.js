const GoodsOperation =require("../models/schemas/GoodsCart");


console.log(1)
// let goodsDetail=new GoodsOperation();
// goodsDetail.findGoods({},(err,results)=>{
//     console.log(results);
// })

// var goodsObj={
//     storename:"mmm",
//     storecheck:false,
//     goodslist:[{
//         goodsid:"02000",
//     shopid:3,
//     goodstitle:"cccc",
//     goodssize:"ddd"
//     }
//     ]
// }
// var shops=new GoodsOperation(goodsObj);

// shops.addCart(goodsObj,(err,result)=>{
//     console.log(result);
// })
// shops.addCart(goodsObj,(err,result)=>{
//     console.log(result);
// })
//db.blog.update({"title":"A"},{$addToSet:{"comments":{"testAdd":"T"}}});


var goodsObj={
        goodsid:"02000",
        shopid:3,
        goodstitle:"cccc",
        goodssize:"ddd"
}
// var shops=new GoodsOperation();
let goodsDetail=new GoodsOperation();
// var goods=new goodsCartsModel("爱唯一婚纱",goodsObj);
// goodsDetail.updateCart("爱唯一婚纱",goodsObj,(err,result)=>{
//     console.log(result)
//     console.log(goodsObj)
// })
// goodsDetail.updateNum("01002","0",30,(err,result)=>{
//     console.log(result)
// })

// goodsDetail.deleteCart("爱唯一婚纱","01001","3",(err,result)=>{
//     console.log(result)
// })
goodsDetail.deleteGoods({"storename" : "凝彩婚纱官方旗舰店"},(err,result)=>{
    console.log(result)
})
