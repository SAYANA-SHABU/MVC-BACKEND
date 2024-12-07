const Product =require("../model/product")
//api to add
const createProduct= async(req,res)=>{
    try {
        await Product(req.body).save()//data sent by the body save to Product
        res.send({Message:"Data added!"});
    } catch (error) {
        console.log(error);
    }
}
const view=async(req,res)=>{//api creation for view
    try {
       const data= await Product.find()
        res.send({data});
    } catch (error) {
       console.log(error);
    }
}


const delProduct=async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.send({message:"deleted successfully!!"});
    } catch (error) {
       console.log(error);
    }
}



const updateProduct=async(req,res)=>{//api creation for update
    try {
      await Product.findByIdAndUpdate(req.params.id, req.body)
        res.send("Updated successfully!!");
    } catch (error) {
       console.log(error);
    }
}
module.exports={createProduct,delProduct,view,updateProduct}