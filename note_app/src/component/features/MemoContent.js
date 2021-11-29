import React from "react";
import {IoIosPricetag} from "react-icons/io";

function MemoContents(){
    return (
        <div className="inputs_box">
            <div className="memo_box">
                <div className="title_box">
                    <h1 className="content_title"><input type="checkbox"/></h1>
                    <p >
                        <IoIosPricetag size={20}/>
                    </p>
                </div>

                <div className="content_txt">
                    <textarea placeholder="메모를 입력해주세요"
                           type="text"
                           className="contents_inputs"
                           name="memo_contents"
                    />
                </div>
                <div className="color_gray">2020.02.01</div>
            </div>
        </div>
    )
}

export default MemoContents;