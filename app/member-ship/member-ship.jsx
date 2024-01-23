

"use client"

// Memberships.js
import Image from 'next/image';
import { motion } from 'framer-motion';

const Membership = () => {
  return (
    <motion.div
  
    >
      <div className="relative w-full h-[650px] md:h-[650px] lg:h-[650px] sm:h-screen">
        <Image
          src="/images/heroe.jpg"
          alt="Hero Background"
       fill
          objectFit="cover"
        />
 <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, }}
      className=""
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-40 text-white md:text-[50px] lg:text-[50px]] sm:text-[24px] font-bold">
            Member
            <span className="text-blue-500">Ship</span>
          </h1>
          <p className="text-white pt-5 md:text-[23px] lg:text-[24px] sm:text-[17px] text-center w-full">
            When you become a member of Solace, you become a member of a community of supportive, like-minded individuals working to create change, break barriers, and push boundaries.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500  text-white text-[15px] md:text-[19px] px-6 py-3 mt-10"
          >
            VIEW MEMBERSHIP PLANS
          </motion.button>
        </div>
    </motion.div>

        
      </div>
    </motion.div>
  );
};

export default Membership;
