import React from "react"
import PastSpeakersmain from "./components/past speakers/Pastspeakermain"
import FeaturedSpeakers from "./components/FeaturedSpeaker/FS"
import SponsorshipSection from "./components/SponsorshipSection"
import Faq from "./components/FAQ/Faq"
import AboutUs from "./components/AboutUs/AboutUs"
import EventSchedule from "./components/events"
import ContactUs from "./components/Contact.jsx"
import Sponser from "./components/Sponser/Sponser.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <EventSchedule />
      <FeaturedSpeakers />
      <PastSpeakersmain />
      <SponsorshipSection />
      <Faq />
      <ContactUs />
    </div>
  );
}

export default App;
