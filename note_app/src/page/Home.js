import React, {useState} from "react";
import Nav from "../component/Nav";
import EditBar from "../component/EditBar";
import Notification from "../component/Notification";
import MemoContents from "../component/features/MemoContent";
import NotesContainer from "../containers/memoContainer";
import ListContainer from "../containers/ListContainer";
const Home=()=>{
const [visible,setVisible]=useState(false);
const saveFunc=(visible)=>{
    setVisible(visible);
}
const [removeAll,setRemoveAll]=useState(false);

const [notification,setNotification]=useState(false);

const [concern,setConcern]=useState(false);

const notificationVisibleFunc=(del)=>{
    setRemoveAll(del)
    setNotification(!notification);
}
const resetNotification=()=>{
    setNotification(false);
    setRemoveAll(false);
}

const concernFunc=()=>{
   setConcern(!concern);
}

return(
    <section className="home_box">
        <div className="nav_box">
            <Nav/>
        </div>
     
        <div className="home_content">
            <div className="edit_bar_box">
                <EditBar saveFunc={saveFunc} visible={visible} notificationVisibleFunc={notificationVisibleFunc}   resetNotification={resetNotification} concernFunc={concernFunc} concern={concern}/>
            </div>
            {/*<MenuBar/>*/}
            <ListContainer removeAll={removeAll} concern={concern}/>
        </div>
        {/*알림창*/}
        {notification&&!visible?<Notification notificationVisibleFunc={notificationVisibleFunc}/>:''}
        {/*글쓰기*/}
        {/* {visible?<NotesContainer/>:''} */}
    </section>

)
}

export default Home;