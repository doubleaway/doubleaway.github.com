import React, {useState} from "react";
import {IoIosCreate, IoIosPricetag, IoIosStar} from "react-icons/io";
//
import moment from 'moment';
import 'moment/locale/ko';
import Button from "../button";

function MemoContents({memoCon,onAdd,onToggle,inputChange,input}){
    const nowTime = moment().format('YYYY.MM.DD');
    const [memo,setMemo]=useState('');
    const onChange=e=>{
        e.preventDefault();
        setMemo(e.target.value);
    };
    const onSubmit=e=>{

        onAdd(memo);
        setMemo('');//등록후 초기화
        e.preventDefault();
    }

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
                    <form onSubmit={onSubmit}>
                        <textarea placeholder="메모를 입력해주세요"
                               type="text"
                               className="contents_inputs"
                               name="memo_contents"
                                  value={memo}
                                  onChange={onChange}
                        />
                        <Button type="submit" contents={<IoIosCreate size={30}/>} color="light_gray" classN="edit" contentsText="저장"></Button>
                    </form>

                </div>
                <div className="color_gray">{nowTime}</div>
            </div>
        </div>
    )
}

export default MemoContents;