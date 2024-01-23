// components/CardSection.js

import React from 'react';

const GettingStartedIsEasy = () => {
  const cardData = [
    { title: '01', subtitle: 'Book Your Free Trial', text:"We want to hear your fitness goals, assess a good starting point, and even let you try out a class for free!" },
    { title: '02', subtitle: 'Choose Your Gym Membership', text:"Get guidance tailored to your body and progress consistently. We will guide you every step of the way." },
    { title: '03', subtitle: 'Find A Supportive Community',text:"Getting fit is hard, staying fit is harder. We&apos;re here to ensure you build healthy habits and systems that keep you on the right track." },
  ];

  return (
    <section className="py-16 md:mb-[10rem] px-[2rem]">
      <div className="container mx-auto">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {cardData.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold text-blue-500 md:text-[35px] font-bold mb-1 md:mb-2 py-[3] md:py-8">{card.title}</h3>
              <p className="text-gray-800 py-2 md:py-4 font-bold text-[18px]">{card.subtitle}</p>
              <p className="text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStartedIsEasy;
