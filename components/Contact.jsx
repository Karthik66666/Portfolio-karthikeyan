import React from "react";
import { Canvas,} from "./offcanvas";
import { Link } from "react-router-dom";
import Video from "../assets/nature.mp4";

export function Contact(){
    return(
        <>
        
        <div className="bgContainer">
        <div className="overlay">
            <Canvas/>
        {/* <Link to="/">Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link> */}
        </div>
          <video src={Video} autoPlay loop muted />
          <div className="container">
          
          <h2 class="text-center mb-5">Contact Me</h2>
        
        <span><h1>E-mail ID: </h1></span><span><h3>karthikeyangt40@gmail.com</h3></span>
        <span><h1>contact number: 7010580406</h1></span>
        </div>
      </div>
        </>
    );
}