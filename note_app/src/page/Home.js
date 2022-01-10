import React, {useState} from "react";
import MenuBar from "../component/MenuBar";
import ContentsListCard from "../component/ContentsListCard";
import List from "../component/List";
import Nav from "../component/Nav";
import EditBar from "../component/EditBar";
import Notification from "../component/Notification";
import MemoContents from "../component/features/MemoContent";
const Home=()=>{
const [post,SetPost]=useState(true);


const onClose=()=>{

}
return(
    <section className="home_box">
        <div className="nav_box">
            <Nav/>
        </div>
        <div className="edit_bar_box">
            <EditBar/>
        </div>
        <div className="home_content">

            {/*<MenuBar/>*/}
            <List/>
        </div>
        {/*알림창*/}
        {/*<Notification/>*/}
        {/*글쓰기*/}
        {/*<MemoContents/>*/}
    </section>

)
}

export default Home;