import react,{useState} from  "react";


const List=({data,count,onIncrease,onDecrese,allCount,allCountFunc,alldeCountFunc})=>{
    return (
    <>
     
         {  data.map(
                data=>(<ListItem data={data} count={count} onDecrese={onDecrese} onIncrease={onIncrease} allCount={allCount} allCountFunc={allCountFunc} alldeCountFunc={alldeCountFunc}/>)
            )
        }
    </>
    )
}

const ListItem=({data,count,onIncrease,onDecrese,allCount,allCountFunc,alldeCountFunc})=>{
    const [test,setTest]=useState(0);
    const {color,size}=data;
    if(test<0){
      setTest(0);
      alldeCountFunc(0);
      onDecrese(0);
    }

    
    const onClick=()=>{
        alldeCountFunc(allCount-1);
        setTest(test-1);
        onDecrese(test);

    }
    const increase=()=>{
        if(allCount<5){
            allCountFunc(allCount+1);
            setTest(test+1)
            onIncrease(test);
        }

    }
   
    return   (
       
         <div className="list_item">
            <p><span>{size}</span> / <span>{color}</span></p>
            <div className="count_box">
                <span onClick={onClick}>-</span>
                <span className="count_box">{test}</span>
                <span onClick={increase}>+</span>
            </div>
            <span className="close_btn">x</span>
        </div>
    )
}


export default List;