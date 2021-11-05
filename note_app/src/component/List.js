import React from "react";
import MemoBox from "./MemoBox";

function List(){
    return(
        <article className="list_box_square">
            <MemoBox/>
            <MemoBox/>
            <MemoBox/>
            <MemoBox/>
            <MemoBox/>
            <MemoBox/>

        </article>
    )
}

export default List;