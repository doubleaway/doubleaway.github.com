import React, {useState, useReducer, useCallback} from "react";
import MemoBox from "./MemoBox";

function reducer(state,action){
    switch (action.type){
        case "TOGGLE_ITEM":return{
            ...state,
            data_con:state.data_con.map(data=>data.id===action.id?{
                ...data,active:!data.active}:data
            )
        }
    }
}

const data={
       data_con:[
           {id:1,
            title:"title",
               content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:true,
            date:"2021.11.11"

        },
        {id:2,
            title:"title0",
            content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:false,
            date:"2021.11.11"

        },
        {id:3,title:"title1",content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:false,
            date:"2021.11.11"

        },
        {id:4,title:"title2",content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:true,
            date:"2021.11.11"

        },
        {id:5,title:"title3",content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:false,
            date:"2021.11.13"

        },
        {id:6,title:"title4",content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:true,
            date:"2021.11.14"

        },

]

}



function List(){
    const [state,dispatch]=useReducer(reducer,data);
    const {data_con}=state;

    //onToggle
    const onToggle=useCallback(
        (id)=>{
            dispatch(
                {
                    type:"TOGGLE_ITEM",
                    id
                }
            )
        },[]
    )
    return(
        <article className="list_box_square">

                <MemoBox memoCon={data_con} onToggle={onToggle}/>

        </article>
    )
}

export default List;