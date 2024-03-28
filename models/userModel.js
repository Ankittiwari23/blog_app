const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    //types array of objects []
    blogs:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Blog',
            
        },
    ],

},{timestamps:true})

//variable name collection, userSchema
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;