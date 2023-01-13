import React from "react";
import "./button.css";

function Button (props){
   return(
        <button type={props.type} style={{backgroundColor: props.bg, borderColor:props.borderColor, color:props.color, width:props.width}}>{props.text}</button>
   )    
}

export default Button;