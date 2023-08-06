const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{
      mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
      })
      .then(()=>console.logg("Db Connected Successfully"))
      .catch((error)=>{
        console.log("Db Connection Failed");
        console.log(error);
        process.exit(1);
      })
}

