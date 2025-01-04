import React from "react"
import PastSpeakersmain from "./components/past speakers/Pastspeakermain"
import FeaturedSpeakers from "./components/FeaturedSpeaker/FS"
import SponsorshipSection from "./components/SponsorshipSection"
import Faq from "./components/FAQ/Faq"
import AboutUs from "./components/AboutUs/AboutUs"
import EventSchedule from "./components/events"
import Navbar from "./components/navbar.jsx"
import ContactUs from "./components/Contact.jsx"

function App() {
  return (
    <>
    <Navbar/>
    <AboutUs />
    <EventSchedule/>
    <FeaturedSpeakers/>
    <PastSpeakersmain/>
    <SponsorshipSection/>
    <Faq/>
    <ContactUs/>
    </>
  );
}

export default App;
