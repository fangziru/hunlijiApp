const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let dbUrl = "mongodb://localhost:27017/wedding";

mongoose.connect(dbUrl);

mongoose.connection.on("connected",()=>{
    console.log(`${dbUrl} is success connected!`)
});
module.exports = mongoose;