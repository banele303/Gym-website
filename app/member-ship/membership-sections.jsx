"use client";
import { motion } from "framer-motion";

const MembershipSections = () => {
  return (
    <div>
      <section className="bg-gray-900 p-[2rem] md:p-[5rem] flex flex-col justify-center items-center">
        <h2 className="text-blue-500 text-[28px] md:text-[55px] font-semibold text-center ">
          THERE&apos;S NO ONE WAY TO TRAIN
        </h2>

        <p className="opacity-0.6 text-[16px] text-gray-400 md:text-[21px] py-[2rem] text-center mx-auto max-w-[850px]">
          At Our Fitness, our members follow a variety of training modalities
          including CrossFit, Starting Strength, Power Monkey Fitness, Onnit,
          USAW, and more. <br /> <br /> You&apos;ll find suggested workouts on our
          basement whiteboard, you can coordinate workouts with others via our
          community app, or take one of our scheduled classes.
        </p>

        <h2 className="text-white text-[16px] md:text-[25px] font-semibold text-center ">
          PREFER ONE-ON-ONE OR SMALL GROUP TRAINING?
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 bg-blue-500 text-white  text-[17px] font-bold mt-14 mx-auto justify-center  rounded-sm shadow-md hover:bg-blue-600"
        >
          EXPLORE PRIVATE TRAINING
        </motion.button>
      </section>
    </div>
  );
};
export default MembershipSections;
