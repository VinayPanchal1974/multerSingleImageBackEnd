require("../../Config/Db")

const mongoose = require("mongoose");
const { Collection } = require("../../Config/Collection");


const categorySchema = new mongoose.Schema({
    category_name:{type:String},
    category_title:{type:String}
})

const AdminCategoryModel = mongoose.model(Collection.adminCategory,categorySchema);
module.exports = AdminCategoryModel;