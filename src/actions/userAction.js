import {Login_Fail,Login_Sucess,Logout_sucess,Logout_Fail, Sign_sucess, Sign_Fail} from '../constants/userConstants'
import axios from "../axios"
import { AxiosError } from 'axios';
export const LoginUser=(email,password)=>async (dispatch)=>{
    
    try{
        const header={'Content-Type':'application/json'};
         const data=await axios.post("/api/user/login",{email,password},header);
        dispatch({
            type:Login_Sucess,
            payload:data
        })
    }
    catch(error){
        const err=error;
        dispatch({
            type:Login_Fail,
            payload:err.response.data.message
        })
    }
}
export const LogoutUser=()=>async(dispatch)=>{
    dispatch({
        type:Logout_sucess
    })
}
export const SignUser=(email,password,name)=>async (dispatch)=>{
    try{
        const header={'Content-Type':'application/json'};
         const data=await axios.post("/api/user/signup",{email,password,name},header);
        dispatch({
            type:Sign_sucess,
            payload:data
        })
    }
    catch(error){
        const err=error;
        console.log(error);
        dispatch({
            type:Sign_Fail,
            payload:err.response.data.message
        })
    }
}