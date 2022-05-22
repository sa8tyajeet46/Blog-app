import {LOADBLOG_FAIL,LOADBLOG_SUCESS,GETMYBLOGS_FAIL,GETMYBLOGS_SUCESS,ADDBLOG_SUCESS,ADDBLOG_FAIL,REMOVEBLOG_FAIL,REMOVEBLOG_SUCESS} from "../constants/blogConstants";
export const BlogReducer=(state={blogs:[],error:null},action)=>{
    switch(action.type)
    {
    case LOADBLOG_FAIL:
        return {
            ...state,
            error:action.payload
        }
    case LOADBLOG_SUCESS:
        return {
            blogs:action.payload,
            error:null
        }
    default:
        return state
    }

}
export const myBlogReducer=(state={myblogs:[],error:null},action)=>{
    switch(action.type)
    {
    case GETMYBLOGS_FAIL:
        return {
            ...state,
            error:action.payload
        }
    case GETMYBLOGS_SUCESS:
        return {
            blogs:action.payload,
            error:null
        }
    default:
        return state
    }

}
export const AddBlogReducer=(state={blog:{},error:null},action)=>{
    switch(action.type)
    {
    case ADDBLOG_FAIL:
        return {
            ...state,
            error:action.payload
        }
    case ADDBLOG_SUCESS:
        return {
            blog:action.payload,
            error:null
        }
    default:
        return state
    }

}
export const DelteBlogReducer=(state={deletedblog:{},error:null},action)=>{
    switch(action.type)
    {
    case REMOVEBLOG_FAIL:
        return {
            ...state,
            error:action.payload
        }
    case REMOVEBLOG_SUCESS:
        return {
            blog:action.payload,
            error:null
        }
    default:
        return state
    }

}