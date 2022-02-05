





//초기 data
const data=[

    {
        id:0,
        color:"gray",
        count:4
    },


]



const IMGCHANGE='cart/imgChange';
const COLOR='cart/color';//color

let id=0;//add될때마다 1씩 추가


export const imgChangeFunc=(id)=>({
type:IMGCHANGE,
id
});
export const remove=(color)=>({
type:COLOR,
color
});





export default function cart(state=data,action){

switch (action.type){
    case ADD:
        return{
            ...state,
            
        };
    case TOGGLE:
        return {
            data_con:state.data_con.map( memo => memo.id === action.id ? {...memo, active: !memo.active} : memo)
        }



    default:return state;

}
}

