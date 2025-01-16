import React from "react";
import hero from "../assets/hero.mp4";

const Hero = () => {
    <div className="video">
        <video src={hero} autoPlay loop muted />
    </div>
}

export default Hero;