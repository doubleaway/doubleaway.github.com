import React, {useCallback} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {toggle,remove,concern} from "../modules/notes";
import MemoContents from "../component/features/MemoContent";
import List from "../component/List";
const ListContainer=()=>{
    const dispatch=useDispatch();
    const onToggle=useCallback(id=>dispatch(toggle(id)),[dispatch]);
    const onRemove=useCallback(id=>dispatch(remove(id)),[dispatch]);
    const onConcern=useCallback(cocern=>dispatch(cocern(cocern)),[dispatch])
    const memoCon=useSelector(state=>state.notes);

    return(

      <List memoCon={memoCon} onToggle={onToggle} onRemove={onRemove} onConcern={onConcern}/>
    );
}


export default ListContainer;