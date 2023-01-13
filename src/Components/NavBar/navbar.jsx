import React from "react";
import "./navbar.css";
import Button from '../Button/button.jsx';
import Logo from '../Logo/logo.jsx';


function Navbar (props){
   return(
      <nav>
         <div className="navLogoDiv">
            <Logo></Logo>  
         </div>
        
         <div className="navMenuDiv">
            <ul className="navMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#schedules">Schedules</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#venue">Venue</a></li>
            <li><a href="#contact">Contact</a></li>
         </ul>
        </div>

        <div className="navButtonDiv">
           <Button className="navButton" bg="#2F70FE" borderColor="#2F70FE" color="white" text="Buy Tickets"></Button>
         </div>
         
         <div className="toggle">
               <div className="hamburger"></div>
               <div className="hamburger"></div>
               <div className="hamburger"></div>
           </div>
      </nav>
   )    
}

export default Navbar;