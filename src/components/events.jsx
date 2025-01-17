import React, { useState, useMemo } from 'react';

const EventSchedule = () => {
    const [activeDay, setActiveDay] = useState('day1');
    const [transitioning, setTransitioning] = useState(false);

    const handleDayChange = (day) => {
      if (day !== activeDay) {
        setTransitioning(true);
        setTimeout(() => {
          setActiveDay(day);
          setTransitioning(false);
        }, 300);
      }
    };

    const scheduleData = useMemo(() => ({
        day1: [
            {
                time: '5:00 PM - 6:30 PM',
                title: 'Opening Ceremony',
                location: 'CAT Hall',
                link: '#',
            },
            {
                time: '6:30 PM - 8:30 PM',
                title: 'Keynote Speaker Session',
                location: 'CAT Hall',
                link: '#',
            },
        ],
        day2: [
            {
                time: '09:00 AM - 12:00 PM',
                title: 'B-Plan',
                location: 'Lecture Hall 2',
                link: 'https://qr-codes.io/e2eZ8u',
            },
            {
                time: '11:00 AM - 01:00 PM',
                title: 'Keynote Speaker Session',
                location: 'CAT Hall',
                link: '#',
            },
            {
                time: '12:00 PM - 5:00 PM',
                title: 'IPL Auction',
                location: 'Lecture Hall 1',
                link: 'https://qr-codes.io/ft6k1g',
            },
            {
                time: '3:00 PM - 5:00 PM',
                title: 'Ad-venture ROund-1',
                location: 'Room 219, Main Building',
                link: 'https://qr-codes.io/jPuc2G',
            },
            {
                time: '3:00 PM - 5:00 PM',
                title: 'Intelligent Investor',
                location: 'Room 220, Main Building',
                link: 'https://qr-codes.io/WYtiwl',
            },
            {
                time: '5:30 PM - 8:30 PM',
                title: 'Keynote Speaker Session',
                location: 'CAT Hall',
                link: '#',
            },
            {
                time: '12:00 AM - 5:00 AM',
                title: 'BGMI Finals',
                location: 'Lab 7, R&D Building',
                link: 'https://qr-codes.io/bHzwcV',
            },
        ],
        day3: [
            {
                time: '9:00 AM - 5:00 PM',
                title: 'IPL Auction Finals',
                location: 'Lecture Hall 1',
                link: 'https://qr-codes.io/ft6k1g',
            },
            {
                time: '11:00 AM - 3:00 PM',
                title: 'Bazaar Clash',
                location: 'Shorbagh',
                link: 'https://qr-codes.io/VFRK3D',
            },
            {
                time: '12:00 AM - 2:00 PM',
                title: 'Keynote Speaker Session',
                location: 'CAT Hall',
                link: '#',
            },
            {
                time: '3:00 PM - 5:00 PM',
                title: 'UI-UX Arena',
                location: 'Room 220, Main Building',
                link: 'https://qr-codes.io/MMih89',
            },
            {
                time: '4:00 PM - 5:00 PM',
                title: 'Ad-venture Round-2',
                location: 'Room 220, Main Building',
                link: 'https://qr-codes.io/jPuc2G',
            },
            {
                time: '5:30 PM - 8:30 PM',
                title: 'Keynote Speaker Session + Closing Ceremony',
                location: 'CAT Hall',
                link: '#',
            },
        ],
    }), []);

    return (
        <section className="events pb-24">
            <div className="absolute right-0 w-[100px] h-[400px] md:w-[600px] md:h-[600px] bg-green-500/30 rounded-full blur-3xl z-auto" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 data-aos="fade-down" data-aos-duration="1000" className="font-semibold md:text-5xl text-3xl text-white">Events Schedule</h1>
                    <div className="h-1 w-36 bg-primaryGreen rounded-md mx-auto mt-4"></div>
                </div>
                <div className="mb-12">
                    <div className="flex justify-center space-x-4 mb-8">
                        {['day1', 'day2', 'day3'].map((day) => (
                            <button
                                key={day}
                                onClick={() => handleDayChange(day)}
                                className={`px-6 py-2 rounded-lg backdrop-blur-lg border border-[#616161] transition-all duration-300 ${activeDay === day
                                    ? 'bg-primaryGreen hover:bg-secondaryGreen text-primaryText'
                                    : 'bg-primaryGrey hover:bg-secondaryGrey text-secondaryText'
                                }`}
                            >
                                {day === 'day1' ? 'Day 1' : day === 'day2' ? 'Day 2' : 'Day 3'}
                            </button>
                        ))}
                    </div>

                    <div
                        className={`grid md:grid-cols-2 gap-6 transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
                    >
                        {scheduleData[activeDay].map((event, index) => (
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                key={index}
                                className="bg-primaryGrey backdrop-blur-lg rounded-xl p-6 border border-borderColor"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <div>
                                        <span className="text-primaryGreen font-semibold">{event.time}</span>
                                        <h3 className="text-primaryText text-xl font-semibold mt-2">{event.title}</h3>
                                        <p className="text-secondaryText mt-1">{event.location}</p>
                                    </div>
                                    <button className="mt-4 md:mt-0 px-4 py-2 bg-primaryGreen text-primaryText rounded-lg transform transition duration-300 hover:scale-105 hover:bg-secondaryGreen">
                                        <a href={event.link}>Register Now</a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventSchedule;