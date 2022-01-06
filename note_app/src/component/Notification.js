import React from "react";
import Button from "./button";
import {IoIosCreate} from "react-icons/io";

const Notification=()=>{
    return(
        <aside>
            <div className=""></div>
            <Button  contents={<IoIosCreate size={30}/>} color="light_gray" classN="notification" contentsText="쓰기"></Button>
        </aside>
    )
}

export default Notification