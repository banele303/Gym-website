"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HomeIcon,
  CalendarIcon,
  AcademicCapIcon,
} from "@heroicons/react/solid";

function BecomeAmember() {
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
    <div className="">
      {/* Parallax Section */}
      <motion.div
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={parallaxVariants}
        transition={{ duration: 3, spring: 250}}
        className="z-10 flex flex-col justify-center items-center text-white text-center"
      >
        <motion.h1
          variants={headingVariants}
          transition={{ duration: 3 , spring: 250 }}
          className="text-[22px] md:text-[40px] italic  font-bold mt-[-12rem] text-white opacity-90"
        >
          Our community is what makes us special. <br /> And it&apos;s what will keep
          you going
        </motion.h1>
        <motion.p
          variants={headingVariants}
          transition={{ duration: 3, spring:250 }}
          className="text-[17px] md:text-[20px] text-gray-400 text-center text-slate-200 pt-[3rem] px-[2rem]"
        >
          Joining a gym shouldn&apos;t be intimidating. We will help you feel
          comfortable getting started. <br />
          Our trainers have the expertise and training to help you create a plan
          that is best for you.
          <br />
          We don’t believe in quick fixes or gimmicks. We care about your
          long-term success above all else.
          <br />
        </motion.p>

        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{
            y: 200,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ delay: 2, duration: 2, spring: 250 }} // Replaced "spring" with "easeInOut"
          className="flex justify-center space-x-4 lg:space-x-8 mt-[-6rem]"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-10 py-4 bg-blue-800 text-white text-[18px] font-bold rounded-sm shadow-md hover:bg-blue-600"
          >
            Join Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-10 py-4 bg-gray-800 text-[18px] font-bold text-white rounded-sm shadow-md hover:bg-gray-900"
          >
            Learn More
          </motion.button>
        </motion.div>

        
      </motion.div>

    
    </div>
  );
}

export default BecomeAmember;
