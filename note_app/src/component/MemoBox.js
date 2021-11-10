import React from "react";
import { IoIosPricetag } from "react-icons/io";
function MemoCon({memoCon,onToggle}){

    const {title,content,date,active,id}=memoCon;


    return(
        <div className="memo_box">
            <div className="title_box">
                <h1 className="content_title"><input type="checkbox" name={title}/></h1>
                <p onClick={()=>{onToggle(id)}} className={active?"color_main":""}>
                    <IoIosPricetag size={20}/>
                </p>
            </div>

            <div className="content_txt">{content}</div>
            <div className="color_gray">{date}</div>
        </div>
    )
}

function MemoBox({memoCon,onToggle}){
    return(
        <>
            {
                memoCon.map(
                    memoCon=>(<MemoCon memoCon={memoCon} key={memoCon.id} onToggle={onToggle}/> )
                )
            }
        </>
    )
}

export default MemoBox;