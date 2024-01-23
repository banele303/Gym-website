
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel, Typography, Button } from "@material-tailwind/react";
export { Carousel, Typography, Button };


const Homesecondsection = () => {
  return (
    <div className="dev absolute px-[2rem]">
    
      <div className="md:flex items-center md:gap-[5rem]">
        {/* Left Side (Image) */}
        <div className="md:w-1/2 md:h-[350px] relative">
          {/* Next.js Optimized Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        
          >
            <Image
              src="/images/hero1.jpg"
              alt="Gym Image"
              fill
           
              className="w-full object-cover  h-full rounded-md "
            />
          </motion.div>
        </div>

        {/* Right Side (Heading and Paragraph) */}
        <div className="md:w-1/2 p-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Come And See Our GYM</h2>
            <p className="text-lg">
            Belltown Strength and Conditioning is more than just a gym - it is a community of intelligent coaches and eager to learn students striving to understand how to move better and live a healthier life. We train with purpose and aim to help each student reach their goals in and outside of the gym. We focus on form first  and try to create an inclusive and positive environment for everyone. Whatever your mountain is we are here to help you reach your summit.
            </p>
            <Button size="sm"  className="text-[15px] my-[1rem] bg-[#1976d2] text-white">
                WHAT WE OFFER
              </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Homesecondsection;
