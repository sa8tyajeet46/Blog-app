import { useState } from "react";
import { useDispatch } from "react-redux";
import {addBlog} from "../actions/blogAction"
export default function AddBlog(){
    const dispatch=useDispatch();
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [url,setUrl]=useState("");
    const userId=localStorage.getItem("userId")
    const handleSumbit=async (e)=>{
        e.preventDefault();
        const data=new FormData();
        data.append("file",image);
        data.append("upload_preset","blog-app");
        data.append("cloud_name","satya123")
        fetch("https://api.cloudinary.com/v1_1/satya123/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json()).then((data)=>{setUrl(data.url)
            dispatch(addBlog(title,data.url,description,userId));
        }).catch(error=>console.log(error));
    }
    return (<div className="w-full flex justify-center pt-40">
        <form className="flex flex-col p-10 shadow-xl w-full margin:auto md:w-1/2 space-y-8">
            <label className="text-3xl italic">Title</label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <label className="text-3xl italic">Description</label>
            <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <input type="file" placeholder="image" onChange={(e)=>setImage(e.target.files[0])}></input>
            <div className="w-full flex justify-center"><button onClick={(e)=>handleSumbit(e)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-40"
            >Add Blog</button></div>
        </form>
    </div>)
}