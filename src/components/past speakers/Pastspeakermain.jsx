import React from "react"
import PastSpeakers from "./PastSpeakers"

function PastSpeakersmain() {

  return (
    <>
    <div className="bg-black h-screen w-full md:p-0 p-4 overflow-x-hidden overflow-hidden">
        <div className="flex flex-col justify-center items-center md:gap-6 gap-3 md:mb-0 mb-[-50px]">
            <h1 className="font-bold md:text-6xl text-3xl text-white">Past Speakers</h1>
            <div className="h-1 w-36 bg-[#00B25C] rounded-md"></div>
        </div>
        <PastSpeakers/>
    </div>
    </>
  )
}

export default PastSpeakersmain
