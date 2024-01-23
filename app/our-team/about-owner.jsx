// components/GymOwnerDetails.js
import { motion } from "framer-motion";
import Image from "next/image";
import { ul, li, Card } from "@material-tailwind/react";

const GymOwnerDetails = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-16"
    >
      <div className="container mx-auto px-[2rem] md:px-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">Meet Our Gym Owner</h2>
          <p className="text-gray-700 text-[18px] ">
            GYM Owner, the visionary behind Emet Gyms and the Emet Academy, is not just a fitness expert; he&apos;s a catalyst for personal growth. With an unwavering commitment to helping others realize their full potential, Nic guides clients towards fitness goals while fostering inner contentment. Here are some milestones from his remarkable journey:"
          </p>

          <section className="w-full bg-transparent pl-[1rem]">
            <ul>
              <li className="text-gray-500 py-2 ">
                Founded Emet Gyms in 2013, transforming it into an international fitness powerhouse under his leadership.
              </li>

              <li className="text-gray-500 py-2">
                Established Emet Academy to nurture young athletes and provided training for coaches from underprivileged communities.
              </li>
              <li className="text-gray-500 py-2">
                Earned an A rating from bio and physiotherapists for the Powerlifting Lifts for Rehabilitation workshop at Reha Training in Germany.
              </li>
              <li className="text-gray-500 py-2">
                Secured a Gold medal for South Africa at the 2012 International Powerlifting Federation&apos;s Africa Championships in Morocco.
              </li>
              <li className="text-gray-500 py-2">
                Coached the South African team at the 2019 Powerlifting World Championships in Sweden, breaking records for mental resilience.
              </li>
              <li className="text-gray-500 py-2">
                Empowers thousands struggling with addiction through physical training for enhanced mental resilience.
              </li>
              <li className="text-gray-500 py-2">
                Founded and managed an Addictions Meeting at Wits University, providing crucial support for students and staff dealing with addiction and substance abuse.
              </li>
              <li className="text-gray-500 py-2">
                A sought-after speaker, frequently delivering impactful speeches at schools and universities across South Africa.
              </li>
              <li className="text-gray-500 py-2">
                Featured in &quot;Men&apos;s Health: 20 Years of Transforming Men.&quot;
              </li>
            </ul>
          </section>
        </div>

        {/* Image Section */}
        <div className="md:w-full md:h-[100vh] pt-[2rem] md:pl-[5rem]">
          <div className="relative h-full">
            <Image
              src="/images/man.jpg" // Replace with your gym owner image path
              alt="Gym Owner"
           fill
              objectFit="cover"
              className="rounded-md w-full h-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GymOwnerDetails;
