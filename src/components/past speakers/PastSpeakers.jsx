import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import photo from './logos/photo1.png'

const PastSpeakers = () => {
  const [rotation, setRotation] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);

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

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const containerElement = containerRef.current;

    if (!carouselElement || !containerElement) return;

    const handleMouseDown = (e) => {
      isMouseDown.current = true;
      startX.current = e.clientX || e.touches?.[0].clientX;
      startRotation.current = rotation;
      carouselElement.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (!isMouseDown.current) return;
      
      const x = e.clientX || e.touches?.[0].clientX;
      const diff = x - startX.current;
      const newRotation = startRotation.current + (diff * 0.5);
      setRotation(newRotation);
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
      carouselElement.style.cursor = "grab";
    };

    carouselElement.addEventListener("mousedown", handleMouseDown);
    carouselElement.addEventListener("touchstart", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      carouselElement.removeEventListener("mousedown", handleMouseDown);
      carouselElement.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [rotation]);

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
    transition: "transform 0.5s ease-out",
    cursor: "grab"
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden overflow-hidden">
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
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg transition-transform duration-300"
            >
              <img 
                src={photo} 
                alt={`Item ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastSpeakers;