import React from "react";
import Test2 from "./Test2";
import { Route, Routes } from "react-router-dom";
import ListContainer from "../Conatiners/ListContainer";
const Test=()=>{
    return(
    <Routes>
        <Route path='/test2' exact element={<Test2/>} />
       <Route path='/' element={<ListContainer/>} />
   </Routes>
    )
}

export default Test;