const AdminProductModel = require("../../Model/AdminModel/AdminProductModel")
exports.addProduct = async (request, response) => {
    try {
        const productData = request.body;
        console.log(productData);
        const img = request.imagePath

        const query = {
            product_title: productData.product_title,
            product_name: productData.product_name,
            product_price: productData.product_price,
            product_description: productData.product_description,
            product_brand: productData.product_brand,
            product_unit: productData.product_unit,
            product_offer: productData.product_offer,
            product_rating: productData.product_rating,
            product_status: productData.product_status,
            product_image: img,
            sub_category_title: productData.sub_category_title,
            category_title: productData.category_title
        }
        const res = await AdminProductModel.create(query)
        if (res) {
            response.json({
                status: "succesfull",
                message: "data inserted succesfully"
            })
        }
        else {
            response.json({
                status: "failed",
                error: "invalid data!!"
            })
        }
    } catch (error) {
        if (error) {
            response.json({
                status: "failed",
                message: "error",
                error: error
            })
        }
    }
}

exports.getProduct = async (request, response) => {
    let res = await AdminProductModel.find()
    res = res.map(ele => {
        ele.product_image = `http://localhost:8001/image/${ele.product_image}`
        return ele
    })
    if (res) {
        response.json({
            status: "success",
            data: res
        })
    }
}

exports.delProduct = async (request, response) => {
    try {
        const { id } = request.params;
        const query = {
            _id: id
        }
        const res = await AdminProductModel.deleteOne(query)
        if (res) {
            response.json({
                status: "success",
                message: "product deleted succesfully",
                data: res
            })
        }
    }
    catch (err) {
        response.json({
            status: "failed",
            message: err
        })
    }
}

