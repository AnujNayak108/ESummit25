import React from "react"
import PastSpeakersmain from "./components/past speakers/Pastspeakermain"
import FeaturedSpeakers from "./components/FeaturedSpeaker/FS"
import SponsorshipSection from "./components/SponsorshipSection"
import Faq from "./components/FAQ/Faq"

function App() {

  return (
    <>
    <FeaturedSpeakers/>
    <PastSpeakersmain/>
    <SponsorshipSection/>
    <Faq/>

    </>
  )
}

export default App

