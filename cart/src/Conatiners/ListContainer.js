import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import List from "../Components/List";


const ListContainer=({count,onIncrease,onDecrese,allCount,allCountFunc,alldeCountFunc})=>{
    const selectCont=useSelector(state=>state.cart);
 
    //const id=selectCont.id;
    return(
        <List data={selectCont} count={count} onDecrese={onDecrese} onIncrease={onIncrease} allCount={allCount} allCountFunc={allCountFunc} alldeCountFunc={alldeCountFunc} />
    )
}


export default ListContainer;