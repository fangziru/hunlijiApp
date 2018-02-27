const UserModel = require("../schemas/userModel");
class UserOperation {
    /**
     * 添加用户
     * @param userObj
     * @param cb
     */
    addUser(userObj,cb){
        var user = new UserModel(userObj);
        user.save(cb);
    }

}
module.exports = UserOperation


