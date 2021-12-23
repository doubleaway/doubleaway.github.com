import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import PostList from "./pages/PostList";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
function App() {
  return (
            <>
                <Route Component={PostList} path="/" exact={true}/>
             <Route Component={LoginPage} path="/login"/>
             <Route Component={PostPage} path="/register"/>
             <Route Component={RegisterPage} path="/write"/>
             <Route Component={WritePage} path="/@:username/:postid"/>
            </>
  );
};

export default App;
