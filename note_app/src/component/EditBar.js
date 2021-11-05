import React from "react";
import { IoIosCreate,IoIosPricetag,IoIosTrash,IoMdSwap } from "react-icons/io";
import Button from "./button";
function EditBar(){
    return(
        <ul className="edit_bar">
            <li><Button contents={<IoIosCreate size={35}/>} color="light_gray" classN="edit" contentsText="쓰기"></Button></li>
            <li><Button contents={<IoIosPricetag size={35}/>} color="light_gray" classN="edit" contentsText="태그"></Button></li>
            <li><Button contents={<IoIosTrash size={35}/>} color="light_gray" classN="edit" contentsText="삭제"></Button></li>
            <li><Button contents={<IoMdSwap size={35}/>} color="light_gray" classN="edit" contentsText="정렬"></Button></li>
        </ul>
    )
}

export default EditBar;