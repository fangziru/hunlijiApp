const mongoose=require("../config/MongoDBConfig");

//创建Schema

let Schema=mongoose.Schema;

let goodsDetail=new Schema({
    goodsid:{type:String},
    shoptitle:{type:String},
    imgmain:{type:String},
    price:{type:Number},
    beforeprice:{type:Number},
    goodscollection:{type:Number},
    storename:{type:String},
    imgstore:{type:String},
    imgslide:{type:Array},
    imgdesc:{type:Array},
    sizelist:[{goodssize:{type:String},thisprice:{type:Number},existgoods:{type:Number}}]
});

let goodsDetailsModel=mongoose.model("goodsdetails",goodsDetail);
module.exports=goodsDetailsModel;