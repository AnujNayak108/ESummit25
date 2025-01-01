import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const frequentlyAskQuestions = [
  {
    title: "How many members can form a team?",
    description: "Well, add the content here.",
  },
  {
    title: "What are the key responsibilities of a team leader?",
    description: "There are a few.",
  },
  {
    title: "How can teams effectively resolve conflicts?",
    description: "Let it burn.",
  },
  {
    title: "What are the benefits of teamwork in a project?",
    description: "You don't need to work.",
  },
  {
    title: "How do teams improve communication and collaboration?",
    description: "Silence sometimes is the best way.",
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
        <div className="w-[125px] h-[4px] bg-green-500 mx-auto mt-2" />
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
                className={`px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-zinc-700 transition-colors `}
                onClick={() => togglerFunction(i)}
              >
                <p className="flex-1 text-[#EEEEEE]">{item.title}</p>
                <span className="text-[#EEEEEE]">
                  {activeId === i ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </span>
              </div>
              {activeId === i && (
                <div className="px-4 py-3 bg-zinc-900 text-[#EEEEEE]">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
