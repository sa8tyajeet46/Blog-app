import { useEffect } from "react"
import {loadBlog} from "../actions/blogAction"
import {useDispatch,useSelector} from "react-redux"

import Card from "./Card"

export default function Blogs(){
    const dispatch=useDispatch();
    useEffect(()=>{
     dispatch(loadBlog())},[dispatch]);
    const {blogs,error}=useSelector(state=>state.blogs)
    const {isLoggedIn,user}=useSelector(state=>state.user)
    if(user)
    {
      localStorage.setItem("userId",user.data.user._id);
    }
    return (<div className="w-full px-10 py-10">{blogs.map((e)=>{return <div>
        {
          /*  `${e.description}
            ${e.img}
            ${e.title}
            ${e.user.name}
            `*/
            <Card name={e.user.name} 
            blogId={e._id}
        title={e.title}
        description={e.description}
        img={e.img} date={e.date} id={e.user._id}></Card>
        }
        </div>})}
        </div>)
}