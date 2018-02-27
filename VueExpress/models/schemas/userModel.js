const mongoose=require("../config/MongoDBConfig");


let Schema = mongoose.Schema;
let UserSchema = new Schema({
    userphone:{type:String}
})


let UsersModel = mongoose.model("userdatas",UserSchema);


module.exports = UsersModel;