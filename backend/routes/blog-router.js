const express=require("express");
const {getAllBlogs,addBlog,updateBlog,deleteBlog,getBlogById,getUserBlog}=require("../controllers/blog-controller")
const router=express.Router();
router.get("/",getAllBlogs);
router.post("/add",addBlog);
router.put("/update/:id",updateBlog);
router.delete("/delete/:id",deleteBlog);
router.get("/:id",getBlogById);
router.get("/user/:id",getUserBlog);
module.exports=router