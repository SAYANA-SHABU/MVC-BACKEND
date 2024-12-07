//import
const express= require("express")
const dotenv =require("dotenv")
const ProductRoutes=require("./routes/productroutes")
const UserRoutes=require("./routes/userroutes")
//initialize
const app= express()
dotenv.config()
require("./config/database")
app.use(express.json());
//useroutes
app.use("/api/products",ProductRoutes)
app.use("/api/user",UserRoutes)
//port
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Port is running ${PORT}`); //port setting
});