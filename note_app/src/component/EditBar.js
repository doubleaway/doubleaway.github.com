import React from "react";
import { IoIosCreate,IoIosPricetag,IoIosTrash,IoMdSwap,IoIosSearch } from "react-icons/io";
import Button from "./button";
function EditBar(){
    return(
        <>
            <ul className="edit_bar">
                <li><Button contents={<IoIosCreate size={30}/>} color="light_gray" classN="edit" contentsText="쓰기"></Button></li>
                {/*<li><Button contents={<IoIosPricetag size={30}/>} color="light_gray" classN="edit" contentsText="태그"></Button></li>*/}
                <li><Button contents={<IoIosTrash size={30}/>} color="light_gray" classN="edit" contentsText="삭제"></Button></li>
                <li><Button contents={<IoMdSwap size={30}/>} color="light_gray" classN="edit" contentsText="정렬"></Button></li>
            </ul>
            <div className="search_bar">
                <input type="text" placeholder="제목을 입력해주세요"/>
                <Button contents={<IoIosSearch size={35}/>}  color="light_gray" classN="edit" />
            </div>
        </>
    )
}

export default EditBar;