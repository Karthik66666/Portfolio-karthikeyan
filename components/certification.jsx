import React from "react";
import { Canvas } from "./offcanvas";
import Video from "../assets/nature.mp4";
import Html from '../assets/HTML.png';
import Css from '../assets/css.png';
import Tech from '../assets/Tech Foundation for web development.png';
import Google from '../assets/Google.png';
import Java from '../assets/javascript.png';
import Version from '../assets/Version.png';
import Infront from '../assets/InFront-end.png';
export function Certificate() {
  return (
    <>
      <div className="bgContainer">
        <div className="overlay">
          <Canvas />
        </div>
        <video src={Video} autoPlay loop muted />
        <br />
        <br />
        <div className="container row">
           <br />
          <div
            id="carouselExampleInterval"
            class="carousel slide bgsize col-md-6 "
            data-bs-ride="carousel"
          >
             <h1>Certificate's</h1>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={Html} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={Css} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Tech} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Google} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Infront} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Version} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Java} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
