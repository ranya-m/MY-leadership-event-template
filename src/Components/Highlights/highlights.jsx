import React from "react";
import "./highlights.css";
import { UilYoutube } from '@iconscout/react-unicons';

function Highlight (props){
   
   return(
   <section id="highlights">
      <div className="imgDiv">
         <img src={props.src}></img> 
         <div className="imgTitle">
            <h2>{props.imgTitle}</h2>
            <UilYoutube className="iconYT"/>
         </div>
      </div>  
   </section>
   )  
}


export default Highlight;