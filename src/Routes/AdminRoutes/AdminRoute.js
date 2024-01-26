const express = require('express');
const adminRouter = express.Router();
const AdminProductController = require("../../Controller/AdminController/AdminProductController")
const AdminCategoryController = require("../../Controller/AdminController/AdminCategoryController")
const AdminSubCategoryController = require("../../Controller/AdminController/AdminSubCategoryController")
const upload = require("../../middleware/AdminMiddleware/AdminUploadMiddleware")


adminRouter.post("/product" ,upload.single('product_image'),AdminProductController.addProduct)
adminRouter.get("/allProduct",AdminProductController.getProduct)
adminRouter.delete("/del_product/:id",AdminProductController.delProduct)
adminRouter.post("/category" , AdminCategoryController.addCategory)
adminRouter.get("/allCategory",AdminCategoryController.getCategory)
adminRouter.delete("/del_category/:id",AdminCategoryController.delCategory)
adminRouter.post("/sub_category", AdminSubCategoryController.addSubCategory)
adminRouter.get("/allSub_category", AdminSubCategoryController.getSubCategory)
adminRouter.delete("/del_sub_category/:id",AdminSubCategoryController.delSubCategory)

module.exports = adminRouter;