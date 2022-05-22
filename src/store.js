import {combineReducers,applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer';
import {BlogReducer,myBlogReducer,AddBlogReducer,DelteBlogReducer} from "./reducers/BlogReducer"
const middleWare=[thunk];
const initialState={}
const reducer=combineReducers({user:userReducer,blogs:BlogReducer,myblogs:myBlogReducer,addedblog:AddBlogReducer,deletedblog:DelteBlogReducer})
export const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)));