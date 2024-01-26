const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());


const authRouter = require('./src/routes/AdminRoutes/AuthRoute')
const adminRouter = require("./src/Routes/AdminRoutes/AdminRoute");


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/admin",authRouter )
app.use("/items",adminRouter)
app.use("/image",express.static(__dirname+'/public/uploads/'))
app.use("/items-category",adminRouter)
app.use("/items-sub_category",adminRouter)




module.exports = app;