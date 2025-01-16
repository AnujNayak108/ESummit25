import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import photo from './logos/photo1.png'
import { Slide, Fade } from "react-awesome-reveal";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const PastSpeakers = () => {
  const [rotation, setRotation] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  const items = [1, 2, 3, 4, 5, 6];
  const numberOfItems = items.length;
  const angleIncrement = 360 / numberOfItems;

  const getResponsiveValues = () => {
    const width = window.innerWidth;
    if (width < 640) { // Mobile
      return {
        itemSize: 150,
        translateZ: 150,
        containerHeight: 300
      };
    } else if (width < 1024) { // Tablet
      return {
        itemSize: 150,
        translateZ: 200,
        containerHeight: 400
      };
    } else { // Desktop
      return {
        itemSize: 200,
        translateZ: 300,
        containerHeight: 400
      };
    }
  };

  const [responsiveValues, setResponsiveValues] = useState(getResponsiveValues());

  useEffect(() => {
    const handleResize = () => {
      setResponsiveValues(getResponsiveValues());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rotateCarousel = (direction) => {
    const newRotation = rotation + (direction * (360 / numberOfItems));
    setRotation(newRotation);
  };

  const containerStyle = {
    perspective: "1000px",
    perspectiveOrigin: "50% 50%",
    height: `${responsiveValues.containerHeight}px`
  };

  const carouselStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transform: `rotateY(${rotation}deg)`,
    transition: "transform 0.5s ease-out"
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden overflow-hidden md:py-32 py-24 ">
      <div 
        ref={containerRef}
        className="w-full max-w-4xl mx-auto px-4 relative"
        style={containerStyle}
      >
        <button 
          onClick={() => rotateCarousel(1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={() => rotateCarousel(-1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={carouselRef}
          style={carouselStyle}
          className=""
        >
          {items.map((_, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                width: `${responsiveValues.itemSize}px`,
                height: `${responsiveValues.itemSize}px`,
                left: "50%",
                top: "50%",
                transform: `
                  translateX(-50%) 
                  translateY(-50%) 
                  rotateY(${angleIncrement * index}deg) 
                  translateZ(${responsiveValues.translateZ}px)
                `,
              }}
              className="flex flex-col items-center justify-center bg-black rounded-lg shadow-lg transition-transform duration-300"
            >
              <img 
                src={photo} 
                alt={`Item ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                draggable={false}
              />
              <div className="space-y-1 bg-black w-full h-full p-2">
                                  <h1 className="text-sm font-semibold text-white">{"Speaker name"}</h1>
                                  <h6 className="text-[#00B25C] text-[0.65rem]">{"Designation"}</h6>
                                    <h6 className="text-[0.65rem] text-[#B6B6B6]">{"Each character will appear one by one"}</h6>
                                  <div className="flex flex-row justify-start items-start gap-4 text-[#B6B6B6]">
                                    <a href=""><FaLinkedin /></a>
                                    <a href=""><BsTwitterX /></a>
                                  </div>
                              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastSpeakers;