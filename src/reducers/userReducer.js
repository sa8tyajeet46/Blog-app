import {Login_Fail,Login_Sucess,Logout_Fail,Logout_sucess,Sign_Fail,Sign_sucess} from "../constants/userConstants"
export const userReducer=(state={isLoggedIn:false},action)=>{
    switch(action.type){
        case Login_Fail:
        case Sign_Fail:
            return {
                isLoggedIn:false,
                error:action.payload,
            }
        case Login_Sucess:
        case Sign_sucess:
            return {
                isLoggedIn:true,
                user:action.payload
            }
        case Logout_sucess:
            return {
            isLoggedIn:false
        }
        default :
        return state;
     
    }
}