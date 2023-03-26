import { useState } from "react";
import s from "./style.module.css";
export function MenuListItem({difficulty, onClick, isSelected}) {
    const [isHover, setIsHover] =useState(false);

    function getBackgroundColor(){
        if(isHover){
            return "#a5e9ff";
        } else if(isSelected){
            return "#26baea"
        }else {
            return "#eff0ef";
        }
    }
    return( 
    <div
    onClick={()=> onClick(difficulty)}
    style={{backgroundColor: getBackgroundColor(),}}
    className={s.container} 
    onMouseEnter={()=>setIsHover(true)} 
    onMouseLeave={()=>setIsHover(false)}
    >
        Set to : {difficulty}
    </div>);
}