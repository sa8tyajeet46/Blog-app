const mongoose=require('mongoose');
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },  
      user:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const blog=new mongoose.model("blogs",blogSchema);
module.exports=blog;