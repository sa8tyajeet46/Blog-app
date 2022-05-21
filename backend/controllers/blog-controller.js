const { default: mongoose } = require('mongoose');
const blog=require('../models/blog-model');
const User=require('../models/user-model');
const getAllBlogs=async(req,res,next)=>{
    let blogs;
    try{
        blogs=await blog.find().populate("user");
    }
    catch(error){
        return console.log(error);
    }
    if(!blogs)
    res.status(404).send({message:"blogs not found"});
    res.status(200).send({blogs})
}
const addBlog=async(req,res,next)=>{
    const {title,description,user,img}=req.body;
    console.log(req.body);
    let existingUser;
    try{
        existingUser=await User.findById(user);
    }catch(error){
        return console.log(error);
    }
    if(!existingUser)
    return res.status(400).send({message:"unable to add blog"});
    const newBlog=new blog({
        title,description,user,img
    });
    try{
       const session=await mongoose.startSession();
       session.startTransaction();
       await newBlog.save({session});
       existingUser.blogs.push(newBlog);
       await existingUser.save({session})
       await session.commitTransaction();
    }
    catch(error){
         console.log(error);
         res.status(500).send({message:"unable to add"});
    }
    if(!newBlog)
    res.status(404).send("unable to add blog");
    res.status(200).send(newBlog);
}
const updateBlog=async(req,res,next)=>{
     const id=req.params.id;
     const {title,description}=req.body;
     let updatedBlog;
     try{
         updatedBlog=await blog.findByIdAndUpdate(id,{title,description}); 
     }catch(error){
         return console.log(error);
     }
     if(!updatedBlog)
     return res.status(404).send({message:"blog not found"});
     return res.status(200).send(updatedBlog);
}
const deleteBlog=async(req,res,next)=>{
    const id=req.params.id;
    let deletedBlog;
    try{
        deletedBlog=await blog.findByIdAndRemove(id).populate("user");
        await deletedBlog.user.blogs.pull(deletedBlog);
        await deletedBlog.user.save();
    }catch(error)
    {
        return console.log(error);
    }
    if(!deletedBlog)
    res.status(404).send({message:"unable to delete the blog"});
  res.status(200).send({message:"deleted sucessfully"});
}
const getBlogById=async(req,res,next)=>{
    const id=req.params.id;
    let requiredBlog;
    try{
        requiredBlog= await blog.findById({_id:id});
    }catch(error)
    {
        return console.log(error);
    }
    if(!requiredBlog)
    res.status(404).send({message:"blog not found"});
    res.status(200).send(requiredBlog);
}
const getUserBlog=async (req,res,next)=>{
    const id=req.params.id;
    let blogs;
    try{
        blogs=await blog.find({user:id});
    }catch(error){
        return console.log(error);
    }
    if(!blogs)
    res.status(404).send({message:"cannot find"});
    res.status(200).send({blogs});
}
module.exports={getAllBlogs,addBlog,updateBlog,deleteBlog,getBlogById,getUserBlog}