const mongoose=require("../config/MongoDBConfig");

//创建Schema

let Schema=mongoose.Schema;

let goodsCart=new Schema({
    storename:{type:String},
    storecheck:{type:Boolean},
    goodslist:[{
            goodsid:{type:String},
            shopid:{type:String},
            goodstitle:{type:String},
            goodssize:{type:String},
            goodscheck:{type:Boolean},
            goodsprice:{type:Number},
            goodspricestart:{type:Number},
            goodsnum:{type:Number},
            existgoods:{type:Number},
            goodsimg:{type:String}
    }]
});

let goodsCartsModel=mongoose.model("goodscarts",goodsCart);

class GoodsOperation{

    findGoods(where,cb){
        goodsCartsModel.find(where,cb);
    }

    findGoodsOne(where,cb){
        goodsCartsModel.find(where,cb);
    }

    addCart(goodsObj,cb){
        var goods=new goodsCartsModel(goodsObj);
        goods.save(cb)
    }

    updateCart(storeName,goodsMsg,cb){
        // var goods=new goodsCartsModel({"storename":storeName},{$push:{"goodslist":goodsMsg}});
        // goods.update(cb);
        goodsCartsModel.update({storename:storeName},{$push:{goodslist:goodsMsg}},cb);
        // goods.save(cb)
    }

    updateNum(goodsId,shopId,goodsNum,cb){
        goodsCartsModel.update({"goodslist.goodsid" : goodsId,"goodslist.shopid" : shopId},{$set:{"goodslist.$.goodsnum" :goodsNum}},cb)
    }

    deleteCart(storeName,goodsId,shopId,cb){
        goodsCartsModel.update({storename:storeName},{$pull:{goodslist:{goodsid:goodsId,shopid:shopId}}},cb);
    }

    deleteGoods(where,cb){
        goodsCartsModel.remove(where,cb)
    }

}

module.exports=GoodsOperation;