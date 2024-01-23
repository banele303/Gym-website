"use client";
// Import necessary dependencies
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define the AboutSection component
function AboutSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView(); // Remove triggerOnce: true

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0}}
      transition={{ duration: 1, type: "spring", stiffness: 150, delay: 1 }}
      className="container mx-auto mt-16 px-4 mb-[5rem] md:mb-[15rem]"
    >
      {/* Top Heading */}
      <motion.h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-500 italic">
      About Our Fitness Center
      </motion.h2>

      {/* Divider */}
      <div className="my-8 border-b border-gray-300"></div>

      {/* Two-Part Section with Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        {/* Part 1: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -200 }}
          transition={{
            duration: 2,
            delay: 1,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="text-left md:w-[800px]"
        >
          
          <p className="text-gray-600 text-[18px]">
            {/* Add your text about the gym here */}
            Simply put, our mission is to help you, &quot;Change Your Life With Us.&quot;
            <br /> <br />
            After spending time in our facility and with our team, we want our
            members to walk out of our doors after a workout and feel like they
            are a better version of themselves.
            <br />
            <br />
            It isn&apos;t the scientific sum of calories, workouts, and weight that
            keeps our members returning. It is not the cutting-edge equipment
            and technology. It is the people that count.
            <br />
            <br />
            Our team cares about guiding and encouraging each and every member
            to obtain the goals they seek for themselves.
            <br />
            <br />
            Our members&apos; goals are specific, and if we can assist in that
            journey to realizing their aspirations, then we have truly helped
            them change their life.
          </p>
        </motion.div>

        {/* Part 2: Optimized Next.js Image */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: inView ? 0 : 100 }}
          transition={{
            duration: 2,
            delay: 1,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="md:w-[400px] md:h-[550px] w-full h-[70vh] mx-auto relative"
        >
          <Image
            src="/images/fitness.png"
        fill
            objectFit="cover"
            alt="Section Image"
            className="w-full h-full md:ml-[5rem]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
