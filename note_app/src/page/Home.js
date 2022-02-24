import React, {useState} from "react";
import MenuBar from "../component/MenuBar";
import ContentsListCard from "../component/ContentsListCard";
import List from "../component/List";
import Nav from "../component/Nav";
import EditBar from "../component/EditBar";
import Notification from "../component/Notification";
import MemoContents from "../component/features/MemoContent";
import NotesContainer from "../containers/memoContainer";
import ListContainer from "../containers/ListContainer";
const Home=()=>{
const [post,SetPost]=useState(true);
const [visible,setVisible]=useState(false);
const saveFunc=(visible)=>{
    setVisible(visible);
}

const onClose=()=>{

}
return(
    <section className="home_box">
        <div className="nav_box">
            <Nav/>
        </div>
     
        <div className="home_content">
            <div className="edit_bar_box">
                <EditBar saveFunc={saveFunc} visible={visible}/>
            </div>
            {/*<MenuBar/>*/}
            <ListContainer/>
        </div>
        {/*알림창*/}
        {/*<Notification/>*/}
        {/*글쓰기*/}
        {/* {visible?<NotesContainer/>:''} */}
    </section>

)
}

export default Home;