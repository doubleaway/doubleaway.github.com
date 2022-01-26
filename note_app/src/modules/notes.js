const ADD='notes/ADD';//추가함
const REMOVE='notes/REMOVE';//삭제
const TOGGLE='notes/TOGGLE';//중요 체크/해제
const INPUT_CHANGE='notes/INPUT_CHANGE';//input값 변경

let id=7;//add될때마다 1씩 추가

export const add=(memo)=>({
    type:ADD,
    memo:{
        id:id++,
        content:memo,
        importance:false,
    }
});
export const toggle=(id)=>({
    type:TOGGLE,
    id
});
export const remove=(id)=>({
    type:REMOVE,
    id
});
export const inputChange=input=>({
    type:INPUT_CHANGE,
    input
});




//초기 data
const data={
    input:'',
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


function notes(state=data,action){
    switch (action.type){
        case INPUT_CHANGE:
            return{
                ...state,
                input:action.input
            };
        case TOGGLE:
            return state.data_con.map(
                memo=>
                    memo.id===action.id?{...memo,active:!memo.active}:memo
            )

        case ADD:
            return{
                ...state,
                data_con: state.data_con.concat(action.memo)
            };
        case REMOVE:
            return {
                ...state,
                data_con: state.data_con.filter(memo=>memo.id!==action.id)

            };
        default:return state;

    }
}

export default notes;