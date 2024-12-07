const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
 // connect to mongoose
  .then(() => {
    console.log("Connected!")
  })
.catch((err)=>{
    console.log(err)
})