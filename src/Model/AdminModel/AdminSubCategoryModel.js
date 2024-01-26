require("../../Config/Db");
const mongoose = require("mongoose");
const { Collection } = require("../../Config/Collection");


const subCategorySchema = new mongoose.Schema({
       sub_category_name:{type:String,},
       sub_category_title:{type:String},
       category_title:{type:String}
})

const AdminsubCategoryModel = mongoose.model(Collection.adminSubCategory,subCategorySchema);
module.exports = AdminsubCategoryModel;