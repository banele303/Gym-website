"use client"


import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Vivian W',
    text: 'This product was easy to use and very impactful on the marketing of my company.',
    role: 'Gym Owner',
  },
  {
    name: 'Mike M',
    text: 'I highly recommend them for any company that wants to create more value in the marketplace and see potential profits.',
    role: 'Fitness Instructor',
  },
  {
    name: 'Naido v',
    text: '"The support staff was so helpful, and there is nothing that I do not like about their marketing system."',
    role: 'Gym Owner',
  },
  {
    name: 'Lorien',
    text: 'No need to look any further for a marketing company to handle your business needs. We can\'t imagine a better choice than SouthFlow Marketing.',
    role: 'Owner/Manager',
  },
  {
    name: 'Mlamuleli P',
    text: 'The SEO has been successful in pushing us up the ranks.',
    role: 'Studio Manager',
  },
  {
    name: 'Denzel B',
    text: 'Our overall experience has been amazing in terms of value and customer support.',
    role: 'Martial Arts Studio Owner',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TestimonialsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="container mx-auto px-4 py-8 sm:px-8 md:px-[2rem]"
    >
      <h2 className="text-2xl md:text-3xl  text-center  mb-8 text-blue-400">
        Trusted And Loved By Hundreds 
      </h2>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div>
                <div className='flex flex-row items-center'>
                <Avatar
                  size="md"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                  <h2 className="text-lg font-Poppins font-bold px-3 text-gray-800">
                    {testimonial.name}
                  </h2>
                  </div>
                  <div className="flex items-center ml-14">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 text-yellow-500  ml-1 ${
                          i + 1 <= 5 ? 'fill-current' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0l2.157 6.608h6.993l-5.67 4.127 2.19 6.686L10 14.47l-5.671 4.127 2.19-6.686L.85 6.608h6.993L10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 font-Poppins text-base md:text-[16px]">
                {testimonial.text}
              </p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default TestimonialsSection;
