import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import {loadMyBlog} from "../actions/blogAction";
import Card from "./Card";
export default function MyBlogs(){
    const dispatch=useDispatch();
    const userId=localStorage.getItem("userId");
    useEffect(()=>{
        dispatch(loadMyBlog(userId));
    },[dispatch])
    const myblogs=useSelector(state=>state.myblogs.blogs);
    console.log(myblogs);
    return (
<div className="w-full px-10 py-10">{myblogs && myblogs.map((e)=>{return <div>
            <Card 
        title={e.title}
        description={e.description}
        img={e.img} date={e.date}></Card>
        </div>})}
        </div>)
}