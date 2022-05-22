
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import Header from './components/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Blogs from './components/Blogs';
import MyBlogs from './components/myBlogs';
import AddBlog from './components/addBlog';
import { Hero } from './components/Hero ';
function App() {
  return (
    <div className="">
  
     <BrowserRouter>
     <Header></Header>
     <Routes>
     <Route path="/" element={<Hero></Hero>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/signup" element={<Signup></Signup>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route>
       <Route path="/myblogs" element={<MyBlogs></MyBlogs>}></Route>
       <Route path="/myblogs" element={<MyBlogs></MyBlogs>}></Route>
       <Route path="/addblogs" element={<AddBlog></AddBlog>}></Route>
       <Route path="*" ></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
