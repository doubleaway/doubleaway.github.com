import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import List from "../Components/List";
import {add,remove,counterChange} from "../Modules/cart";
import ShoppingBasket from "../Page/ShoppingBasket";

const OrderContainer=()=> {
const selectCont=useSelector(state=>state.cart);
const dispatch=useDispatch();
const onAdd=useCallback((data)=>dispatch(add(data)),[dispatch]);
const onDelete=useCallback((id)=>dispatch(remove(id)),[dispatch]);
const onCounter=useCallback((id,counter)=>dispatch(counterChange(id,counter)),[dispatch]);
console.log(selectCont);
console.log("뭐임?왜 안찍음?")
    return(
    <ShoppingBasket selectCount={selectCont} onCounter={onCounter} onDelete={onDelete}/>
    )
}

export default OrderContainer;