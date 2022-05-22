import {LOADBLOG_FAIL,LOADBLOG_SUCESS,GETMYBLOGS_FAIL,GETMYBLOGS_SUCESS,ADDBLOG_FAIL,ADDBLOG_SUCESS,REMOVEBLOG_FAIL,REMOVEBLOG_SUCESS} from "../constants/blogConstants"
import axios from "../axios";
export const loadBlog=()=>async(dispatch)=>{
    try{
        const blogs=await axios.get("/api/blogs");
        console.log(blogs.data.blogs);
        dispatch({
            type:LOADBLOG_SUCESS,
            payload:blogs.data.blogs
        })
    }
        catch(error)
        {
            dispatch({
         type:LOADBLOG_FAIL,
         payload:error
            })
        }
}
export const loadMyBlog=(id)=>async(dispatch)=>{
    try{
        const blogs=await axios.get(`/api/blogs/user/${id}`);
       
        dispatch({
            type:GETMYBLOGS_SUCESS,
            payload:blogs.data.blogs
        })
    }
        catch(error)
        {
            dispatch({
         type:GETMYBLOGS_FAIL,
         payload:error
            })
        }
}
export const addBlog=(title,url,description,userId)=>async(dispatch)=>{
    try{
        const header={'Content-Type':'application/json'};
        console.log(url);
        const blogs=await axios.post(`/api/blogs/add`,{title,description,img:url,user:userId},header);
        dispatch({
            type:ADDBLOG_SUCESS,
            payload:blogs
        })
    }
    catch(error){
        
        dispatch({
            type:ADDBLOG_FAIL,
            payload:error
        })
    }
}
export const deleteBlog=(userId)=>async(dispatch)=>{
    try{
     
        const blogs=await axios.delete(`/api/blogs/delete/${userId}`);
        dispatch({
            type:REMOVEBLOG_SUCESS,
            payload:blogs
        })
    }
    catch(error){
        
        dispatch({
            type:REMOVEBLOG_FAIL,
            payload:error
        })
    }
}