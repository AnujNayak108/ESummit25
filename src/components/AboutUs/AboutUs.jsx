import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter/AnimatedCounter";
import AOS from "aos";
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="w-full py-24 relative z-20">
        {/* Background Blob */}
        <div className="absolute top-[0] -left-40 w-[200px] h-[400px] md:w-[600px] md:h-[530px] bg-green-500/30 rounded-full blur-3xl -z-10" />
        {/* About us Heading */}
        <div data-aos = "fade-down" data-aos-duration="1000" className="flex flex-col justify-center items-center md:gap-6 gap-3 mb-8">
          <h1 className="font-semibold md:text-5xl text-3xl text-white z-10 text-center">
            About E-Summit'25
          </h1>
          <div className="h-1 w-36 bg-primaryGreen rounded-md"></div>
        </div>

        {/* About us container */}
        <div className="flex flex-wrap justify-center items-stretch md:gap-x-12 gap-6 text-gray-300 z-10 md:mt-16 mt-4">
          {/* Left Container */}
          <div data-aos = "fade-right" data-aos-duration="1000" className="flex flex-col md:w-2/5 w-4/5 gap-6">
            {/* About edc card */}
            <div className="flex flex-1 flex-col p-4 bg-primaryGrey rounded-md border border-borderColor min-h-[130px]">
              <h4 className="z-10 text-primaryGreen text-xl">
                What is E-Summit?
              </h4>
              <p className="z-10 pb-2 text-secondaryText">
                E-Summit is BIT Mesra's flagship entrepreneurship event,
                bringing together innovators, entrepreneurs, and leaders to
                foster the spirit of entrepreneurship and innovation.
              </p>
            </div>
            {/* Our Mission card */}
            <div className="flex flex-1 flex-col p-4 bg-primaryGrey rounded-md border border-borderColor min-h-[130px]">
              <h4 className="z-10 text-primaryGreen text-xl">Our Mission</h4>
              <p className="z-10 pb-2 text-secondaryText">
                To create a platform that nurtures entrepreneurial mindsets,
                facilitates networking, and provides valuable insights into the
                startup ecosystem.
              </p>
            </div>
          </div>

          {/* Right Container */}
          <div data-aos = "fade-left" data-aos-duration="1000" className="flex flex-col gap-6 md:w-2/5 w-4/5">
            {/* Number of Attendees and Number of Speakers in top container*/}
            <div className="flex gap-6 h-full">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-center flex-col p-4 p-2 bg-primaryGrey rounded-md border border-borderColor text-center w-1/2 h-full text-secondaryText"
              >
                <AnimatedCounter
                  from={1000}
                  to={5000}
                  className="text-primaryGreen md:text-4xl text-2xl font-medium"
                >
                  +
                </AnimatedCounter>
                Attendees
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-center flex-col p-4 bg-primaryGrey rounded-md border border-borderColor text-center w-1/2 h-full text-secondaryText"
              >
                <AnimatedCounter
                  from={0}
                  to={10}
                  className="text-primaryGreen md:text-4xl text-2xl font-medium"
                >
                  +
                </AnimatedCounter>
                Speakers
              </motion.div>
            </div>
            {/* Number of Events and Prize Pool in bottom container */}
            <div className="flex gap-6 h-full">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-center flex-col p-4 bg-primaryGrey rounded-md border border-borderColor text-center w-1/2 h-full text-secondaryText"
              >
                <AnimatedCounter
                  from={0}
                  to={10}
                  className="text-primaryGreen md:text-4xl text-2xl font-medium"
                >
                  +
                </AnimatedCounter>
                Events
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-center flex-col p-4 bg-primaryGrey rounded-md border border-borderColor text-center w-1/2 h-full text-secondaryText"
              >
                <AnimatedCounter
                  from={0}
                  to={5}
                  className="text-primaryGreen md:text-4xl text-2xl font-medium"
                >
                  L+
                </AnimatedCounter>
                Prize Pool
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
