import mongoose from "mongoose";

const connection = async ()=>{
    try{
       await  mongoose.connect("mongodb+srv://aneeketdaswani:Daswani123@cluster0.r7ofk9n.mongodb.net/",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            dbName:"User"
        })
        console.log("Database connected successfully");	
    }
    catch(error){
        console.log(error);
    }
};



export default connection;