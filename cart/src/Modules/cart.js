
const price=26000;

//초기 data
const data=[[{
    
}]]

const ADD='cart/ADD';//추가함
const REMOVE='cart/REMOVE';//삭제
const QUANTITY='cart/QUANTITY'; //수량추가
const COLOR='cart/COLOR';//color 변경

let id=0;//add될때마다 1씩 추가



// export const add=(id,size,color,counter)=>({
//     type:ADD,
//     data:{
//         id:id,
//         size:size,
//         color:color,
//         counter:counter,
//     }
//     ,
// });
export const add=(data)=>({
    type:ADD,
    data
})
export const counterChange=(id,counter)=>({
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
            
console.log(state);
            return state.concat(action.data)

        case QUANTITY:
            console.log(action)
            return  state.map( memo => memo.id === action.id ? {...memo, counter: action.counter} : memo)
            // {
                
                // ...state,
                //  counter:state.map( count => count.id === action.id ? {...count, counter: action.counter} : count)
               
            // }


        case REMOVE:
                return state.filter(memo=>memo.id!==action.id)



        default:return state;

    }
}

