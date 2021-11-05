import React from "react";
import { IoTrashSharp } from "react-icons/io5";
function MemoBox(){
    return(
        <div className="memo_box">
            <div className="title_box">
                <h1 className="content_title">Title</h1>
                <p>
                    <IoTrashSharp/>
                </p>
            </div>

            <div className="content_txt">contententkfalesjfkldfsjk;dasjaksdfjdsakjsdaf;kjaf;jdsj;jfdlfkls;kldjsfkjj</div>
        </div>
    )
}

export default MemoBox;