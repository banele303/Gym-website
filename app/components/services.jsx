"use client"

// pages/portfolio.js
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import '../globals.css';

const items = [
  {
    id: 1,
    title: "Group Classes",
    img: "/images/new11.jpg",
    desc: "We offer a range of fitness classes designed to cater to every individual's goals. From barbell and kettlebell classes targeting key muscle groups each week to high-energy circuit-style conditioning classes, our programs are crafted to elevate your fitness journey. Whether you're looking to refine specific movements, build strength, or boost overall cardiovascular endurance, our schedule ensures there is a class suited to your fitness aspirations.",
  },
  {
    id: 2,
    title: "Personal Training",
    img: "/images/new6.jpg",
    desc: "Personal training is a great way to elevate your fitness journey. Work with a dedicated coach one on one, with programs that are designed directly for your fitness goals.Whether you're aiming to build strength, enhance endurance, or achieve specific milestones, our personal training is your direct route to success. Experience a customized approach that takes your training to the next level, ensuring every session is a step towards realizing your fitness aspirations.",
  },
  {
    id: 3,
    title: "Open Gym",
    img: "/images/new9.jpg",
    desc: "Our facility is accessible every day, providing you with the freedom to work out on your own schedule. Equipped with everything you need, our open gym invites you to pursue your fitness goals at your own pace. Whether you're into strength training, cardio, or a combination of both, our space is designed to accommodate your individual workout preferences. Take charge of your fitness journey, anytime, with the convenience of our Open Gym.",
  },
];
const Single = ({ item }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start({ y: 0 });
      } else {
        controls.start({ y: -200, });
      }
    }, [controls, inView]);
  
    return (
      <section ref={ref} className="bg-gray-900 md:py-16">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="relative w-[full] h-[350px]  md:h-[400px] md:w-[600px] ">
              <Image
                src={item.img}
                alt=""
               fill
               
                className="absolute z-10 object-cover rounded-md px-2 md:px-[4rem] h-full w-full"
              />
            </div>
            <motion.div className="md:w-1/2 px-[1rem]" animate={controls}>
              <h2 className="text-[19px] md:text-[22px] font-bold mb-4 pt-[3rem]">{item.title}</h2>
              <p className="text-gray-600 text-[17px] md:text-[18px] mb-4">{item.desc}</p>
              <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500  text-white text-[15px] md:text-[19px] px-4 py-2 md:px-6 md:py-3 md:mt-10 mb-[2rem]"
          >

            <Link href='/contact-us' >Start Now</Link>
            
          </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  const Services = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      controls.start(inView ? { scaleX: 1 } : { scaleX: 0 });
    }, [controls, inView]);
  
    return (
      <div className="portfolio bg-gray-900 text-white" ref={ref}>
        <div className="text-center py-16">
          <h1 className="text-[18px] md:text-[50px] text-blue-500 font-semibold">WHAT WE OFFER</h1>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };
  
  export default Services;
