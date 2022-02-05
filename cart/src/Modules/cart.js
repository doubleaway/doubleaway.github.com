





//초기 data
const data=[

        {id:0,
            title:"title",
            color:"gray",
            size:'M',
            price:25000,
            amount:0,
            cart:false,
        },


    ]



const ADD='cart/ADD';//추가함
const REMOVE='cart/REMOVE';//삭제
const QUANTITY='cart/quantity'; //수량추가
const CALC='cart/calc';//계산

let id=0;//add될때마다 1씩 추가

export const add=(memo)=>({
    type:ADD,
    memo:{
        id:id++,
        content:memo,
        importance:false,
    }
});
export const QUANTITY=(id)=>({
    type:TOGGLE,
    id
});
export const remove=(id)=>({
    type:REMOVE,
    id
});
export const remove=(val)=>({
    type:REMOVE,
    val
});






export default function notes(state=data,action){

    switch (action.type){
        case INPUT_CHANGE:
            return{
                ...state,
                input:action.input
            };
        case TOGGLE:
            return {
                data_con:state.data_con.map( memo => memo.id === action.id ? {...memo, active: !memo.active} : memo)
            }

        case ADD:
            return{
                ...state,
                data_con: state.data_con.concat(action.memo),
            };
        case REMOVE:
            return {
                ...state,
                data_con: state.data_con.filter(memo=>memo.id!==action.id)

            };



        default:return state;

    }
}

