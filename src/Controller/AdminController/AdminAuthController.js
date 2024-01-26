const AdminAuthModel = require("../../Model/AdminModel/AdminAuthModel")
const { verifyPassword } = require("../../utile/utils")


exports.signup = async (request, response) => {
  try {
    const signupData = request.body
    const query = {
      name: signupData.name,
      email: signupData.email,
      phone:signupData.phone,
      password: signupData.password
    }
    const res = await AdminAuthModel.create(query)
    if (res) {
      response.json({
        status: "success",
        message: "signup succesful",
        res:res
      })
    }

  } catch (error) {
    if (error) {
      response.json({
        status: "failed",
        error: error
      })
    }
    else {
      response.json({
        status: "failed",
        error: "invalid!!!"
      })
    }

  }
}



exports.login = async (request, response) => {

  try {
    const loginData = request.body;
    const query = {
      email: loginData.email
    }

    const dbRes = await AdminAuthModel.findOne(query, { name: 1, password: 1, email: 1 })
    if (dbRes) {
      const isCompare = await verifyPassword(loginData.password, dbRes.password)
      if (isCompare) {
        const payload = {
          name: dbRes.name,
          email: dbRes.email,
          user_id: dbRes._id
        }
        response.json({
          status: "success",
          message: "Login Successfull",
          res:dbRes
        })
      }
    }
    else{
      response.json({
        status: 'failed',
        message: "Incorrect Email"
    })
    }
  }
  catch (error) {
    response.json({
      status: 'failed',
      message: "Invalid Details"
  })
}
}