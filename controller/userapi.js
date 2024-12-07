const User =require("../model/user")
//api to add
const createUser= async(req,res)=>{
    try {
        await User(req.body).save()//data sent by the body save to Product
        res.send({Message:"Data added!"});
    } catch (error) {
        console.log(error);
    }
}
const view=async(req,res)=>{//api creation for view
    try {
       const data= await User.find()
        res.send({data});
    } catch (error) {
       console.log(error);
    }
}


const delUser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send({message:"deleted successfully!!"});
    } catch (error) {
       console.log(error);
    }
}



const updateUser=async(req,res)=>{//api creation for update
    try {
      await User.findByIdAndUpdate(req.params.id, req.body)
        res.send("Updated successfully!!");
    } catch (error) {
       console.log(error);
    }
}
module.exports={createUser,delUser,view,updateUser}