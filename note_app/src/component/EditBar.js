import React, {useState} from "react";
import { IoIosCreate,IoIosPricetag,IoIosTrash,IoMdSwap,IoIosSearch } from "react-icons/io";
import Button from "./button";
import NotesContainer from "../containers/memoContainer";
function EditBar({saveFunc,visible}){

    // const [save,setSave]=useState(visible);
    // const writeFunc=()=>{setSave(true)};
    // console.log(visible);
    const onWrite=()=>{
        saveFunc(true);
    }

    return(
        <>
            <ul className="edit_bar">
                <li onClick={onWrite}><Button  contents={<IoIosCreate size={30}/>}  color="light_gray" classN="edit" contentsText="쓰기"></Button></li>
                {/* <li><Button contents={<IoIosPricetag size={30}/>} color="light_gray" classN="edit" contentsText="태그"></Button></li>
                <li><Button contents={<IoIosTrash size={30}/>} color="light_gray" classN="edit" contentsText="삭제"></Button></li>
                <li><Button contents={<IoMdSwap size={30}/>} color="light_gray" classN="edit" contentsText="정렬"></Button></li> */}
            </ul>
            <div className="search_bar">
                <input type="text" placeholder="제목을 입력해주세요"/>
                <Button contents={<IoIosSearch size={35}/>}  color="light_gray" classN="edit" />
                {/* <button className="edit_btn" onClick={onWrite} ><IoIosSearch size={35}/>글쓰기</button> */}
            </div>
            {/*글쓰기*/}
            { visible? <NotesContainer saveFunc={saveFunc} visible={visible}/>:''}
        </>
    )
}

export default EditBar;