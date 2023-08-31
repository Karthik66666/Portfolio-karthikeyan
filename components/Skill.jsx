import React from "react";
import { Canvas } from "./offcanvas";
import Video from "../assets/nature.mp4";
import ProgressBar from 'react-bootstrap/ProgressBar';
export function Skill(){
    return(
        <>
         <div className="bgContainer">
            <div className="overlay">
                <Canvas/>
            </div>
            <video src={Video} autoPlay loop muted />
            <br /><br /><br /><br /><br />
            <div className="container">
            <h1>Skill's</h1>
            <br /><br /><br />
                <h3 className="colo">HTML 5</h3>
            <ProgressBar animated now={85} />
            <br />
            <h3 className="colo">CSS 3</h3>
            <ProgressBar animated now={80} />
            <br />
            <h3 className="colo">Java script</h3>
            <ProgressBar animated now={55} />
            <br />
            <h3 className="colo">React JS</h3>
            <ProgressBar animated now={68} />
            </div>
        </div>
        </>
    );
}