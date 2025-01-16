import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const frequentlyAskQuestions = [
  {
    title: "How many members can form a team?",
    description: "One to four members can participate depending upon the event.",
  },
  {
    title: "Is professional knowledge of Figma required to attend UI/UX workshop?",
    description: "No, we will be there to guide you through each step.",
  },
 
  {
    title: "Are there networking sessions or social events planned?",
    description: "Yes, we have various speakers' sessions planned with various startup founders, CXO's etc inlcuding Vijendar Chauhan.",
  },
 
  {
    title: "How can we register for all the events?",
    description: "The website contains the link for each event which will redirect you to bharatversity from where you can register for all the events.",
  },

  {
    title: "How can I get  updates and announcements about E-Summit?",
    description: "Follow us on our social media handles to get regular updates.",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    setActiveId(activeId === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-black py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#EEEEEE]">
          Frequently Asked Questions
        </h2>
        <div className="w-[125px] h-[4px] bg-green-500 mx-auto mt-2 rounded-lg " />
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[600px] h-max space-y-4">
          {frequentlyAskQuestions.map((item, i) => (
            <div
              key={i}
              className={`border rounded-lg overflow-hidden ${
                activeId === i ? "bg-zinc-800" : "bg-zinc-900"
              }`}
            >
              <div
                className={`px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-zinc-700 transition-colors`}
                onClick={() => togglerFunction(i)}
              >
                <p className="flex-1 text-[#EEEEEE]">{item.title}</p>
                <span
                  className={`text-[#EEEEEE] transform transition-transform duration-300 ${
                    activeId === i ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeId === i ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-4 py-3 bg-zinc-900 text-[#B6B6B6]">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
