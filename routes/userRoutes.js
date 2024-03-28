const express=require('express')
const { getAllUsers, registerController, loginController } = require('../controllers/userController')

//router object
const router=express.Router()

//get All Users || Get
router.get("/all-users",getAllUsers);

//CREATE USER || Post

router.post("/register",registerController);

//Login || Post
router.post("/login",loginController);

module.exports=router;