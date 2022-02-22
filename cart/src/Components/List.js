import react,{useState} from  "react";


const List=({data,count,onIncrease,onDecrese,allCount,allCountFunc,alldeCountFunc,onDelete,OnCounterFunc})=>{

    return (
    <>
     
         {  data.map(
                data=>(<ListItem data={data} id={data.id}count={count} onDecrese={onDecrese} onIncrease={onIncrease} allCount={allCount} allCountFunc={allCountFunc} alldeCountFunc={alldeCountFunc} onDelete={onDelete} OnCounterFunc={OnCounterFunc}/>)
            )
        }
    </>
    )
}

const ListItem=({data,count,onIncrease,onDecrese,allCount,allCountFunc,alldeCountFunc,onDelete,id,OnCounterFunc})=>{
    const [test,setTest]=useState(1);
    const {color,size}=data;

    
    const onClick=()=>{
        if(allCount<=0||test<=0){}

        else{
        alldeCountFunc(allCount-1);
        setTest(test-1);
        onDecrese(test);

        }

    }
    const increase=()=>{
        if(allCount<5){
            allCountFunc(allCount+1);
            setTest(test+1)
            onIncrease(test);
            OnCounterFunc(id,test);

        }

    }
    const onRemove=()=>{
        onDelete(id);

    }

    return   (
       
         <div className="list_item">

            <p><span>{size}</span> / <span>{color}</span></p>
            <div className="count_box">
                <span onClick={onClick}>-</span>
                <span className="count_box">{test}</span>
                <span onClick={increase}>+</span>
            </div>
            <span className="close_btn" onClick={onRemove}>x</span>
        </div>
    )
}


export default List;