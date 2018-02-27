const GoodsModel=require("../schemas/GoodsDetailModel");

class GoodsOperation{

    findGoods(where,cb){
        GoodsModel.find(where,cb);
    }

}

module.exports=GoodsOperation;