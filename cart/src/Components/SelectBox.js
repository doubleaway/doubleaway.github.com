import React from "react";

const SelectBox=({select})=>{
    const size=["사이즈를 선택해주세요",'M',"S","XL","XS","L"];
    const color=["색상을 선택해주세요","Gray","Black","Red"];
    let color_select=size.map(size=><option key={size}>{size}</option>);
    let size_select=color.map(color=><option key={color}>{color}</option>);

    return(
        <select>
            {select=="color"?color_select:size_select}
        </select>
    )
}
export default SelectBox;