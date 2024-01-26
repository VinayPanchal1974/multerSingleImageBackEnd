require("../../Config/Db")
const mongoose = require("mongoose")
const { Collection } = require("../../Config/Collection")
const { encodePassword } = require("../../utile/utils")



const authenticationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    }
    ,
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    phone:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: [true, "pawword is required"],
        min: [8, "password should be of 8 letters"]
    }
}
    ,
    { timestamps: true }
)


authenticationSchema.pre('save' , async function(){
    this.password = await encodePassword(this.password)
})


// authenticationSchema.pre("save" , async function(next){
//     this.password = await bcrypt.hash("this.password",10)
//     next()
// })


const AdminAuthModel =  mongoose.model(Collection.adminAuth,authenticationSchema)
module.exports = AdminAuthModel