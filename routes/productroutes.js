const express =require("express");
const router =express.Router()
const {createProduct,delProduct,view,updateProduct}=require("../controller/productapi")
//routes
router.post("/",createProduct);
router.delete("/:id",delProduct);
router.get("/",view);
router.put("/:id",updateProduct);
module.exports=router;