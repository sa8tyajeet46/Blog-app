import { useEffect } from "react";
import { useNavigate } from "react-router"

export function Hero(){
    useEffect(()=> navigate("/login"),[])
    const navigate=useNavigate();
   
    return (<div className="w-full flex justify-center bg-gradient-to-r from-gray-200 to-gray-500 h-[100vh] items-center text-6xl space-y-5 text-white flex-col">
  <div>
      Welcome to the app ...
  </div>
  <div><button onClick={()=>navigate("/login")} className="text-white bg-orange-500 rounded-full  justify-center items-center p-4">Login</button> to continue</div>

    </div>)
}