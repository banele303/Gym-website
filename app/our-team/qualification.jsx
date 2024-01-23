// pages/qualification.js
import { motion } from 'framer-motion';

const qualifications = [
  {
    title: 'Certified Personal Trainer',
    institution: 'Fitness Academy South Africa',
    year: 2018,
  },
 
  {
    title: 'Nutrition Specialist',
    institution: 'Health and Wellness Institute',
    year: 2019,
  },
  
  // Add more qualifications as needed
];

const QualificationPage = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 p-8 rounded-md shadow-lg text-white max-w-md"
      >
        <h1 className="text-3xl font-bold mb-4 text-blue-400">Gym Owner Qualifications</h1>
        <div>
          {qualifications.map((qualification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-4"
            >
              <h2 className="text-xl font-semibold">{qualification.title}</h2>
              <p className="text-gray-400">
                {qualification.institution} - {qualification.year}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QualificationPage;
