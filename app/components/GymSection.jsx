


"use client";
// components/GymSection.js

import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid'; // Import the necessary Hero Icons

const GymSection = () => {
  const gymData = [
    { title: 'Customized Fitness Plans' },
    { title: 'Members Only App' },
    { title: 'Top of the Line Workout Equipment' },
    { title: 'Easy Class Scheduling' },
    { title: 'Personal Training' },
    { title: 'Lockers' },

    // ... Repeat for all 12 cards
  ];

  return (
    <div className="text-white  py-8 px-[2rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {gymData.map((card, index) => (
            <div key={index} className="bg-blue-500 p-8 rounded-md md:w-[300px] ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GymSection;
