"use client";

// components/OurStory.js

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../globals.css";
import { useInView } from "react-intersection-observer";

const OurStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      className="flex flex-col md:flex-row custom-negative-z-index gap-8 py-16  pb-[24rem] md:py-[5rem] px-[1rem]"
    >
      {/* Left Section */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: inView ? 0 : -100 }}
        transition={{
          duration: 2,
          delay: 1,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative"
      >
        <Image
          src="/images/new1.jpg"
          alt="Your Alt Text"
           fill
          
          className="w-full object-cover h-full md:pt-[5rem] rounded-md"
        />
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: inView ? 0 : 200 }}
        transition={{
          duration: 2,
          delay: 1,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="w-full md:w-1/2 md:pl-8 px-[.5rem] md:px-[2rem]"
      >
        <motion.h2 className="text-[20px] md:text-[40px] font-bold mb-4 text-blue-500">
          OUR STORY
        </motion.h2>
        <motion.p className="text-18 md:text-[17px] text-gray-300">
          From the outset, our objective has consistently revolved around
          fostering transformation. While this aspiration may appear ambitious
          to some, we have consistently embraced challenges without hesitation.
          Our mission embarked on reshaping the fitness industry landscape,
          establishing an environment where both members and trainers could
          thrive.
          <br />
          <br />
          Our focus wasn&apos;t merely on operating yet another training
          facility; rather, we aimed to forge a top-tier training destination
          with a business model and facility tailored specifically for trainers,
          by trainers. This vision materialized into reality. Today, we are
          recognized as the best gym, originating from the inception of our
          original gym. While classes are not central to our current model, the
          spirit of Team endures strongly within our community and culture.
          <br />
          <br />
          There is no shortage of equipment, and daily workout suggestions adorn
          the basement whiteboard. Additionally, group workouts are a common
          occurrence on the open gym floor.
        </motion.p>
      </motion.div>

      
    </motion.div>
  );
};

export default OurStory;
