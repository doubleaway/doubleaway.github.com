import React from "react";
import {IoIosPricetag,IoIosStar} from "react-icons/io";
//
import moment from 'moment';
import 'moment/locale/ko';

function MemoContents(input,memoCon,onChangeInput,onInsert,onToggle,onRemove){
    const nowTime = moment().format('YYYY.MM.DD');
    console.log(nowTime);
    return (
        <div className="inputs_box">
            <div className="memo_box">
                <div className="title_box">
                    <h1 className="content_title"></h1>
                    <p>
                        <IoIosStar size={20}/>
                    </p>
                </div>

                <div className="content_txt">
                    <textarea placeholder="메모를 입력해주세요"
                           type="text"
                           className="contents_inputs"
                           name="memo_contents"
                    />
                </div>
                <div className="color_gray">{nowTime}</div>
            </div>
        </div>
    )
}

export default MemoContents;