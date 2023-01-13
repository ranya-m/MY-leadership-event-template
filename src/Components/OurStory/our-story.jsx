import React from "react";
import "./ourstory.css";
import Title from '../Titles/titles.jsx';
import Button from '../Button/button.jsx';


// IMPORT IMAGES:
import people1 from "../img/ppl1.jpeg";
import people2 from "../img/ppl2.jpeg";
import people3 from "../img/ppl3.jpg";
import people4 from "../img/ppl4.jpg";


function Story (){
   return (
      <section id="our-story-section">

         <div className="our-story-left">
            <div className="storyTitleContainer">
               <Title className="storyTitle" fontSize="30px" /*flexDirection="column-reverse"*/ color="black" textBlackWhite="Our" textBlue="Story" textAlign="center"></Title>
            </div>
            <h2>The importance of Leadership <br></br>Conference in 2022</h2>
            <p>Leadership Event is one-page Bootstrap v5.1.3 CSS layout for your website. Thank you for choosing TemplateMo website where you can instantly download free CSS templates at no cost.</p>
            
            <div className="storyButtons">
               <Button  bg="transparent" borderColor="#0DCAF0" color="#0DCAF0" text="Meet Speakers"></Button>
               <Button  bg=" #2A3054" borderColor=" #2A3054" color="white" text="Check out Schedule"></Button>  
            </div>
           
         </div>

         <div className="our-story-right">
            <h2>Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut dolore</h2>

            <div className="attendingPpl">
                  <div className="peopleImages">
                     <img src={people1}/>
                     <img src={people2}/>
                     <img src={people3}/>
                     <img src={people4}/>
                  </div>
                  <h5>120+ People and pets are attending with us</h5>
            </div>
         </div>

      </section>
   )
}  

export default Story;