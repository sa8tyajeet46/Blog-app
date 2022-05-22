import {useSelector} from 'react-redux'
import {useNavigate,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {LogoutUser} from "../actions/userAction"
export default function Header(){
    const location=useLocation();
    const dispatch=useDispatch();
    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(LogoutUser());
        navigate("/login")
    }
    const navigate=useNavigate();
    const {isLoggedIn}=useSelector((state)=>state.user)
return (<div className="flex justify-between bg-blue-700 text-white hover:text-white items-center px-3">
    <div className="text-3xl px-1 sm:px-5 py-3">Blogs</div>
    {isLoggedIn && <div className="flex space-x-3 sm:space-x-10 cursor-pointer text-xl font-semibold text-gray-300">
        <button className={location.pathname==="/blogs"?"underline underline-offset-4 text-white hidden sm:flex":""} onClick={()=>navigate("/blogs")}>All Blogs</button>
        <button className={location.pathname==="/myblogs"?"underline underline-offset-4 text-white hidden sm:flex":""}  onClick={()=>navigate("/myblogs")}>My Blogs</button>
        <button className={location.pathname==="/addblogs"?"underline underline-offset-4 text-white hidden sm:flex":""}  onClick={()=>navigate("/addblogs")}>Add Blog</button>
    </div>}
    <div className="flex space-x-5">
       {!isLoggedIn && <button className="bg-orange-600 rounded-full py-2 px-3" onClick={()=>navigate("/login")}>Log in</button>}
       {!isLoggedIn && <button className="bg-orange-600 rounded-full  py-2 px-3" onClick={()=>navigate("/signup")}>Sign Up</button>}
        {isLoggedIn &&<button className="bg-orange-600 rounded-full  py-2 px-3" onClick={(e)=>handleLogout(e)}>Log Out</button>}

    </div>
</div>)
}