



//초기 data
const data=[

        {id:0,

            color:"Gray",
            size:'M',
            price:26000,
            amount:0,

        },

        {id:2,
  
            color:"Black",
            size:'S',
            price:26000,
            amount:0,

        },
        {id:3,
 
            color:"Red",
            size:'XL',
            price:26000,
            amount:0,

        },

    ]



const ADD='cart/ADD';//추가함
const REMOVE='cart/REMOVE';//삭제
const QUANTITY='cart/QUANTITY'; //수량추가
const COLOR='cart/COLOR';//color 변경

let id=0;//add될때마다 1씩 추가

export const add=(memo,title,)=>({
    type:ADD,
    memo:{
        id:id++,
        title:title,
        content:memo,
        importance:false,
    }
});
export const quantity=(id)=>({
    type:QUANTITY,
    id
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
            return{
                ...state,
                data_con: state.data_con.concat(action.memo),
            };
        case QUANTITY:
            return {
                data_con:state.data_con.map( memo => memo.id === action.id ? {...memo, active: !memo.active} : memo)
            }

        case COLOR:
          return{
              ...state
          }
        case REMOVE:
            return {
                ...state,
                data_con: state.data_con.filter(memo=>memo.id!==action.id)

            };



        default:return state;

    }
}

