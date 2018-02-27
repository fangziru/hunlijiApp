const mongoose = require("../config/MongoDBConfig");


let Schema = mongoose.Schema;

let GoodsListSchema = new Schema({
    goodsid:{type:String},
    title:{type:String},
    price:{type:Number},
    pic:{type:String},
    collect:{type:Number}
});

let WeddingGoodsListModel = mongoose.model("goodslist1",GoodsListSchema);
let WeddingGoodsListMode2 = mongoose.model("goodslist2",GoodsListSchema);
let WeddingGoodsListMode3 = mongoose.model("goodslist3",GoodsListSchema);
let WeddingGoodsListMode4 = mongoose.model("goodslist4",GoodsListSchema);
let WeddinguserdataModel = mongoose.model("userdata",GoodsListSchema);


class GoodsListOperation {

    findGoodslist1(where,cb){
        WeddingGoodsListModel.find(where,cb)
    }
    findGoodslist2(where,cb){
        WeddingGoodsListMode2.find(where,cb)
    }
    findGoodslist3(where,cb){
        WeddingGoodsListMode3.find(where,cb)
    }
    findGoodslist4(where,cb){
        WeddingGoodsListMode4.find(where,cb)
    }
}

module.exports = GoodsListOperation