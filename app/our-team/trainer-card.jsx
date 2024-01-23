import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TrainerCard = ({ trainers }) => {
  const { image, name, position } = trainers;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group overflow-hidden md:w-[300px] md:h-[200px]"
    >
      <Image
        src={image}
        alt={name}
        layout="responsive"
        width={500}
        height={300}
        className="w-full h-auto transition-all rounded-md duration-300 transform scale-1"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-center"
        >
          <h3 className="text-lg font-semibold">{name}</h3>
          {/* Add position here */}
          <p className="text-sm">{position}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
