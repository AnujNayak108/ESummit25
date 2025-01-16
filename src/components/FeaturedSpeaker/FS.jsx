import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Photo1 from "../past speakers/logos/photo1.png";
import { Slide, Fade } from "react-awesome-reveal";

const speakers = [
  {
    image: Photo1,
    name: "Speaker name",
    designation: "Designation",
    linkedin: "#",
    twitter: "#",
  },
  {
    image: Photo1,
    name: "Speaker name",
    designation: "Designation",
    linkedin: "#",
    twitter: "#",
  },
  {
    image: Photo1,
    name: "Speaker name",
    designation: "Designation",
    linkedin: "#",
    twitter: "#",
  },
  {
    image: Photo1,
    name: "Speaker name",
    designation: "Designation",
    linkedin: "#",
    twitter: "#",
  },
  {
    image: Photo1,
    name: "Speaker name",
    designation: "Designation",
    linkedin: "#",
    twitter: "#",
  },
  {
    image: Photo1,
    name: "Speaker name",
    designation: "Designation",
    linkedin: "#",
    twitter: "#",
  },
  // Add more speaker objects here
];

const FeaturedSpeakers = () => {
  return (
    <div className="w-full relative mx-auto pt-12 pb-12">
      <div className="absolute top-0 left-0 w-[200px] h-[400px] md:w-[600px] md:h-[600px] bg-green-500/30 rounded-full blur-3xl" />
      <div className="flex flex-col justify-center items-center md:gap-6 gap-3 mb-8 ">
        <h1 data-aos="fade-down" data-aos-duration="1000" className="font-semibold md:text-5xl text-3xl text-white">
          Featured Speakers
        </h1>
        <div className="h-1 w-36 bg-primaryGreen rounded-md"></div>
      </div>

      {/* cards section */}
      <div className="flex flex-col justify-center items-center md:gap-12 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center md:gap-20 gap-10">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-duration="1000"
              className="text-white shadow-md rounded-lg overflow-hidden relative group"
            >
              <img src={speaker.image} alt="" className="w-full max-w-[300px] h-[350px] rounded-lg" draggable={false} />
              {/* overlay section */}
              <div className="absolute left-0 bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-[-50%] p-4 w-full h-full bg-[#111111]/60 group-hover:backdrop-blur-sm duration-75">
                <div className="space-y-1">
                  <Slide cascade>
                    <h1 className="text-2xl font-semibold">{speaker.name}</h1>
                    <h6 className="text-[#00B25C]">{speaker.designation}</h6>
                    <Fade cascade damping={0.05}>
                      <h6>{"Each character will appear one by one"}</h6>
                    </Fade>
                    <div className="flex flex-row justify-start items-start gap-4">
                      <a href={speaker.linkedin}><FaLinkedin /></a>
                      <a href={speaker.twitter}><BsTwitterX /></a>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSpeakers;
