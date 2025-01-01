import React from "react"
import PastSpeakersmain from "./components/past speakers/Pastspeakermain"
import FeaturedSpeakers from "./components/FeaturedSpeaker/FS"
import SponsorshipSection from "./components/SponsorshipSection"
import Faq from "./components/FAQ/Faq"
import AboutUs from "./components/AboutUs/AboutUs";
import EventSchedule from "./components/events"
import Navbar from "./components/Navbar.jsx"


function App() {
  return (
    <>
    <AboutUs />
    <EventSchedule/>
    <FeaturedSpeakers/>
    <PastSpeakersmain/>
    <SponsorshipSection/>
    <Faq/>
    <Navbar/>
    </>
  );
}

export default App;
