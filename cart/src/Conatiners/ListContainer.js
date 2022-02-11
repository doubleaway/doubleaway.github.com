import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import List from "../Components/List";
import {add} from "../Modules/cart";
import Order from "../Page/Order";


const ListContainer=()=>{
    const selectCont=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    const onAdd=useCallback(size=>dispatch(add(size)),[dispatch]);
    //const id=selectCont.id;
    return(
        // <List data={selectCont} count={count} onDecrese={onDecrese} onIncrease={onIncrease} allCount={allCount} allCountFunc={allCountFunc} alldeCountFunc={alldeCountFunc}  />
        <Order data={selectCont} onAdd={onAdd}/>
    )
}


export default ListContainer;