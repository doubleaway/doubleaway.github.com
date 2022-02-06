import React, {useState} from "react";


const ImgBox=({classN,color,number,imgChange})=>{
    console.log("d");
    const imgChangeFunc=()=>{
        console.log();
        imgChange(img);

    }

    let imgsrc=[];
    for(var i=0; i<Number(number);i++){
        imgsrc.push(i+1);
    }
    const srcO="img/"+color+'cloth (';
    const srcE=").png";
    return(
        <div className={classN} >
            {
                imgsrc.map(index,img=>(
                    <img key={index} src={srcO+img+srcE} onClick={imgChangeFunc}/>
                ))
            }
        </div>
    )
}


export default ImgBox;