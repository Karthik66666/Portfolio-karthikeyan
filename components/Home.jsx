import React from "react";
import MYimg from '../assets/my image png.png'
export function Home(){
    return(
        <>
        
        <h1>Welcome to karthikeyan Portfolio</h1>
        
        <section>
            <img src={MYimg} alt="karthikeyan photo" className="Myimg"/>
        </section>
        </>
    );
}