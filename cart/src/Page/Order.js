import React from "react";
import ImgBox from "../Components/ImgBox";
import Button from "../Components/button";

const Order=()=>{



return(
    <section >
        <header>
            <h1>The Palete</h1>
            <Button color="none" contents="장바구니"/>
        </header>
        <div className="body_box">
           <div className="pic_box">
               <ImgBox number="1" classN="main" color="black"/>
                <ImgBox number="4" classN="sub" color="black"/>
           </div>
           <div className="ex_box">2</div>
           <div className="select_box">3</div>
        </div>
    </section>
)
    
    
}


export default Order;
