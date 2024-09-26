"use client"
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [leftPupilPosition, setLeftPupilPosition] = useState({ x: 0, y: 0 });
  const [rightPupilPosition, setRightPupilPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const eyeContainer = e.currentTarget.getBoundingClientRect();
    const centerX = eyeContainer.x + eyeContainer.width / 2;
    const centerY = eyeContainer.y + eyeContainer.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Calculate tilt angles based on mouse position
    const tiltX = (deltaY / 10).toFixed(2); // Adjust the divisor for sensitivity
    const tiltY = (deltaX / 10).toFixed(2); // Adjust the divisor for sensitivity

    setTilt({ x: -parseInt(tiltX), y: -parseInt(tiltY) });

    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 12); // Limit pupil movement
    const pupilX = Math.max(-3, Math.min(3, distance * Math.cos(Math.atan2(deltaY, deltaX))));
    const pupilY = Math.max(-3, Math.min(3, distance * Math.sin(Math.atan2(deltaY, deltaX))));

    setLeftPupilPosition({ x: pupilX, y: pupilY });
    setRightPupilPosition({ x: pupilX, y: pupilY });
  };

  return (
    <section className='py-10 text-white'>
      <div className='container'>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            <div className="w-full h-48 bg-gray-700 border border-gray-600 col-span-2 rounded p-4">
              <h2 className="font-bold">Who Am I?</h2>
              <p className="max-w-md text-sm">
                I am a full-stack developer with a strong foundation in mathematics,
                holding a 1st class degree from Brunel University and an MSc in Mathematics.
                My journey into software development began with coding in MATLAB, igniting my passion for technology.
                Currently, as a Technical Officer at COCHE, I develop databases for clinical trial data using MongoDB, Next.js and hosted in AWS.
              </p>
            </div>
            <div className="w-60 h-full bg-gray-700 border border-gray-600 row-span-2 flex items-center justify-center" onMouseMove={handleMouseMove}>
              <div id="eye-container" className="bg-yellow-600 w-36 h-36 py-6 px-5 shadow-lg shadow-white transition-transform duration-150 rounded-full" style={{ transform: `perspective(500px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
                <div className="flex items-center justify-between">
                  <div id="eye" className="w-8 h-8 rounded-full bg-white mt-2">
                    <div id="pupil" className="w-2 h-2 rounded-full bg-black top-3 left-3 relative" style={{ transform: `translate(${leftPupilPosition.x}px, ${leftPupilPosition.y}px)` }}></div>
                  </div>
                  <div id="eye" className="w-8 h-8 rounded-full bg-white mt-2">
                    <div id="pupil" className="w-2 h-2 rounded-full bg-black top-3 left-3 relative" style={{ transform: `translate(${rightPupilPosition.x}px, ${rightPupilPosition.y}px)` }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                  <div className="">
                    <div className="w-16 h-8 relative overflow-hidden">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-transparent border-t-4 border-black" style={{ borderRadius: '0 0 50% 50%' }}></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-transparent rounded-full" style={{ border: '4px solid black', borderTop: 'none', borderRadius: '50%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 h-full bg-gray-700 border border-gray-600 rounded row-span-2 text-center p-3">
              <h2>Technology Stack</h2>
              <p>JavaScript, React, Node.js, MongoDB</p> {/* Add details about the tech stack */}
            </div>
            <div className="w-60 h-48 bg-gray-700 border border-gray-600 rounded flex flex-col items-center justify-center text-center p-3 text-blue-400 font-bold font-sans">
              <p>Logo Here</p>
              <h2>Robert Chung</h2>
              <h3>Full Stack Developer</h3>
            </div>
            <div className="w-full h-48 bg-gray-700 border border-gray-600 col-span-2 rounded p-5 text-xs text-gray-400">
              <h3 className="font-bold">Work Experience</h3>
              <ul className="list-disc list-inside">
                <li><span className="font-bold break-words">(Current) Software Engineer @ COCHE: Sep 2022 - Present</span><br></br>Creating a database to hold clinical data for projects to train their<br></br> AI models </li>
                <li><span className="font-bold break-words">Digital Messaging Specialist @ HSBC: Jul 2020 - Sep 2022</span><br></br>Used Salesforce to create marketing campaigns for HSBC products in <br></br>multiple countries</li>
                <li><span className="font-bold break-words">Software Developer @ HSBC: Jun 2018 - Feb 2020 </span><br></br> Added functions to the HSBC Home and Away Website</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
