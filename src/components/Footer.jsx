import React from 'react';
import logo from '../assets/esummitlogo.png';

const Footer = () => {
  return (
    <footer className="text-white pt-8 px-4 border-t border-borderColor">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
        {/* Left Section */}
        <div className="flex-1">
          <img src={logo} alt="" className="md:h-16 h-10" />
          <p className="text-secondaryText px-4">
            We strive to be at the forefront of technological advancements and
            industry best practices, consistently exceeding the expectations of
            our clients.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 lg:pl-32">
          <h2 className="text-xl font-semibold mb-2 items-center justify-center pl-40">Contacts</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-400">
            <div>
              <h3 className="font-semibold text-primaryText mb-4">For Official</h3>
              <ul>
                <li className='hover:text-primaryGreen'><a href="mailto:drie@bitmesra.ac.in">Dean of RIE</a></li>
                <li className='hover:text-primaryGreen'><a href="mailto:vishalhshah@bitmesra.ac.in">Faculty Advisor</a></li>
                <li className='hover:text-primaryGreen'><a href="mailto:president.edc@bitmesra.ac.in">President</a></li>
                <li className='hover:text-primaryGreen'><a href="mailto:team.edc@bitmesra.ac.in">EDC Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primaryText mb-4">For Queries</h3>
              <ul>
                <li><a href="mailto:btech10947.22@bitmesra.ac.in">Pranav Raj Srivastav</a></li>
                <li><a href="mailto:btech10731.22@bitmesra.ac.in">Anshuman Tomar</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-12">
        © 2024 EDC, BIT Mesra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
