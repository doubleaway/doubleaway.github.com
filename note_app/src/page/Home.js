import React from "react";
import MenuBar from "../component/MenuBar";
import ContentsListCard from "../component/ContentsListCard";
import List from "../component/List";
import Nav from "../component/Nav";
import EditBar from "../component/EditBar";
const Home=()=>{
return(
    <section className="home_box">
        <div className="nav_box">
            <Nav/>
        </div>
        <div className="edit_bar_box">
            <EditBar/>
        </div>
        <div className="home_content">
            <MenuBar/>
            <List/>
        </div>

    </section>

)
}

export default Home;