// create user register user
const userModel= require('../models/userModel')
const bcrypt=require('bcrypt');
exports.registerController=async(req,res)=>{
  try{
    const{username,email,password}=req.body
    //validation
    if(!username || !email ||!password){
        return res.status(400).send({
            success:false,
            message:'Please fill all fields'
        })
    }
    const exisistingUser=await userModel.findOne({email})
    if(exisistingUser){
        return res.status(401).send({
            success:false,
            message:'user already exists'
        })
    }
     const hashedPassword=await bcrypt.hash(password,10);
    //save new user
    const user=new userModel({username,email,password: hashedPassword});
    await user.save();
    return res.status(201).send({
        success:true,
        message:'Successfully Registered',
        user,
    });
  }catch(error){
    console.log(error)
    return res.status(500).send({
        message:'Error in Register callback',
        success:false,
        error
    })
    
  }
};
//get all users
exports.getAllUsers= async(req,res) =>{
    try{
        const users=await userModel.find({});
        return res.status(200).send({
            userCount:users.length,
            success:true,
            message:'all users data',
            users,
        });
    }
    catch(error){
        console.log(error);
            return res.status(300).send({
                success:false,
                message:'Error in Get all users',
                error
            })
        }
    };

//login
exports.loginController=async(req, res)=>{
    try{
            const{email,password}=req.body
            if(!email || !password){
              return res.status(401).send({
                success:false,
                message:'Please provide email or password'
              })
            }
            const user=await userModel.findOne({email});
            if(!user){
                return response.status(200).send({
                    success:false,
                    message:'email is not registered'
                })
            }
            const isMatch= await bcrypt.compare(password, user.password)
             if(!isMatch){
                return res(401).send({
                    success:false,
                    message:"Invalid user or password"
                })
             }
            return res.status(200).send({
                success:true,
                message:"login successfully",
                user
            })
    }
    catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error in login Callback',
            error
        })

    }
};