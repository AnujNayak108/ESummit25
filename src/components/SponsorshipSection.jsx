import React from 'react';

const SponsorshipSection = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-28 left-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-green-500/30 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 data-aos = "fade-down" data-aos-duration="1000" className="text-4xl md:text-5xl font-semibold text-white">
            Our Sponsors
          </h2>
          <div className="w-[100px] h-[4px] bg-green-500 mx-auto mt-2" />
        </div>

        {/* Title Sponsors */}
        <div className="mb-16">
          <h3 className="text-lg md:text-xl font-medium text-white text-center mb-8">
            Title Sponsors
          </h3>
          <div data-aos = "fade-down" data-aos-duration="1000" className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[1, 2].map((sponsor) => (
              <div
                key={`title-${sponsor}`}
                className="bg-zinc-700 w-72 h-36 md:w-96 md:h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Co-powered Sponsors */}
        <div>
          <h3 className="text-lg md:text-xl font-medium text-white text-center mb-8">
            Co-powered by
          </h3>
          <div data-aos = "fade-down" data-aos-duration="1000" className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[1, 2].map((sponsor) => (
              <div
                key={`co-${sponsor}`}
                className="bg-zinc-700 w-72 h-36 md:w-96 md:h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;