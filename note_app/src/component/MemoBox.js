import React, {useState} from "react";
import { IoIosPricetag,IoIosStar } from "react-icons/io";
function MemoCon({memoCon,onToggle}){

    const {title,content,date,active,id}=memoCon;
    const [text,setText]=useState();
    const toggle=id=>onToggle(id);
    return(
        <div className="memo_box">
            <div className="label_box">
                {/*{label}*/}
                <IoIosPricetag/>label
            </div>
            <div className="memo_content_box">
                <div className="title_box">
                    <h1 className="content_title"><input type="checkbox" name={title}/></h1>
                    <p onClick={()=>{toggle(id)}} className={active?"color_main":""}>
                        <IoIosStar size={20}/>
                    </p>
                </div>

                <div className="content_txt">{content}</div>
                <div className="color_gray">{date}</div>
            </div>
        </div>
    )
}

function MemoBox({memoCon,onToggle}){
    return(
        <>
            { console.log(onToggle)}
            {

                memoCon.memoCon.data_con.map(
                    memoCon=>(<MemoCon memoCon={memoCon} key={memoCon.id} onToggle={onToggle}/> )
                )
            }
        </>
        // <div>
        //     {console.log(memoCon.memoCon.data_con)}
        // </div>
    )
}

export default MemoBox;