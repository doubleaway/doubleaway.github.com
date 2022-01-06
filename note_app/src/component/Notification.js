import React from "react";
import Button from "./button";
import {IoIosCreate} from "react-icons/io";
import { AiFillCloseCircle,AiOutlineDelete } from "react-icons/ai";
import { GrTrash } from "react-icons/gr";

const Notification=()=>{
    return(
        <div className="notification_box">

            <aside >
                <Button contents={<AiFillCloseCircle color="white" size="60px"/>} color="light_gray" classN="notification" contentsText=""></Button>
                <div className="notification_icon">
                    <AiOutlineDelete color="white"/>
                    <h1>메모가 삭제됩니다.</h1>
                </div>
                <div className="notification_content"><p>다시 복구할 수 없습니다.</p><p>정말 삭제하시겠습니까? </p></div>
                <div className="notification_btn">
                    <Button contents={""} color="light_gray" classN="notification" contentsText="닫기"></Button>
                    <Button contents={""} color="light_gray" classN="notification" contentsText="삭제"></Button>
                </div>
            </aside>
        </div>
    )
}

export default Notification