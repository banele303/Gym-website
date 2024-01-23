"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .5,
      staggerChildren: 0.5,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const HeroSection = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    className="relative md:h-screen flex flex-col  bg-gray-900">
      <div className="relative w-full h-[70vh] md:h-[600px]">
        <Image
          src="/images/heroa.jpg" // Update the path accordingly
          alt="Gym Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="absolute top-[14rem] md:top-[15rem] md:left-[12rem] transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10"
      >
        <motion.h2
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-[25px] px-5 md:text-5xl font-bold mb-4"
        >
          START YOUR FITNESS JOURNEY TODAY
        </motion.h2>

        <div className="flex space-x-9 items-center justify-center pt-[2rem]">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-5 md:px-10  py-4 md:py-4 bg-blue-800 text-white text-[18px] font-bold rounded-sm shadow-md hover:bg-blue-600"
          >
              <Link href="/contact-us">JOIN NOW</Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className=" px-4 md:px-10 py-4 bg-gray-800 text-[18px] font-bold text-white rounded-sm shadow-md hover:bg-gray-900"
          >
             <Link href="/contact-us">MEMBER SHIPS</Link>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
