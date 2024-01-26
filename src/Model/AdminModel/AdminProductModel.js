require("../../Config/Db")
const mongoose = require("mongoose");

const { Collection } = require("../../Config/Collection");


const productSchema = new mongoose.Schema({

    product_title:{type:String,required:[true]},
    product_name:{type:String,required:[true]},
    product_price:{type:Number,required:[true]},
    product_description:{type:String},
    product_brand:{type:String},
    product_unit:{type:Number},
    product_rating:{type:Number},
    product_status:{type:String},
    sub_category_title:{type:String},
    category_title:{type:String},
    product_image:{type:String},
    date:{type:Date,default:Date.now},
    
},
    { timestamps: true }
)


const AdminProductModel = mongoose.model(Collection.adminProduct,productSchema);
module.exports = AdminProductModel;

