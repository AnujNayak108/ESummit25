import React from "react"
import Navbar from "./components/navbar.jsx"
import PastSpeakersmain from "./components/past speakers/Pastspeakermain"
import FeaturedSpeakers from "./components/FeaturedSpeaker/FS"
import SponsorshipSection from "./components/SponsorshipSection"
import Faq from "./components/FAQ/Faq"
import AboutUs from "./components/AboutUs/AboutUs"
import EventSchedule from "./components/events"
import ContactUs from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <EventSchedule />
      <FeaturedSpeakers />
      <PastSpeakersmain />
      <SponsorshipSection />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;