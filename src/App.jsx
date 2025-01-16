import React from "react";
import PastSpeakersmain from "./components/past speakers/Pastspeakermain";
import FeaturedSpeakers from "./components/FeaturedSpeaker/FS";
import SponsorshipSection from "./components/SponsorshipSection";
import Faq from "./components/FAQ/Faq";
import AboutUs from "./components/AboutUs/AboutUs";
import EventSchedule from "./components/events";
import Navbar from "./components/navbar.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <section id="about" className="section">
        <AboutUs />
      </section>
      <section id="events" className="section">
        <EventSchedule />
      </section>
      <section id="speakers" className="section">
        <FeaturedSpeakers />
      </section>
      <section id="sponsors" className="section">
        <SponsorshipSection />
      </section>
      <section id="faq" className="section">
        <Faq />
      </section>
    </div>
 
  );
}
export default App;
