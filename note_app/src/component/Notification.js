import React from "react";
import Button from "./button";
import {IoIosCreate} from "react-icons/io";

const Notification=()=>{
    return(
        <div className="notification_box">
            <aside >
                <div className="">뭐시야</div>
                <Button contents={<IoIosCreate size={30}/>} color="light_gray" classN="notification" contentsText="쓰기"></Button>
                <Button contents={<IoIosCreate size={30}/>} color="light_gray" classN="notification" contentsText="쓰기"></Button>
            </aside>
        </div>
    )
}

export default Notification