"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function MemberShipHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <motion.div
      className="relative w-full z-20 h-[80vh] md:h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <Image
        src="/images/heroe.jpg"
      fill
        objectFit="cover"
        brightness={0.1}
        className="w-full h-full  md:h-[400px]"
        alt="Gym hero image"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 80,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 2, spring: 250 }} // Replaced "spring" with "easeInOut"
        className="text-center text-white"
      >
        <h2 className="text-2xl font-bold pt-20  md:pt-[8rem] text-center md:text-5xl lg:text-6xl">
        OUR  MEMBER SHIP
          <span className="text-blue-500">PLANS</span>
        </h2>

        <p className="text-white px-[2rem] md:px-[10rem]  pt-6 md:text-[19px] lg:text-[22px] sm:text-[17px] text-center w-full">
          When you become a member of Our Fitness, you become a member of a community
          of supportive, like-minded individuals working to create change, break
          barriers, and push boundaries.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 80,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 2, spring: 250 }} // Replaced "spring" with "easeInOut"
        className="flex justify-center space-x-4 mt-10 md:mt-20 lg:space-x-8"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          className=" px-5 md:px-10 py-4 bg-blue-800 text-white text-[14px] font-bold rounded-sm shadow-md hover:bg-blue-600"
        >
          <Link href="/contact-us">JOIN NOW</Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-4 md:px-10 py-4 bg-gray-800 text-[14px] font-bold text-white rounded-sm shadow-md hover:bg-gray-900"
        >
          <Link href="/contact-us">CONTACT US</Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default MemberShipHero;
