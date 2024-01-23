"use client";

// pages/MembershipsPage.js
import { motion } from "framer-motion";

const MembershipCard = ({ title, price, items }) => (
  
  <div className="bg-gray-800 p-6 md:w-[400px] rounded-md  shadow-md mb-4 mx-2">
    <h3 className="text-[20px] text-blue-500 md:text-[29px] text-center font-semibold mb-2">
      {title}
    </h3>
    <p className="text-white text-center text-[25px] md:text-[39px] font-bold  mb-4">{`R${price}/month`}</p>
    <ul className="text-gray-400 text-[16px] md:text-[18px] ">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex flex-row items-center justify-center py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 text-blue-500 m-3 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          {item}
        </li>
        
      ))}
    </ul>
    <div className="items-center text-center ">
    <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 bg-blue-500 text-white text-[17px] font-bold  rounded-sm shadow-md hover:bg-blue-600"
        >
          Join Now
        </motion.button>
    </div>
   
  </div>
);

const MembershipCards = () => {
  return (
    <div>
      {/* Other content */}
      <div className="text-white py-8">
          {/* Second part*/}

      <section className="">
        <h1 className="text-blue-500 text-[28px] md:text-[65px] font-bold text-center py-[2rem] md:pt-[12rem]">
          BECOME A MEMBER
        </h1>
        <h2 className="text-blue-500 text-[16px] md:text-[27px] pt-3 font-semibold text-center ">
          CHOOSE FROM OUR THRE OPTIONS BELOW
        </h2>
        <p className="text-black text-[16px] md:text-[20px] py-[2rem] text-center ">
          Membership at Solace is designed to give you the flexibility you need
          to train the way <br />
          you want. We offer commitment and no-commitment memberships, each with
          no sign-up fees.
        </p>
      </section>

     

        <div className="flex flex-col md:flex-row gap-[1rem] justify-center">
          <MembershipCard
            title="Basic"
            price={300}
            items={[
              "Access to gym equipment",
              "Group fitness classes",
              "Locker room access",
              "Personal training sessions available",
              "24/7 access",
            ]}
          />
          <MembershipCard
            title="Premium"
            price={600}
            items={[
              "All Basic features",
              "Sauna and spa access",
              "Nutritional counseling",
              "Unlimited group classes",
              "Priority scheduling for personal training",
            ]}
          />
          <MembershipCard
            title="Ultimate"
            price={1500}
            items={[
              "All Premium features",
              "Private workout space",
              "Free massage sessions",
              "VIP events and workshops",
              "Complimentary merchandise",
            ]}
          />
        </div>
      </div>
      {/* Other content */}

      
      <h2 className="text-gray-700 text-[16px] md:text-[23px] pt-3 py-[3rem]  text-center ">
        SPECIAL MONTH-TO-MONTH RATE AVAILABLE FOR FIRST RESPONDERS
      </h2>
    </div>
  );
};

export default MembershipCards;
