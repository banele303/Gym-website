"use client";

// components/ParallaxSection.js
import Image from "next/image";
import GymSection from "./GymSection";
import GettingStartedIsEasy from "../GettingStartedIsEasy";

const ParallaxSection = () => {
  return (
    <div className="relative pb-[15rem]  md:pb-[1rem] h-screen">
      <div className="parallax-image absolute md:top-0 md:left-0 w-full h-[100vh] md:h-[850px]">
        <Image
          src="/images/new4.jpg"
          alt="Your Image Alt Text"
          fill
           quality={100}
          className="brightness-50 object-cover h-full w-full"
        />
      </div>
      <div className="content relative z-10 flex flex-col items-center justify-center text-white h-full">
        <h2 className="text-[25px] text-center md:text-[43px] font-bold pt-[5rem] md:pt-[12rem]">
          Every
          <span className="text-[#1976d2] font-bold px-2 ">
            Body Is Unique. <br />
          </span>
          Find Something That Works For YOU
        </h2>
        <p className="px-[2rem] md:px-[5rem] text-[18px] text-center py-[2rem]">
          A beautiful training facility conveniently located in 
        </p>
    <GettingStartedIsEasy/>


    
      </div>
    </div>
  );
};

export default ParallaxSection;
