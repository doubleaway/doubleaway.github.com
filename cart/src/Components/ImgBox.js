import React, {useState} from "react";


const ImgBox=({classN,color,number})=>{
    const [imgChange,setImgChange]=useState('');
    let imgsrc=[];
    for(var i=0; i<Number(number);i++){
        imgsrc.push(i+1);
    }
    const srcO="img/"+color+'cloth (';
    const srcE=").png";
    return(
        <div className={classN}>
            {
                imgsrc.map(img=>(
                    <img key={img} src={srcO+img+srcE} onClick={}/>
                ))
            }
        </div>
    )
}


export default ImgBox;