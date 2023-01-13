import React from "react";
import "./homepage.css";
import Title from '../Titles/titles.jsx';
import Navbar from "../NavBar/navbar.jsx";
import confVideo from "../video/pexelsVideo.mp4";
import { UilArrowDown } from '@iconscout/react-unicons'
import Highlight from "../Highlights/highlights.jsx"
// IMPORT IMAGES:
import img1 from "../img/pexels1.jpg";
import img2 from "../img/pexels2.jpg";
import img3 from "../img/pexels3.jpg";




function Homepage (){
   return (
      <section id="home-section">

         <div className="videoWrap">
         <video id="background-video" autoPlay loop muted>
            <source src={confVideo} type="video/mp4"/>
         </video>        
         </div>

         <Navbar className="navbar"></Navbar>

         <div className="titleContainer">
            <Title className="homeTitle" fontSize="30px" textTransform= "uppercase" flexDirection="column-reverse" color="white" textBlackWhite="conference 2022" textBlue="leadership" textAlign="center"></Title>
            <div id="DatePlace">
               <span id="date">July 12 to 18, 2022</span>
               <span id="place">Times Square, NY</span>
            </div>
         </div>   

            <div className="iconDiv">
               <UilArrowDown id="iconArrow"/> 
            </div>
         
         <div className="highlightsContainer">
         <Highlight src={img1} imgTitle="2019 Highlights"></Highlight>
         <Highlight src={img2} imgTitle="2020 Highlights"></Highlight>
         <Highlight src={img3} imgTitle="2021 Highlights"></Highlight>
         </div>

      </section>
   )
}  



export default Homepage;