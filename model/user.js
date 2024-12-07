const mongoose = require('mongoose');
var schema =mongoose.Schema({
    Name:String,
 Gender:String,
    Age:Number,
    Email:String,
    PhNo:Number,
})
var UserModel=mongoose.model("User",schema)//product - table name
module.exports=UserModel