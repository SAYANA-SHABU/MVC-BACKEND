const mongoose = require('mongoose');
var schema =mongoose.Schema({
    Name:String,
    Category:String,
    Price:Number,
    Count:String,
    Description:String,
})
var ProductModel=mongoose.model("Product",schema)//product - table name
module.exports=ProductModel
