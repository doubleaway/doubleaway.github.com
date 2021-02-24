import React, { useState,useCallback } from 'react';
import { ImPacman } from "react-icons/im";
import './TodoInsert.scss';
const TodoInsert=({onInsert})=>{
    const [value,setValue]=useState('');
    const onChange=useCallback(e=>{
        setValue(e.target.value);
    },[]);
    const onSubmit=useCallback(
        e=>{
            onInsert(value);
            setValue('');
            // 새로고침 방지하기위해
            e.preventDefault();
        },
        [onInsert,value],
    );
    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할일을 입력해주세요."
            value={value} onChange={onChange}></input>
            <button type="submit">
                <ImPacman/>
            </button>
        </form>
    );
}
export default TodoInsert;