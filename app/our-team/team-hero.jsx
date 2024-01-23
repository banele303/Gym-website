// components/Hero.js
import { motion } from 'framer-motion';

const TeamHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 h-[70vh] flex items-center justify-center text-white"
    >
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">Our Gym Team</h1>
        <p className="text-lg mb-8">Meat The Team That Will Transform Your Body, Transform Your Life</p>
        <button className="bg-blue-500 text-[18px]  text-white px-9 py-3 rounded-md">
          Join Now
        </button>
      </div>
    </motion.section>
  );
};

export default TeamHero;
