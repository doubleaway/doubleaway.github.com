import React, {useState, useReducer, useCallback} from "react";
import {IoIosPricetag, IoIosStar,IoMdTrash} from "react-icons/io";
// import MemoBox from "./MemoBox";
import moment from 'moment';
import 'moment/locale/ko';


function List({memoCon,onToggle,onRemove}){

    return(
        <article className="list_box_square">

            {
                memoCon.data_con.map(
                    memoCon=>(<MemoCon memoCon={memoCon} key={memoCon.id} onToggle={onToggle} onRemove={onRemove} /> )
                )
            }

        </article>
    )
}

function MemoCon({memoCon,onToggle,onRemove}){
const {title,content,date,active,id}=memoCon;
const [text,setText]=useState();

const nowTime = moment().format('YYYY.MM.DD');
return(
    <div className="memo_box">
        <div className="label_box">
            {/*{label}*/}
            <span onClick={()=>{onRemove(id)}}><IoMdTrash/></span>              <span onClick={()=>{onToggle(id)}} className={active?"color_main":""}>
                    <IoIosStar size={20}/>
                </span>
        </div>
        <div className="memo_content_box">
         
            <div className="content_txt">{content}</div>
            <div className="color_gray">{nowTime}</div>
        </div>
    </div>
)
}

// function MemoBox({memoCon},onToggle){
//     return(
//         <>
//
//             {
//
//                 memoCon.memoCon.data_con.map(
//                     memoCon=>(<MemoCon memoCon={memoCon} key={memoCon.id} onToggle={onToggle} /> )
//                 )
//             }
//         </>
//         // <div>
//         //     {console.log(memoCon.memoCon.data_con)}
//         // </div>
//     )
// }


export default List;