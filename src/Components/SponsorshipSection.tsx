import React from 'react';

const SponsorshipSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-radial from-green-500/20 via-black to-black py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className="font-jakarta text-[60px] leading-[75.6px] font-bold text-white">
            Our Sponsors
            <div className="w-[150px] h-[5px] bg-green-500 mx-auto mt-2" />
          </h2>
        </div>

        {/* Title Sponsors */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-white text-center mb-10">
            Title Sponsors
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((sponsor) => (
              <div
                key={`title-${sponsor}`}
                className="bg-zinc-800 rounded-xl h-48 transition-transform hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Co-powered Sponsors */}
        <div>
          <h3 className="text-2xl font-light text-white text-center mb-10">
            Co-powered by
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((sponsor) => (
              <div
                key={`co-${sponsor}`}
                className="bg-zinc-800 rounded-xl h-48 transition-transform hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;