import React, {useCallback} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import{add,inputChange,toggle,remove} from "../modules/notes";
import MemoContents from "../component/features/MemoContent";
const NotesContainer=()=>{

    const memoCon=useSelector(state=>state.data_con);
    const inputs=useSelector(state=>state.input);
    const dispatch=useDispatch();

    const onAdd=useCallback(text=>dispatch(add(text)),[dispatch]);
    const onToggle=useCallback(id=>dispatch(toggle(id)),[dispatch]);
    const onRemove=useCallback(id=>dispatch(remove(id)),[dispatch]);
    const inputChange=useCallback(text=>dispatch(add(text)),[dispatch]);

    return(

        <MemoContents
            memoCon={memoCon}
            onAdd={onAdd}
            onToggle={onToggle}
            onRemove={onRemove}
            inputChange={inputChange}
            inputs={inputs}
        />
    );
}


export default NotesContainer;