import React from "react";
import Photo1 from "../past speakers/logos/photo1.png";
import Photo2 from "../past speakers/logos/photo1.png";
import Photo3 from "../past speakers/logos/photo1.png";
import { Slide, Fade } from "react-awesome-reveal";

const FeaturedSpeakers = () => {
  return (
    <div className="w-full relative mx-auto bg-black pt-12 pb-12">
      <div className="absolute top-[0] left-0 w-[200px] h-[400px] md:w-[600px] md:h-[600px] bg-green-500/30 rounded-full blur-3xl" />
      <div className="flex flex-col justify-center items-center md:gap-6 gap-3 mb-8 ">
            <h1 className="font-bold md:text-6xl text-3xl text-white">Featured Speakers</h1>
            <div className="h-1 w-36 bg-[#00B25C] rounded-md"></div>
        </div>

      {/* cards section */}
      <div className="flex flex-col justify-center items-center md:gap-12 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:gap-20 gap-10">
            <div
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={Photo1}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{"Sunrise"}</h1>
                    <Fade cascade damping={0.05}>
                      {"Each character will appear one by one"}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
            <div
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={Photo1}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{"Sunrise"}</h1>
                    <Fade cascade damping={0.05}>
                      {"Each character will appear one by one"}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
            <div
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={Photo1}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{"Sunrise"}</h1>
                    <Fade cascade damping={0.05}>
                      {"Each character will appear one by one"}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center md:gap-20 gap-10">
      <div
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={Photo1}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{"Sunrise"}</h1>
                    <Fade cascade damping={0.05}>
                      {"Each character will appear one by one"}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
            <div
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={Photo1}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{"Sunrise"}</h1>
                    <Fade cascade damping={0.05}>
                      {"Each character will appear one by one"}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
      </div>
      </div>
    </div>
  );
};

export default FeaturedSpeakers;