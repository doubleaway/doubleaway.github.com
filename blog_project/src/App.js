import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import PostList from "./pages/PostList";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
function App() {
  return (
            <Routes>
                <Route element={<PostList/>} path="/" exact={true}/>
             <Route element={<LoginPage/>} path="/login"/>
             <Route element={<PostPage/>} path="/register"/>
             <Route element={<RegisterPage/>} path="/write"/>
             <Route element={<WritePage/>} path="/@:username/:postid"/>
            </Routes>
  );
};

export default App;
