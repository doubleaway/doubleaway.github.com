import React, {useState, useReducer, useCallback} from "react";
import MemoBox from "./MemoBox";


function List(memoCon,onToggle){


    return(
        <article className="list_box_square">

                <MemoBox memoCon={memoCon} onToggle={onToggle}/>

        </article>
    )
}

export default List;