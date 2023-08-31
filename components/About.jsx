import React from "react";
import Video from "../assets/nature.mp4";
import { Link } from "react-router-dom";
import karimg from '../assets/png.png'
import { Canvas, Offcanvas } from "./offcanvas";
export function About() {
  return (
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
            
            <h1 className="abhead">Who Im i ?</h1>
            <br />
            <br />
            <h2 className="abhead2">About my self</h2>
           <div className="flex row ">
           <div className="col-md-6">
           <img src={karimg} className="karimg "/>
           </div>
          <div className="col-md-6">
          <p className="myself">
            
            I'm Karthikeyan, I'm from Kovilpatti , which is located in
            Thothukudi district , I love assisting others and finding creative
            solutions to issues. I embrace change and interact with people
            from all backgrounds because I have an adaptive mindset. I have a
            great work ethic and uphold the highest standards. I appreciate
            developing trustworthy relationships and loyalty. I have completed
            my diploma in mechanical engineering and I enrolled in the web
            development and graphic designing course in KGISL micro college ,
            in diploma I lead the project that completed which is pedal power
            hacksaw cutting machine, and I completed the web design for the
            web site using the CorelDRAW , Adobe illustrator. And I created
            the model E-commerce web site using the react JS , html5 , css3 ,
            JavaScript.
            <li>
              React JS, HTML5, JavaScript , and UX design are my four main
              technical specialties. My objectives are to be successful and to
              always behave with respect.
            </li>
            <li>
              My mother is a stay-at-home and my father is a former soldier. I
              have a younger brother who is a Java developer.
            </li>
          </p>
          </div>
           </div>
          </div>
        </div>
     
    </>
  );
}
