import React, {useCallback, useState} from "react";
// import ImgBox from "../Components/ImgBox";
import Button from "../Components/button";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Order=()=>{

return(
    <section >
        <header>
            <h1>The Palete</h1>
            <span>포트폴리오용으로 작업된 사이트입니다.</span>
            <Button color="none" contents="장바구니"/>

        </header>
        <div className="body_box">
           <div className="pic_box">
               <ImgBox number="1" classN="main" color="black" mainImg="1"/>
                <ImgBox number="4" classN="sub" color="black"/>
           </div>
           <div className="ex_box">
               <h1>
                   상품명
               </h1>
               <hr/>
               <div className="price_box">
                   <h3>Price</h3>
                   <h2>65,000</h2>
               </div>
               <hr/>
               <div className="info_box">
                   <h1><span><AiOutlineShoppingCart/> </span> 배송비 <span>5000원</span></h1>
                   <p>10만원이상 구매 시 <span className="axent"> 무료 배송!</span></p>
                   <p ><span className="axent">오늘 주문 시 이틀 뒤 도착예정</span>(지역에 따라 배송이 지연될 수 있습니다. 경기/서울 기준)</p>               </div>
               <hr/>
               <div className="color_change_button_box">
                   <h3>Color</h3>

                   <Button color="red" contents="" classN="color_change"/>
                   <Button color="gray" contents="" classN="color_change"/>
                   <Button color="black" contents="" classN="color_change"/>
               </div>
           </div>
           <div className="select_box">3</div>
        </div>
    </section>
)
    
    
}
const ImgBox=({classN,color,number,mainImg})=>{
    const [imgChange,setImgChange]=useState(1);
    const [count, setCount] = useState(0);
    const imgChangeFunc= useCallback(()=> {

            setImgChange(this);
            setCount(prevCount => prevCount + 1);
            console.log(imgChange);
        },[imgChange]
    )
    let img;
    img=<li></li>;

    let imgsrc=[];
    for(var i=0; i<Number(number);i++){
        imgsrc.push(i+1);
    }
    const srcO="img/"+color+'cloth (';
    const srcE=").png";
    var mainSrc;
    mainSrc=<img src={srcO+imgChange+srcE}/>
    return(
        <>
            {classN=='main'?<div className="main"><img src={srcO+imgChange+srcE}/><p>{count}</p>{img} {mainSrc}</div>:''}
            {classN=='sub'? <div className="sub">{imgsrc.map(img=>(<img key={img} src={srcO+img+srcE} onClick={imgChangeFunc}/>))}</div>:''}
        </>
    )
}



export default Order;
