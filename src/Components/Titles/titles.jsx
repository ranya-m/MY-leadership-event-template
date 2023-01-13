import React from "react";
import "./titles.css";

function Title (props){
   return(
      <div className="bicolorTitle" style={{display: props.display, flexDirection: props.flexDirection, textTransform: props.textTransform, fontSize: props.fontSize, textAlign: props.textAlign}}>
         <h1 className="textBlackWhite" style={{color:props.color}}>{props.textBlackWhite}</h1> 
         <h1 className="textBlue" >{props.textBlue}</h1>
      </div>
   )    
}


export default Title;