const AdminsubCategoryModel = require('../../Model/AdminModel/AdminSubCategoryModel');

exports.addSubCategory = async (request, response) => {
    try {
        const subCategoryData = request.body;
        const query = {
            sub_category_name: subCategoryData.sub_category_name,
            sub_category_title: subCategoryData.sub_category_title,
            category_title: subCategoryData.category_title
        }
        const res = await AdminsubCategoryModel.create(query)
        if (res) {
            response.json({
                status: "succesfull",
                message: "data added succesfully",
                res: res
            })
        } else {
            response.json({
                status: "failed",
                mesaage: "invalid data"
            })
        }

    } catch (error) {
        response.json({
            status: "failed",
            message: "error",

        })
    }
}

exports.getSubCategory = async (request, response) => {
    const res = await AdminsubCategoryModel.find()
    if (res) {
        response.json({
            status: "success",
            data: res
        })
    }
}

exports.delSubCategory = async (request, response) => {
    try {
        const { id } = request.params
        const filter = {
            _id:id
        }
        let res = await AdminsubCategoryModel.deleteOne(filter)
        if(res){
            response.json(
                {
                    status:"succes",
                    message:"category deleted succesfully",
                    data:res
                }
            )
        }

    } catch (error) {
        response.json({
            status: "failed",
            message: "error",
        })
    }
}