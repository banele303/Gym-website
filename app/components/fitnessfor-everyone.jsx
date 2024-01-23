

"use client";
// Import necessary components and styles
import { Fragment } from 'react';
import { HomeIcon, CalendarIcon, AcademicCapIcon } from '@heroicons/react/solid';

import OurStory from './our-story';

const cardsData = [
  {
    icon: <HomeIcon className="h-12 w-12 text-blue-500 " />,
    title: 'Start at any fitness level',
    description: 'Whether a gym rat or a beginner, anyone will feel comfortable at our gym.',
  },
  {
    icon: <CalendarIcon className="h-12 w-12 text-blue-500 " />,
    title: 'Feel supported',
    description: 'No matter your fitness goals, we are here to empower you along the way.',
  },
  {
    icon: <AcademicCapIcon className="h-12 w-12 text-blue-500 " />,
    title: 'Every fitness level is welcome',
    description: 'Our staff and members believe in creating a friendly environment for people at all fitness levels.',
  },
];

const FitnessForEveryOne = () => {
  return (
    <section className="py-12 z-20 bg-gray-900">
          <h2 className="text-[20px] text-center md:text-[40px] text-white font-bold mb-[3rem]">FITNESS BUILT FOR <span className="text-[#1976d2]">EVERYONE</span> </h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 z-20 gap-8 px-[2rem]">
          {cardsData.map((card, index) => (
            <Fragment key={index}>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex  mb-4">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <OurStory/>
    </section>
  );
};

export default  FitnessForEveryOne;

