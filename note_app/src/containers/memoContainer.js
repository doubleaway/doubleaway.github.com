import React from "react";
import {connect} from "react-redux";
import{add,inputChange,toggle,remove} from "../modules/notes";
import MemoContents from "../component/features/MemoContent";
const NotesContainer=({
    inputs,
    memoCon,
    inputChange,
    add,
    toggle,
    remove
})=>{
return(

    <MemoContents
        inputs={inputs}
        memoCon={memoCon}
        onChangeInput={inputChange}
        onInsert={add}
        onToggle={toggle}
        onRemove={remove}/>

    );
};

export default connect(
//    비구조화 할당을 통해 memo를 분리
    //state.memos.input대신 memos.input사용
    ({memoContents})=>({
        input:NotesContainer.inputs,
        memoCon:NotesContainer.memoCon
    }),
    {
        inputChange,
        add,
        toggle,
        remove,
    },
)(NotesContainer);
