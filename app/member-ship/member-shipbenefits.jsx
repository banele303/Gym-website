"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function MemberShipBenefits() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refCards, inViewCards] = useInView({ triggerOnce: false });
  const cardsControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
    if (inViewCards) {
      cardsControls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView, cardsControls, inViewCards]);

  const parallaxVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const textVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 1.2, filter: "brightness(1)" },
    animate: { opacity: 1, scale: 1, filter: "brightness(0.8)" },
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={parallaxVariants}
      transition={{ duration: 3, spring: 250 }}
      className="mx-auto mt-16 px-4 mb-[10rem]"
    >
      {/* Top Heading */}
      <motion.h2
        variants={headingVariants}
        transition={{ duration: 3, spring: 250 }}
        className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-500"
      >
        Experience The Extraordinary
      </motion.h2>

      {/* Single-Column Section with Cool Animation */}
      <motion.div className="text-center mt-8">
        <motion.p
          variants={headingVariants}
          transition={{ duration: 3, spring: 250 }}
          className="text-lg text-gray-600 mb-6"
        >
          Elevate your fitness journey with our state-of-the-art facilities and
          personalized training programs.
        </motion.p>
        <motion.div
          variants={headingVariants}
          transition={{ duration: 3, spring: 250 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 mx-auto text-center text-white rounded-sm py-3 px-8 cursor-pointer hover:bg-blue-600 transition-all max-w-[200px]"
        >
          Get Started
        </motion.div>
      </motion.div>

      {/* Three-Part Section with Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Part 1: Feature 1 */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 2, spring: 250 }}
          className="text-center"
        >
          <div className="bg-purple-500 text-white rounded-full p-4 mb-4 inline-block">
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
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Cutting-Edge Equipment
          </h3>
          <p className="text-gray-600">
            Access to the latest fitness technology and high-quality gear.
          </p>
        </motion.div>

        {/* Part 2: Feature 2 */}
        <motion.div
          variants={headingVariants}
          transition={{ duration: 3, spring: 250 }}
          className="text-center"
        >
          <div className="bg-yellow-500 text-white rounded-full p-4 mb-4 inline-block">
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
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Expert Trainers
          </h3>
          <p className="text-gray-600">
            Guidance from certified trainers to help you achieve your goals.
          </p>
        </motion.div>

        {/* Part 3: Feature 3 */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 2, spring: 250 }}
       className="text-center"
        >
          <div className="bg-red-500 text-white rounded-full p-4 mb-4 inline-block">
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
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Community Atmosphere
          </h3>
          <p className="text-gray-600">
            Join a supportive community to stay motivated and connected.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MemberShipBenefits;
