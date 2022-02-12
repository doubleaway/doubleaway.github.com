
const price=26000;


//초기 data
const data=[

    ]

const ADD='cart/ADD';//추가함
const REMOVE='cart/REMOVE';//삭제
const QUANTITY='cart/QUANTITY'; //수량추가
const COLOR='cart/COLOR';//color 변경

let id=0;//add될때마다 1씩 추가



export const add=(size,color,count)=>({
    type:ADD,
    data:{
        id:id++,
        size:size,
        color:color,
        counter:1,
    }
});
export const counter=(id,counter)=>({
    type:QUANTITY,
    id,
    counter:counter
});
export const remove=(id)=>({
    type:REMOVE,
    id

});

export const colorChange=(color)=>({
    type: COLOR
});




export default function cart(state=data,action){

    switch (action.type){
        case ADD:
            return state.concat(action.data)

        case QUANTITY:
            return {
                // counter:state.map( memo => memo.id === action.id ? {...memo, counter: counter} : memo)
                ...state

            }


        case REMOVE:
                return state.filter(memo=>memo.id!==action.id)



        default:return state;

    }
}

