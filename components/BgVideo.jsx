import React from "react";
import Video from "../assets/nature.mp4";
import { Home } from "./Home";
import { Canvas,} from "./offcanvas";
import { Link } from "react-router-dom";
export function BgVideo() {
  return (
    <>
      <div className="bgContainer">
        <div className="overlay">
            <Canvas/>
          {/* <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link> */}
        </div>
        <video src={Video} autoPlay loop muted />
        <div className="container">
        <br /><br /><br />
          <Home />
        </div>
      </div>
    </>
  );
}
