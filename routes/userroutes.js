const express =require("express");
const router =express.Router()
const {createUser,delUser,view,updateUser}=require("../controller/userapi")
//routes
router.post("/",createUser);
router.delete("/:id",delUser);
router.get("/",view);
router.put("/:id",updateUser);
module.exports=router;