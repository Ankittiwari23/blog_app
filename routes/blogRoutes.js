const express = require("express")
const{getAllBlogsController, 
    createBlogController, 
    updateBlogController, 
    getBlogByIdController, 
    deleteBlogController,
    userBlogController,
}=require('../controllers/blogController');
//router object
const router=express.Router();

//GET || all blogs
router.get('/all-blog',getAllBlogsController)

//POST || create blog
router.post('/create-blog',createBlogController )

//POST || update blog
router.put('/update-blog/:id',updateBlogController)

//GET || Single  blog
router.get('/get-blog/:id',getBlogByIdController)

//GET || Single  blog by User
router.get('/user-blog/:id',userBlogController)

router.delete('/delete-blog/:id',deleteBlogController)
module.exports=router;