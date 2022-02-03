import React from "react";


const ImgBox=({classN,color,number})=>{

    let imgsrc=[];
    for(var i=0; i<Number(number);i++){
        imgsrc.push(i+1);
    }
    console.log(imgsrc);
    const srcO="img/"+color+'cloth (';
    const srcE=").png";
    return(
        <div className={classN}>
            {
                imgsrc.map(img=>(
                    <img key={img} src={srcO+img+srcE}/>
                ))
            }
        </div>
    )
}


export default ImgBox;