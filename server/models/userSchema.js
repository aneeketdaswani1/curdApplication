import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    id:{
        type:Number,
    
    },
    first:{
        type:String,
        required:true
    },
    last:{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})



const User = mongoose.model('User',userSchema);
export default User;