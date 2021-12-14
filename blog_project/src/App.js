import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostList from "./pages/PostList";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
function App() {
  return (
   <>
       <Routes>
         <Route component={PostList} path={"/"} exact/>
         <Route component={LoginPage} path="/login"/>
         <Route component={PostPage} path="/register"/>
         <Route component={RegisterPage} path="/write"/>
         <Route component={WritePage} path="/@:username/:postid"/>
       </Routes>
   </>
  );
}

export default App;
