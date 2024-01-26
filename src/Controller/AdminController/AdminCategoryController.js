const AdminCategoryModel = require("../../Model/AdminModel/AdminCategoryModel");


exports.addCategory = async (request, response) => {
    try {
        const categoryData = request.body;
        const query = {
            category_name: categoryData.category_name,
            category_title: categoryData.category_title,
        }
        const res = await AdminCategoryModel.create(query);

        if (res) {
            response.json({
                status: "success",
                message: "data added succesfully",
                res: res
            })
        } else {
            response.json({
                status: "failed",
                message: "invalid data"
            })
        }
    } catch (error) {
        response.json({
            status: "failed",
            message: "error",

        })
    }
}

exports.getCategory = async (request, response) => {
    let res = await AdminCategoryModel.find()
    if (res) {
        response.json({
            status: "success",
            data: res
        })
    }

}

exports.delCategory = async (request, response) => {
    try {
        const { id } = request.params
        const filter = {
            _id:id
        }
    let res = await AdminCategoryModel.deleteOne(filter)
    if(res){
        response.json({
            status:"succes",
            message:"category deleted succesfully",
            data:res
        })
    }
    
    }
    catch (err) {   
        response.json({
            status: "failed",
            message: "error",
        })
    }
}


exports.UpdateCtegory = async (request, response)=>{
    try {
     const{id} = request.params;
     const query = {
        _id : id
     }
     let res = await AdminCategoryModel.updateOne(query,{$set})
     if(res){

     }
    }
    catch (err) {

    }
}
