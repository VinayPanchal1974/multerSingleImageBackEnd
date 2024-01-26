const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB , {
    connectTimeoutMS: 1000,
    useUnifiedTopology: true
}).then((res)=>{
console.log("connected to database");
}).catch((err)=>{
    console.log("connection failed");
})

