"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <motion.div
      className="relative w-full z-20 h-[60vh] md:h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <Image
        src="/images/Herob.jpg"
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
          y: 200,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 2, spring: 250 }} // Replaced "spring" with "easeInOut"
        className="text-center text-white"
      >
        <h1 className="text-4xl font-bold  md:py-[3rem] text-center md:text-6xl lg:text-7xl">
          Welcome to our <span className="text-blue-500">GYM</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 200,
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

export default AboutHero;
