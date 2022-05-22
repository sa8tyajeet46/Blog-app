import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {deleteBlog} from "../actions/blogAction"
import {TrashIcon} from '@heroicons/react/solid'
export default function Card(props){
    const dispatch=useDispatch();
    const userId=localStorage.getItem("userId");
    const {img,title,description,name,date,id,blogId}=props;
    const [readMore,setReadMore]=useState(description.length>300);
   let format =new Date(date);
   const handleDelete=(e,blogId)=>{
   e.preventDefault();
   setDeleted(true);
   dispatch(deleteBlog(blogId));
   }
   const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   console.log(format); 
   const [deleted,setDeleted]=useState(false);
        return (<div className={deleted?"hidden":`w-full lg:w-3/4 grid lg:grid-cols-2 lg:gap-6 m-auto shadow-xl rounded-lg overflow-hidden mb-10`}>
<div><img className="w-full" src={img}></img></div>
<div className="flex flex-col px-4 pt-2 ">
    <div className="flex flex-row space-x-3 items-center justify-between">
        <div className="flex space-x-3">
{name && <div className="bg-gray-800 text-white text-4xl rounded-full w-14 h-14 flex justify-center pt-1">{name[0]}</div>}
<div className="text-2xl font-thin italic flex flex-col">{name && <span>{name}</span>}<span className="text-xs italic">{`${format.getDate()} ${months[format.getMonth()]} ${format.getFullYear()}`}</span></div></div>
{id &&  id===userId && <button className=""onClick={(e)=>handleDelete(e,blogId)}><TrashIcon className="w-7 text-red-600"></TrashIcon></button>}

</div>
<div className="mt-4 flex justify-center w-full text-3xl font-light" style={{fontFamily:"Playfair Display SC"}}>{title}</div>
<span className="mx-auto mt-4 bg-gray-400 h-1 w-10 rounded-full"></span>

<p className="text-sm italic p-2 text-gray-500 ">{readMore?`${description.slice(0,300)}`:description}
{readMore && <button className="text-blue-400">Read More</button>}</p>

</div>
    </div>)
}