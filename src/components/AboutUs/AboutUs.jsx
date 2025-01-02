import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="w-full p-24 relative z-20">
        {/* Background Blob */}
        <div className="absolute top-[0] -left-40 w-[200px] h-[400px] md:w-[600px] md:h-[530px] bg-green-500/30 rounded-full blur-3xl -z-10" />
        {/* About us Heading */}
        <div className="flex flex-col justify-center items-center md:gap-6 gap-3 mb-8">
          <h1 className="font-semibold md:text-5xl text-3xl text-white z-10 font-jakarta text-center">
            About E-Summit'25
          </h1>
          <div className="h-1 w-36 bg-[#00B25C] rounded-md"></div>
        </div>

        {/* About us container */}
        <div className="flex flex-wrap justify-center items-stretch md:gap-x-12 gap-6 text-gray-300 z-10 md:mt-16 mt-4">
          {/* Left Container */}
          <div className="flex flex-col md:w-2/5 w-4/5 gap-6">
            {/* About edc card */}
            <div className="flex flex-1 flex-col p-4 bg-[#1e1e1e] rounded-md border border-[#666666] min-h-[130px]">
              <h4 className="z-10 font-jakarta text-primaryGreen text-xl">
                What is E-Summit?
              </h4>
              <p className="z-10 font-jakarta pb-2">
                E-Summit is BIT Mesra's flagship entrepreneurship event,
                bringing together innovators, entrepreneurs, and leaders to
                foster the spirit of entrepreneurship and innovation.
              </p>
            </div>
            {/* Our Mission card */}
            <div className="flex flex-1 flex-col p-4 bg-[#1e1e1e] rounded-md border border-[#666666] min-h-[130px]">
              <h4 className="z-10 font-jakarta text-primaryGreen text-xl">
                Our Mission
              </h4>
              <p className="z-10 font-jakarta pb-2">
                To create a platform that nurtures entrepreneurial mindsets,
                facilitates networking, and provides valuable insights into the
                startup ecosystem.
              </p>
            </div>
          </div>

          {/* Right Container */}
          <div className="flex flex-col gap-6 md:w-2/5 w-4/5">
            {/* Number of Attendees and Number of Speakers in top container*/}
            <div className="flex gap-6 h-full">
              <div className="flex items-center justify-center flex-col p-4 bg-[#1e1e1e] rounded-md border border-[#666666] font-jakarta text-center w-1/2 h-full">
                <span className="text-primaryGreen text-4xl font-medium">
                  5000+
                </span>
                Attendees
              </div>
              <div className="flex items-center justify-center flex-col p-4 bg-[#1e1e1e] rounded-md border border-[#666666] font-jakarta text-center w-1/2 h-full">
                <span className="text-primaryGreen text-4xl font-medium">
                  10+
                </span>
                Speakers
              </div>
            </div>
            {/* Number of Events and Prize Pool in bottom container */}
            <div className="flex gap-6 h-full">
              <div className="flex items-center justify-center flex-col p-4 bg-[#1e1e1e] rounded-md border border-[#666666] font-jakarta text-center w-1/2 h-full">
                <span className="text-primaryGreen text-4xl font-medium">
                  10+
                </span>
                Events
              </div>
              <div className="flex items-center justify-center flex-col p-4 bg-[#1e1e1e] rounded-md border border-[#666666] font-jakarta text-center w-1/2 h-full">
                <span className="text-primaryGreen text-4xl font-medium">
                  5L+
                </span>
                Prize Pool
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
